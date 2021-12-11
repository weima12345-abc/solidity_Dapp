const news = artifacts.require("NewsContract_daijiatao");

module.exports = function(deployer) {
    deployer.deploy(news);
};