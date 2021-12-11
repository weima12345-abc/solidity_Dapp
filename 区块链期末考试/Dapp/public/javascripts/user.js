

function getOptions() {
    var position = $('#notification-position').val();
    var closeTimeout = $('#close-timeout').val();
    var animation = $('#animation').val();
    var showButtons = $('#show-buttons').get(0).checked;
    var showProgressBar = $('#show-progress-bar').get(0).checked;
    var animationOptions = {
        open: animation + '-in',
        close: animation + '-out'
    };

    if (animation === 'none') {
        animationOptions = {
            open: false,
            close: false
        };
    }

    return options = {
        description: 'I am a success notification',
        position: position,
        closeTimeout: closeTimeout,
        closeWith: ['click'],
        animation: animationOptions,
        showButtons: showButtons,
        buttons: {
            action: {
                callback: function(notification) {
                    console.log('action button');
                }
            }
        },
        showProgress: showProgressBar
    };
}

var nameall = [];
var addressall = [];

function zc() {



    var name = document.getElementById("rname").value;
    var address = document.getElementById("raddress").value;
    nameall = name;
    addressall = address;

    if (name != "" && address != "") {
        var options = getOptions();
        options.title = '信息';
        options.description = '注册成功';
        options.width = 500;
        options.type = 'success';
        options.closeTimeout = 1000;
        GrowlNotification.notify(options);
        return false;
    }




}

function dl() {
    var name = document.getElementById("lname").value;
    var address = document.getElementById("laddress").value;

    if (nameall != "" && addressall != "" && nameall == name && addressall == address) {
        return true;



    } else if (nameall == name && addressall != address) {
        var options = getOptions();
        options.title = '信息';
        options.description = '地址错误,登录失败';
        options.width = 500;
        options.type = 'warning';
        options.closeTimeout = 1000;
        GrowlNotification.notify(options);
        return false;
    } else {
        var options = getOptions();
        options.title = '信息';
        options.description = '用户不存在,登录失败';
        options.width = 500;
        options.type = 'error';
        options.closeTimeout = 1000;
        GrowlNotification.notify(options);
        return false;
    }
}
const abi =[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "string",
        "name": "eventType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      }
    ],
    "name": "AddNewsEvt",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "string",
        "name": "eventType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "RewardEvt",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "host_daijiatao",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxRewardNews_daijiatao",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "newsCnt_daijiatao",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "newsData_daijiatao",
    "outputs": [
      {
        "internalType": "address",
        "name": "host",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "newsCxt",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "accumulate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "exist",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reward",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "newsCxt",
        "type": "string"
      }
    ],
    "name": "addNews",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      }
    ],
    "name": "rewardNews",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ID",
        "type": "uint256"
      }
    ],
    "name": "returnMoney",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      }
    ],
    "name": "isNewsExist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "newsData_addNews_group",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "host",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "newsCxt",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "accumulate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newsKey",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "exist",
            "type": "bool"
          }
        ],
        "internalType": "struct NewsContract_daijiatao.News_daijiatao[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "newsData_address_group",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "host",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "newsCxt",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "accumulate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newsKey",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "exist",
            "type": "bool"
          }
        ],
        "internalType": "struct NewsContract_daijiatao.News_daijiatao[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      }
    ],
    "name": "queryRewardAddressAll",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "host",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "newsKey",
            "type": "uint256"
          }
        ],
        "internalType": "struct NewsContract_daijiatao.hosts_reward[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      }
    ],
    "name": "queryCtx",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      }
    ],
    "name": "queryReward_Money",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      }
    ],
    "name": "queryRewarUintdAll",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "host",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "host_reward",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "newsKey",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward_money",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "new_reward",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "exist",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "number",
            "type": "uint256"
          }
        ],
        "internalType": "struct NewsContract_daijiatao.news_reward[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newsKey",
        "type": "uint256"
      }
    ],
    "name": "getReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
let web3 = new Web3('ws://localhost:7545');
var myContract = new web3.eth.Contract(abi, '0xF1b8b46f1A3EE5720e68A01dCA3DA972d27d143C');
let changeAccount = [];
var news = [];

