const MongoClient = require('mongodb').MongoClient

// Como se conectar ao MongoDB
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // acessando a coleção todos, encontrando todos os itens, transformando pra array e depois printando
    // no console
    db.collection('Todos').find().toArray().then(docs => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, err => {
        console.log('Unable to fetch todos', err)
    })


    client.close()
}, )