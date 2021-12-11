const Hellworld =artifacts.require("NewsContract_daijiatao");
contract('news',async accounts => {
  var cnts;//全局变量,新闻个数

  //检查未发布新闻时，新闻个数
    it("检查新闻个数",async () => {
        let instance =await Hellworld.deployed();
        let cnt=await instance.newsCnt_daijiatao();
        cnts=cnt;
        assert.equal(cnt,0,'内容不一致');
    });
    //检查发布第一个新闻
    it("检查添加新闻",async () => {
        let instance =await Hellworld.deployed();
        let news_=await instance.addNews('哈哈','哈哈');
    });
        //检查发布第一个新闻时，新闻个数
        it("检查新闻个数",async () => {
            let instance =await Hellworld.deployed();
            let cnt=await instance.newsCnt_daijiatao();
            cnts=cnt;
            assert.equal(cnt,1,'内容不一致');
        });
    //检查发布第一个新闻时，新闻内容
    it("检查新闻内容",async () => {
        let instance =await Hellworld.deployed();
        let ctx_=await instance.queryCtx(cnts);
        assert.equal(ctx_,"哈哈",'内容不一致');
    });

       //检查发布第一个新闻时，新闻是否存在
       it("检查新闻是否存在",async () => {
        let instance =await Hellworld.deployed();
        let ys_=await instance.isNewsExist(cnts);
        assert.equal(ys_,true,'内容不一致');
    });

        //检查发布第二个新闻
    it("检查添加新闻",async () => {
        let instance =await Hellworld.deployed();
        let news_=await instance.addNews('哈哈','哈哈');
    });
      //检查发布第二个新闻时，新闻个数
    it("检查新闻个数",async () => {
        let instance =await Hellworld.deployed();
        let cnt=await instance.newsCnt_daijiatao();
        cnts=cnt;
        assert.equal(cnt,2,'内容不一致');
    });
    //检查发布第二个新闻时，新闻是否存在
    it("检查新闻是否存在",async () => {
        let instance =await Hellworld.deployed();
        let ys_=await instance.isNewsExist(cnts);
        assert.equal(ys_,true,'内容不一致');
    });


  
});