// const web3=new Web3(Web3.givenProvider);
console.log(web3);
web3.eth.getAccounts().then(function(accounts) {
  let daiaccounts = [];

    daiaccounts = accounts;
  
    $(".showAccount").html(daiaccounts[0]);

    var a=[];
//查询当前用户发布的新闻
myContract.methods.newsData_address_group( daiaccounts[0]).call({ from: daiaccounts[0] }).then(
  function(receipt) {
    $(".Add").html("");
      news = receipt;
   
      for (i = 0; i < news.length; i++) {
 
           

          let inserString =
              `

              <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">${news[i][1]} <i class="bx bx-chevron-down icon-show">2021-06-01</i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                <p id="${news[i][4]}" onclick="get()">${news[i][2]}</p>
               
               
                
                <button onclick="getReward()"   class="btn btn-primary"> 已被打赏 </button>
                <span>${news[i][3]} wei</span>
            
          </div>                 

        </li>
`
          let inserStrings = decodeURIComponent(inserString);
          $.ajax({
              url: 'http://127.0.0.1:5500/Dapp/user.html',
              type: 'get',
              datatype: 'json',
              success: function(res) {
                  $(".Add").html(inserStrings + document.getElementsByClassName("Add")[0].innerHTML)
              }
          })
     


     


      }


   


  }
);
});

ethereum.on('accountsChanged', function(account) {
    // Time to reload your interface with accounts[0]!


    $(".showAccount").html(account);
    changeAccount[0]=account[0];
//查询当前用户发布的新闻
myContract.methods.newsData_address_group( account[0]).call({ from: account[0] }).then(
  function(receipt) {
    $(".Add").html("");
    var k=0;
      news = receipt;
      for (i = 0; i < news.length; i++) {

          let inserString =
              `

              <li data-aos="fade-up" data-aos-delay="${k}">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">${news[i][1]} <i class="bx bx-chevron-down icon-show">2021-06-01</i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                <p id="${news[i][4]}" onclick="get()"  >${news[i][2]}</p>
                
               
                <button  onclick="getReward()"  class="btn btn-primary"> 已被打赏 </button>
                <span>${news[i][3]} wei</span>
          </div>                 

        </li>
`
          let inserStrings = decodeURIComponent(inserString);
          $.ajax({
              url: 'http://127.0.0.1:5500/Dapp/user.html',
              type: 'get',
              datatype: 'json',
              success: function(res) {
                  $(".Add").html(document.getElementsByClassName("Add")[0].innerHTML+inserStrings)
              }
          })

      

      }
  }
);
});

//查询所有已经发布的新闻
myContract.methods.newsData_addNews_group().call({from:changeAccount[0],gas:3000000}).then(
  function(receipt) {
    $(".Add1").html("");
      news = receipt;
     
      for (i = 0; i < news.length; i++) {
        
     
          let inserString =
              `
              <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">${news[i][1]} <i class="bx bx-chevron-down icon-show">2021-06-01</i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                <p id="${news[i][4]}" onclick="get()" >${news[i][2]}</p>
              
                  <a onclick="get()" data-toggle="modal" data-dismiss="modal" data-target="#login">    <button class="btn btn-primary">打赏</button></a>
          </div>                 

        </li>
`
          let inserStrings = decodeURIComponent(inserString);
          $.ajax({
              url: 'http://127.0.0.1:5500/Dapp/user.html',
              type: 'get',
              datatype: 'json',
              success: function(res) {
                  $(".Add1").html(inserStrings + document.getElementsByClassName("Add1")[0].innerHTML)
              }
          })
      }
  }
);


