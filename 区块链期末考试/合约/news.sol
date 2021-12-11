//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;
contract NewsContract_daijiatao {
    
     //新闻主持人
 address public host_daijiatao;
 
  //记录一则新闻
 struct News_daijiatao {
     address host;
   string title;
  string newsCxt;
  uint accumulate;
  bool exist;
 }
 
 //奖励新闻
 struct news_reward{
     address host;
     address host_reward;
     uint newsKey;
     uint reward_money;
     bool new_reward;
     bool exist;
     uint number;
    //  mapping(uint =>News_daijiatao) newsData_daijiatao;
 }
 struct hosts_reward{
     address host;//新闻奖励者
     uint newsKey;//奖励的新闻键

 }
  //存储所有新闻
 mapping(uint => News_daijiatao) public newsData_daijiatao;
 mapping(uint => News_daijiatao[])  newsData_group_daijiatao;
 //记录发布新闻人
mapping(uint =>address) news_host_daijiatao;

//记录奖励新闻人(uint)
mapping(uint =>news_reward) newsData_reward;
mapping(uint =>news_reward[]) newsData_group_reward;
mapping(uint =>mapping(address=>news_reward[])) newsData_group_rewardM;

//记录奖励新闻人(address)
mapping(address =>news_reward) news_address_reward;
mapping(address =>news_reward[]) news_address_group_reward;

//
mapping(uint=>hosts_reward) hostsData_reward;
mapping(uint=>hosts_reward[]) hostsData_group_reward;
 //总新闻数
 uint public newsCnt_daijiatao;
  //得到最多奖励的新闻之键（Key）
  
 uint public maxRewardNews_daijiatao;

 //奖励的新闻数
 uint public reward;
 
  //添加新闻事件
 event AddNewsEvt(string indexed eventType, uint newsKey);
 
  //奖励新闻事件
 event RewardEvt(string indexed eventType, address sender, uint value);
 
  //记录受益人
 constructor ()  {
   host_daijiatao = msg.sender;
 }
  //只有主持人可执行 
 modifier onlyHost_daijiatao( uint newsKey) {
   require(msg.sender == news_host_daijiatao[newsKey],
   "only host can do this");
    _;
 }
 //得到余额
    function getBalance() public view returns (uint) {
    return address(this).balance;
  }
  
 //添加一则新闻
 function addNews(string memory title,string memory newsCxt) public  returns( uint) {
   newsCnt_daijiatao++;
    newsData_daijiatao[newsCnt_daijiatao].host = msg.sender; 
   newsData_daijiatao[newsCnt_daijiatao].title = title; 
   newsData_daijiatao[newsCnt_daijiatao].newsCxt = newsCxt;
   newsData_daijiatao[newsCnt_daijiatao].accumulate = 0;
   newsData_daijiatao[newsCnt_daijiatao].exist = true;
   
 newsData_group_daijiatao[newsCnt_daijiatao].push(newsData_daijiatao[newsCnt_daijiatao]);
 news_host_daijiatao[newsCnt_daijiatao]=msg.sender;
   emit AddNewsEvt("NewsAdd", newsCnt_daijiatao);
   return newsCnt_daijiatao;
 }
 
  //奖励一则新闻
 function rewardNews(uint newsKey,uint val) public payable {
   //主持人不可以奖励自己
   require(msg.sender != host_daijiatao, "host can not reward himself");
 
   //奖励金需大于0
//    require(msg.value > 0, "reward value need grater than 0");
 	
   //新闻必须存在  
   require(newsData_daijiatao[newsKey].exist, "news not exist");
   
   //累加奖励 
   newsData_daijiatao[newsKey].accumulate += val;
   
    //判断是否置换最高奖励的新闻
   if (newsData_daijiatao[newsKey].accumulate > newsData_daijiatao[maxRewardNews_daijiatao].accumulate){
    maxRewardNews_daijiatao = newsKey;
   }
    if(news_address_reward[msg.sender].exist!=true){
     hostsData_reward[newsKey].host=msg.sender;
     hostsData_group_reward[newsKey].push(hostsData_reward[newsKey]);
 }

    news_address_reward[msg.sender].newsKey=newsKey;
    news_address_reward[msg.sender].host=news_host_daijiatao[newsKey];
    news_address_reward[msg.sender].host_reward=msg.sender;
    news_address_reward[msg.sender].reward_money +=val;
    news_address_reward[msg.sender].exist =true;
    news_address_reward[msg.sender].number +=1;
    news_address_group_reward[msg.sender].push(news_address_reward[msg.sender]);


    newsData_reward[newsKey].newsKey=newsKey;
    newsData_reward[newsKey].host=news_host_daijiatao[newsKey];
    newsData_reward[newsKey].host_reward=msg.sender;
    newsData_reward[newsKey].reward_money +=val;
    newsData_reward[newsKey].exist =true;
    newsData_reward[newsKey].number +=1;
  
    newsData_group_reward[newsKey].push( newsData_reward[newsKey]);
    newsData_group_rewardM[newsKey][msg.sender].push( news_address_reward[msg.sender]);
   

       reward++;

   
   

   //触发奖励事件
   emit RewardEvt("Reward", msg.sender, val);
 }
 
  // 退钱 
  function returnMoney(uint ID) public  returns (address) {
      //查询新闻存在
    require(ID <= newsCnt_daijiatao && ID >= 1);
    //查询该新闻已被奖励
    require( newsData_reward[ID].exist ==true);

    news_reward[] storage f = newsData_group_rewardM[ID][msg.sender];
    // for(uint i=; i<=news_reward; i++)
      if(f[0].host_reward == msg.sender) {
    //    payable(f[f.length-1].host_reward).transfer(f[f.length-1].reward_money);
        newsData_daijiatao[ID].accumulate -= f[f.length-1].reward_money;
        f[f.length-1].reward_money= 0;
       
      }
      return f[f.length-1].host_reward;
  }
 function a(uint newsKey) public view returns(news_reward[] memory) {

   return newsData_group_rewardM[newsKey][msg.sender];
 } 
  
      
 //查询新闻是否存在
 function isNewsExist(uint newsKey) public view returns(bool) {
   return newsData_daijiatao[newsKey].exist;
 }
 
  //查询所有新闻
 function queryRewarUintdAll(uint newsKey) public view returns(news_reward[] memory) {
     
 //新闻必须存在 
   require(newsData_reward[newsKey].exist,
   "news not exist");
 	news_reward[] memory group= newsData_group_reward[newsKey];
     return group;
 }

  function queryRewardAddressAll(uint newsKey) public view returns(hosts_reward[] memory) {
         //新闻必须存在  
  require(newsData_reward[newsKey].exist,
 	  "news not exist");
  return hostsData_group_reward[newsKey];
 }
 
  //阅读新闻内容
 function queryCtx(uint newsKey) public view returns(string memory,address ) {
      //新闻必须存在  
   require(newsData_daijiatao[newsKey].exist,
 	  "news not exist");
   return (newsData_daijiatao[newsKey].newsCxt,news_host_daijiatao[newsKey]);
 }
 
 
  //查询新闻累积奖励
 function queryReward_Money(uint newsKey) public view returns(uint) {
         //新闻必须存在  
  require(newsData_reward[newsKey].exist,
 	  "news not exist");
  return  newsData_daijiatao[newsKey].accumulate;
 }
 function queryReward_address(address a) public view returns(uint,uint){
         //新闻发布人必须存在  
    require(news_address_reward[msg.sender].exist,
 	  "host not reward");
 	  //news_reward[] memory group=news_address_group_reward[a];
 	  
 	  return (news_address_reward[a].reward_money,news_address_reward[a].newsKey);
 }
 
  //接收奖励
 function getReward(uint newsKey) public onlyHost_daijiatao(newsKey){
      newsData_reward[newsKey].exist =true;
  payable(news_host_daijiatao[newsKey]).transfer(   address(this).balance);
 }
}