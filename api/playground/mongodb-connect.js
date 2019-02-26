const MongoClient = require('mongodb').MongoClient

// Como se conectar ao MongoDB
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // Inserindo um elemento na coleção nova(cria automaticamente)
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) return console.log('Unable to insert todo', err)

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: 'Kelven',
        age: 19,
        location: 'Brazil'
    }, (err, result) => {
        if(err) return console.log('Unable to insert user', err)

        console.log(JSON.stringify(result.ops, undefined, 2))
    })


    client.close()
}, )