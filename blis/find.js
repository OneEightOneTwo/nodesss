//初始化客户端
const { MongoClient } = require('mongodb');

//连接路径
const url = 'mongodb://localhost:27017';

//数据库名
const dbName = 'salesdata';

MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    //选库
    const db = client.db(dbName);
    //选表
    const collection = db.collection('yonghu');
    // Insert some documents
    collection.find({
        
    }).toArray((err,docs)=> {
        if(err) throw err;
        console.log(docs);
    })
    //关闭连接
    client.close();

})