//增加一则新闻
const sendEthButton = document.querySelector('.sendEthButton');
sendEthButton.addEventListener('click', () => {
    var title = document.getElementById("title").value;
    var ctx = document.getElementById("ctx").value;
    if (title != '' && ctx != '') {
        myContract.methods.addNews(title,ctx).send({from: changeAccount[0], gas:3000000}).then(
            function(receipt) {

                ethereum
                    .request({
                        method: 'eth_sendTransaction',
                        params: [{
                            from: changeAccount[0],
                            to: '0x90da0e0019f85eA24624B90ae6F62307535D8066',
                            value: '0xc350'
                        }, ],
                    })
                    .then(function(hash) {
                      //查询当前用户发布的新闻
                      myContract.methods.newsData_address_group( changeAccount[0]).call({ from: changeAccount[0] }).then(
                        function(receipt) {
                          $(".Add").html("");
                      
                            news = receipt;
                            for (i = 0; i < news.length; i++) {
                              var k;
                              k++;
                              k =k*100;
                                let inserString =
                                    `
                      
                                    <li data-aos="fade-up" data-aos-delay="${k}">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">${news[i][1]} <i class="bx bx-chevron-down icon-show">2021-06-01</i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                                      <p id="${news[i][4]}" onclick="get()">${news[i][2]}</p>
                                      
                                 
                                      <button  class="btn btn-primary"> 已被打赏 </button>
                                      <span>${news[i][3]}  wei</span>
                                </div>                 
                      
                              </li>
                      `
                                let inserStrings = decodeURIComponent(inserString);
                             
                                        $(".Add").html(inserStrings + document.getElementsByClassName("Add")[0].innerHTML)
                       
                            }
                        }
                      );
                     //查询所有已经发布的新闻
                      myContract.methods.newsData_addNews_group().call({from:changeAccount[0],to: '0x641cF3601C9581923ee70883363644c0bC3ECfCF',gas:3000000}).then(
                        function(receipt) {
                          $(".Add1").html("");
                            news = receipt;
                            var k=0;
                            for (i = 0; i < news.length; i++) {
                              
                              k++;
                              k =k*100;
                                let inserString =
                                    `
                                    <li data-aos="fade-up" data-aos-delay="${k}">
                                    <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">${news[i][1]} <i class="bx bx-chevron-down icon-show">2021-06-01</i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                                      <p id="${news[i][4]}" onclick="get()">${news[i][2]}</p>
                                      
                                 
                                      <a data-toggle="modal" data-dismiss="modal" data-target="#login">    <button class="btn btn-primary">打赏</button></a>
                                </div>                 
                      
                              </li>
                      `
                                let inserStrings = decodeURIComponent(inserString);
                                $.ajax({
                                    url: 'http://127.0.0.1:5500/Dapp/user.html',
                                    type: 'get',
                                    datatype: 'json',
                                    success: function(res) {
                                        $(".Add1").html(inserStrings + document.getElementsByClassName("Add1")[0].innerHTML)
                                    }
                                })
                            }
                        }
                      );
                      
                    
                        var options = getOptions();
                        options.title = '信息';
                        options.description = '新闻发布成功';
                        options.width = 500;
                        options.type = 'success';
                        options.closeTimeout = 1000;
                        GrowlNotification.notify(options);
                    })
                    .catch((error) => console.error);

            }
        );
       
    } else {
        var options = getOptions();
        options.title = '信息';
        options.description = '发布的新闻不能为空！新闻发布失败';
        options.width = 500;
        options.type = 'error';
        options.closeTimeout = 1000;
        GrowlNotification.notify(options);
    }


})



//奖励一则新闻
var id;
function reward() {
  // Array.from(document.getElementsByClassName("a")).forEach(i =>
  //   i.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode));
alert(id)
    var money = document.getElementById("money").value;
alert(changeAccount[0])

    myContract.methods.rewardNews(id).send({ from: changeAccount[0], to: '0x1E724E105972EDf0EC02d1ff6C9AF3106fb1677D', gas: 3000000,value:money }).then(
        function(receipt) {
          ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [{
                  from: changeAccount[0],
                  to: '0x7fE3bC3FCc9d7d19254D4DE515eC395dA9768331',
                  value: '0xc350'
              }, ],
          })
          .then(function(hash){
            
            var options = getOptions();
            options.title = '信息';
            options.description = '该则新闻打赏成功';
            options.width = 500;
            options.type = 'success';
            options.closeTimeout = 1000;
            GrowlNotification.notify(options);
          }
           
        )}
    );
}



  function get(){
 
    var arr=document.getElementsByTagName('p');
   for(var i=0;i<arr.length;i++){
     arr[i].onclick=function(){
       id=this.id;
       alert(id)
     }
    
   }
  }

  //退钱
  function returnMoney(){
     
    var newskey4 = document.getElementById("newskey4").value;
    myContract.methods.returnMoney(Number(newskey4)).send({from:changeAccount[0], to: '0x1E724E105972EDf0EC02d1ff6C9AF3106fb1677D',gas:3000000}).then(
        function(receipt) {
            if (receipt) {
                var options = getOptions();
                options.title = '新闻是否退款';
                options.description = '已退款';
                options.width = 500;
                options.type = 'success';
                options.closeTimeout = 3000;
                GrowlNotification.notify(options);
            } else {
                var options = getOptions();
                options.title = '新闻是否退款';
                options.description = '未退款';
                options.width = 500;
                options.type = 'error';
                options.closeTimeout = 3000;
                GrowlNotification.notify(options);
            }
            
        })
  }






