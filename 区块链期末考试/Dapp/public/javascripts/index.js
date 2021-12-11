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
                callback: function (notification) {
                    console.log('action button');
                }
            }
        },
        showProgress: showProgressBar
    };
  }

var nameall=[];
var addressall=[];
function zc(){
   


var name=document.getElementById("rname").value;
var address=document.getElementById("raddress").value;
nameall=name;
addressall=address;
// $('.c').on('click', function () {
        if(name!=""&&address!=""){ 
    var options = getOptions(); 
      options.title = '信息'; 
      options.description = '注册成功';
      options.width = 500;
      options.type = 'success';
      options.closeTimeout=1000;
      GrowlNotification.notify(options);
      return false;
        }
//   });



}
function dl(){
    var name=document.getElementById("lname").value;
    var address=document.getElementById("laddress").value;

       if(nameall!=""&&addressall!=""&&nameall==name&&addressall==address){
        return true;
       
      
       
    }else if (nameall==name&&addressall!=address){
        var options = getOptions(); 
        options.title = '信息'; 
        options.description = '地址错误,登录失败';
        options.width = 500;
        options.type = 'warning';
        options.closeTimeout=1000;
        GrowlNotification.notify(options);
        return false;
    }else{
        var options = getOptions(); 
        options.title = '信息'; 
        options.description = '用户不存在,登录失败';
        options.width = 500;
        options.type = 'error';
        options.closeTimeout=1000;
        GrowlNotification.notify(options);
        return false;
    }
}

const abi =  [
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
      "inputs": [],
      "name": "getBalance",
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
        },
        {
          "internalType": "uint256",
          "name": "val",
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
      "name": "b",
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
        },
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
          "internalType": "address",
          "name": "a",
          "type": "address"
        }
      ],
      "name": "queryReward_address",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
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
      "name": "getReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  let web3 = new Web3('ws://localhost:7545');
  var myContract = new web3.eth.Contract(abi, '0xf7a8933d7bEfdFD9e1a4888730007637b14BF4Da');
  let daiaccounts = [];
  var news = [];
  
  // const web3=new Web3(Web3.givenProvider);
  console.log(web3);
web3.eth.getAccounts().then(function(accounts) {
    daiaccounts = accounts;
    $(".showAccount").html(daiaccounts[0]);
    console.log(daiaccounts[0])
});

ethereum.on('accountsChanged', function(account) {
    // Time to reload your interface with accounts[0]!


    $(".showAccount").html(account);

    daiaccounts[0] = account[0];

});
var news =[];
      myContract.methods.newsData_addNews_group().call({from:daiaccounts[0],gas:3000000}).then(
    function(receipt) {
      $(".Add").html("");
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
                  <p>${news[i][2]}</p>
                
             
                  <button  class="btn btn-primary">打赏</button>
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







    



// const web3=new Web3(Web3.givenProvider);
    //               var daiaccounts = [];  
    //   var balance=[];
                //   var ethereumButton = document.querySelector('.b');
                  
                //   ethereumButton.addEventListener('click', () => {
                      //Will Start the metamask extension
                    //   ethereum.request({ method: 'eth_requestAccounts' });
                    //   getAccount(); 
                    //   console.log("调用方法执行"); 
                    //   web3.eth.getAccounts().then(function(accounts){
                    //     daiaccounts=accounts;
                    //     alert(daiaccounts)
                    // });
                //   });
                  
                //   async function getAccount() {
                //       daiaccounts = await ethereum.request({ method: 'eth_requestAccounts' });
                //       const account = daiaccounts[0];
                    
                  
                    //   $(".showAccount").html(daiaccounts);
                    // } 
                    // const sendEthButton = document.querySelector('.sendEthButton');
//Sending Ethereum to an address
// sendEthButton.addEventListener('click', () => {
//     ethereum
//         .request({
//             method: 'eth_sendTransaction',
//             params: [
//                 {
//                     from: daiaccounts[0],
//                     to: '0x90da0e0019f85eA24624B90ae6F62307535D8066',
//                     value: '0xc350'
//                 },
//             ],
//         })
//         .then((txHash) => console.log(txHash))
//         .catch((error) => console.error);
// });


// const getBalanceButton = document.querySelector('.getBalanceButton');
// getBalanceButton
// getBalanceButton.addEventListener('click', () => {
   
//     ethereum.request({
//         method: 'eth_getBalance',
//         params: [
//             daiaccounts[0],
//             'latest'

//         ],
//     })
//         .then((txHash) => console.log(txHash))
//         .catch((error) => console.error);
// });




$("#btn_confirmTransaction").click(function(){
    txid_=$("#txid").val();
    console.log("txid==>",txid_);
    myContract.methods.confirmTransaction(txid_).send({
        from:daiaccounts[0],
        gas: 1500000,
        gasPrice: '30000000'

    }).on('transactionHash', function(hash){
       console.log("transactionHash==>",hash);
       
    })
    .on('receipt', function(receipt){
        console.log("receipt",receipt);
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log("confirmation",confirmationNumber);
    })
    .on('error', function(error, receipt) {
       console.log("error",error);
    }
)
})



                                                      
  
         
      

      