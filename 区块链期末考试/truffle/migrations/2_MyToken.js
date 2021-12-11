const news = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(news);
};