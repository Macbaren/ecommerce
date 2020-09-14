import { MongoClient } from 'mongodb'
const url = 'mongodb://127.0.0.1'
const client = new MongoClient(url, {useUnifiedTopology: true })

client.connect(async (err) => {
  const db = client.db('ecommerce')
  const collection = db.collection('users')
  const array = collection.find({}).toArray()
  console.log(array.length)
})
