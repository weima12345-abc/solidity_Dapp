# solidity_Dapp
这是一个关于区块链上的dapp具体实现。真实新闻系统是基于区块链的高安全性，高透明性以及不可篡改性，社会各界对区块链的关注度
也越来越高，所以我们联合共同打造了这个基于区块链的为广大社会群体服务的系统平台。
一。 功能介绍
1. 登录注册
   这个登录注册不需要连接数据库，我把账户密码全都保存在区块链上的智能合约中。登录注册后会自动同步到广大的链式记忆中，不能够二次更改，规则不允许。

2. 发表真实的新闻
   每当用户发表一个新闻时，被记录在区块链中，在前端显示，也能看到其他用户发布的新闻

3. 赞赏其他用户发布的新闻
   连接metamask公链，使用USDT虚拟货币

二。 项目启动
1. 你需要一个metamask账户和remix智能合约编译器，网上都可以下载。
2. 以上两个启动后，将合约部署到公链上，得到abi和合约地址，在js中粘贴到特定的位置。
3. 用vs code 本地服务打开页面就可以使用了！
