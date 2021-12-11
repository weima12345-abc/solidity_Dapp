//SPDX-License-Identifier: UNLICENSED
import "../contracts copy/token/ERC20/ERC20.sol";
pragma solidity ^0.8.0;

contract MyToken is ERC20 {
    //constructor是用于构造函数的
    constructor() ERC20("dai", "dai") {
        //铸造
        _mint(msg.sender, 100 * 10**uint256(decimals()));
    }

    function getDEctmals() public view returns (uint256) {
        return decimals();
    }
}

contract NewsContract_daijiatao {
    //新闻主持人
    address public host_daijiatao;
    //代币地址
    // MyToken erc;

    //记录一则新闻
    struct News_daijiatao {
        address host;
        string title;
        string newsCxt;
        uint256 accumulate;
        uint256 newsKey;
        bool exist;
    }

    //奖励新闻
    struct news_reward {
        address host;
        address host_reward;
        uint256 newsKey;
        uint256 reward_money;
        bool new_reward;
        bool exist;
        uint256 number;
        //  mapping(uint =>News_daijiatao) newsData_daijiatao;
    }
    struct hosts_reward {
        address host; //新闻奖励者
        uint256 newsKey; //奖励的新闻键
    }
    //存储所有新闻
    mapping(uint256 => News_daijiatao) public newsData_daijiatao;
    mapping(uint256 => News_daijiatao[]) newsData_group_daijiatao;
    mapping(address=>News_daijiatao[]) newsData_address_group_daijiatao;
    //记录发布新闻人
    mapping(uint256 => address) news_host_daijiatao;

    //记录奖励新闻人(uint)
    mapping(uint256 => news_reward) newsData_reward;
    mapping(uint256 => news_reward[]) newsData_group_reward;
    mapping(uint256 => mapping(address => news_reward[])) newsData_group_rewardM;

    //记录奖励新闻人(address)
    mapping(address => news_reward) news_address_reward;
    mapping(address => news_reward[]) news_address_group_reward;

    //
    mapping(uint256 => hosts_reward) hostsData_reward;
    mapping(uint256 => hosts_reward[]) hostsData_group_reward;
    //总新闻数
    uint public newsCnt_daijiatao;
    //得到最多奖励的新闻之键（Key）

    uint256 public maxRewardNews_daijiatao;

    //奖励的新闻数
    uint256 public reward;

    //添加新闻事件
    event AddNewsEvt(string indexed eventType, uint256 newsKey);

    //奖励新闻事件
    event RewardEvt(string indexed eventType, address sender, uint256 value);

    //记录受益人
    constructor() {
        host_daijiatao = msg.sender;
        // erc = MyToken(_erc20);
    }

    //只有主持人可执行
    modifier onlyHost_daijiatao(uint256 newsKey) {
        require(
            msg.sender == news_host_daijiatao[newsKey],
            "only host can do this"
        );
        _;
    }

   

    //添加一则新闻
    function addNews(string memory title, string memory newsCxt) public  returns (uint,string memory){
        newsCnt_daijiatao++;
           newsData_daijiatao[newsCnt_daijiatao].newsKey=newsCnt_daijiatao;
        newsData_daijiatao[newsCnt_daijiatao].host = msg.sender;
        newsData_daijiatao[newsCnt_daijiatao].title = title;
        newsData_daijiatao[newsCnt_daijiatao].newsCxt = newsCxt;
        newsData_daijiatao[newsCnt_daijiatao].accumulate = 0;
        newsData_daijiatao[newsCnt_daijiatao].exist = true;

        newsData_group_daijiatao[1].push(
            newsData_daijiatao[newsCnt_daijiatao]
        );
        newsData_address_group_daijiatao[msg.sender].push( newsData_daijiatao[newsCnt_daijiatao]);
        news_host_daijiatao[newsCnt_daijiatao] = msg.sender;


        emit AddNewsEvt("NewsAdd", newsCnt_daijiatao);
        return (newsCnt_daijiatao,newsCxt);
    }

    //奖励一则新闻
    function rewardNews(uint256 newsKey) public  payable {
 
        //主持人不可以奖励自己
        require(msg.sender !=newsData_daijiatao[newsKey].host, "host can not reward himself");

        //奖励金需大于0
            require(msg.value > 0, "reward value need grater than 0");

        //新闻必须存在
        require(newsData_daijiatao[newsKey].exist, "news not exist");

        //累加奖励
        newsData_daijiatao[newsKey].accumulate += msg.value;
   
         newsData_address_group_daijiatao[newsData_daijiatao[newsKey].host][newsKey-1].accumulate +=msg.value;
        //判断是否置换最高奖励的新闻
        if (
            newsData_daijiatao[newsKey].accumulate >
            newsData_daijiatao[maxRewardNews_daijiatao].accumulate
        ) {
            maxRewardNews_daijiatao = newsKey;
        }
        if (news_address_reward[msg.sender].exist != true) {
            hostsData_reward[newsKey].host = msg.sender;
            hostsData_group_reward[newsKey].push(hostsData_reward[newsKey]);
        }
   

        news_address_reward[msg.sender].newsKey = newsKey;
        news_address_reward[msg.sender].host = news_host_daijiatao[newsKey];
        news_address_reward[msg.sender].host_reward = msg.sender;
        news_address_reward[msg.sender].reward_money += msg.value;
        news_address_reward[msg.sender].exist = true;
        news_address_reward[msg.sender].number += 1;
        news_address_group_reward[msg.sender].push(
            news_address_reward[msg.sender]
        );

        newsData_reward[newsKey].newsKey = newsKey;
        newsData_reward[newsKey].host = news_host_daijiatao[newsKey];
        newsData_reward[newsKey].host_reward = msg.sender;
        newsData_reward[newsKey].reward_money += msg.value;
        newsData_reward[newsKey].exist = true;
        newsData_reward[newsKey].number += 1;

        newsData_group_reward[newsKey].push(newsData_reward[newsKey]);
        newsData_group_rewardM[newsKey][msg.sender].push(
            news_address_reward[msg.sender]
        );

        reward++;


        //触发奖励事件
        emit RewardEvt("Reward", msg.sender, msg.value);
    }

    // 退钱
    function returnMoney(uint256 ID) public returns (address) {
        //查询新闻存在
        require(ID <= newsCnt_daijiatao && ID >= 1);
        //查询该新闻已被奖励
        require(newsData_reward[ID].exist == true);

        news_reward[] storage f = newsData_group_rewardM[ID][msg.sender];
        // for(uint i=; i<=news_reward; i++)
        if (f[0].host_reward == msg.sender) {
            //    payable(f[f.length-1].host_reward).transfer(f[f.length-1].reward_money);
            newsData_daijiatao[ID].accumulate -= f[f.length - 1].reward_money;
            payable(f[f.length - 1].host_reward).transfer(f[f.length - 1].reward_money);
            f[f.length - 1].reward_money = 0;
             newsData_address_group_daijiatao[newsData_daijiatao[ID].host][ID-1].accumulate -=news_address_reward[msg.sender].reward_money;

        }

        return f[f.length - 1].host_reward;
    }


  //查询新闻是否存在
    function isNewsExist(uint256 newsKey) public view returns (bool) {
        return newsData_daijiatao[newsKey].exist;
    }
    //查询所有已发布的信息
     function newsData_addNews_group() public view returns (News_daijiatao[] memory) {
        return newsData_group_daijiatao[1];
    }

  
//查询某一个账户发布了哪些信息
     function newsData_address_group(address a) public view returns (News_daijiatao[] memory) {
        return (newsData_address_group_daijiatao[a]);
    }


 

//查询某个新闻所有已打赏账户
    function queryRewardAddressAll(uint256 newsKey)
        public
        view
        returns (hosts_reward[] memory)
    {
        //新闻必须存在
        require(newsData_reward[newsKey].exist, "news not exist");
        return hostsData_group_reward[newsKey];
    }

    //阅读新闻内容
    function queryCtx(uint256 newsKey)
        public
        view
        returns (string memory)
    {
        //新闻必须存在
        require(newsData_daijiatao[newsKey].exist, "news not exist");
        return (newsData_daijiatao[newsKey].newsCxt);
    }

    //查询新闻累积奖励
    function queryReward_Money(uint256 newsKey) public view returns (uint256) {
        //新闻必须存在
        require(newsData_reward[newsKey].exist, "news not exist");
        return newsData_daijiatao[newsKey].accumulate;
    }
      //查询某个新闻所有打赏信息
    function queryRewarUintdAll(uint256 newsKey)
        public
        view
        returns (news_reward[] memory)
    {
        //新闻必须存在
        require(newsData_reward[newsKey].exist, "news not exist");
        news_reward[] memory group = newsData_group_reward[newsKey];
        return group;
    }



    //接收奖励
    function getReward(uint256 newsKey) public onlyHost_daijiatao(newsKey) {
      require(  newsData_reward[newsKey].exist == true);
        payable(newsData_daijiatao[newsKey].host).transfer(newsData_daijiatao[newsKey].accumulate);
    }
}
 