//查询新闻是否存在
function searchTf() {
    var newskey1 = document.getElementById("newskey1").value;
    myContract.methods.isNewsExist(Number(newskey1)).call().then(
        function(receipt) {
            if (receipt == true) {
                var options = getOptions();
                options.title = '新闻是否存在';
                options.description = '存在';
                options.width = 500;
                options.type = 'info';
                options.closeTimeout = 3000;
                GrowlNotification.notify(options);
            } else {
                var options = getOptions();
                options.title = '该则新闻是否存在';
                options.description = '不存在';
                options.width = 500;
                options.type = 'error';
                options.closeTimeout = 3000;
                GrowlNotification.notify(options);
            }
        }
    );
}


//查询新闻内容
function searchCtx() {
    var newskey2 = document.getElementById("newskey2").value;

    myContract.methods.queryCtx(Number(newskey2)).call().then(
        function(receipt) {

            var options = getOptions();
            options.title = '该则新闻内容';
            options.description = receipt;
            options.width = 500;
            options.type = 'info';
            options.closeTimeout = 3000;
            GrowlNotification.notify(options);
        })
}


//查询新闻累积奖励
function searchReward() {
    var newskey3 = document.getElementById("newskey3").value;
    myContract.methods.queryReward_Money(Number(newskey3)).call().then(
        function(receipt) {

            var options = getOptions();
            options.title = '该则新闻累计的最高奖励';
            options.description = receipt;
            options.width = 500;
            options.type = 'info';
            options.closeTimeout = 3000;
            GrowlNotification.notify(options);
        })
}

//查询某个新闻已被谁打赏过
function queryRewardAddress(){
    var newskey5 = document.getElementById("newskey5").value;
    myContract.methods.queryRewardAddressAll(Number(newskey5)).call().then(
        function(receipt) {

            var options = getOptions();
            options.title = '该则新闻被打赏的账户';
            options.description = receipt;
            options.width = 500;
            options.type = 'info';
            options.closeTimeout = 3000;
            GrowlNotification.notify(options);
        })
}

//查询某个新闻所有已打赏账户
function queryRewardAddress(){
  var newskey5 = document.getElementById("newskey5").value;
  myContract.methods.queryRewardAddressAll(Number(newskey5)).call().then(
      function(receipt) {

          var options = getOptions();
          options.title = '该则新闻被打赏的账户';
          options.description = receipt;
          options.width = 500;
          options.type = 'info';
          options.closeTimeout = 3000;
          GrowlNotification.notify(options);
      })
}

//查询某个新闻所有打赏信息
function queryRewardUint(){
  var newskey6 = document.getElementById("newskey6").value;
  myContract.methods.queryRewarUintdAll(Number(newskey6)).call().then(
      function(receipt) {

          var options = getOptions();
          options.title = '该则新闻被打赏的信息';
          options.description = receipt;
          options.width = 500;
          options.type = 'info';
          options.closeTimeout = 3000;
          GrowlNotification.notify(options);
      })
}



//接收奖励

function getReward(){
  alert(1)
  myContract.methods.getReward(id).send({from:changeAccount[0], to: '0xfc1b519FA255d973fB266b777c2Fd83308e13Cf8', gas: 3000000}).then(
    function(receipt) {


        var options = getOptions();
        options.title = '信息';
        options.description = '该则新闻内容获得奖励成功';
        options.width = 500;
        options.type = 'success';
        options.closeTimeout = 3000;
        GrowlNotification.notify(options);
    })
}

