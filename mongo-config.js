const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1/users'
const client = new MongoClient(url, {useUnifiedTopology: true })

client.connect(async (err) => {
  const db = client.db('ecommerce')
  const collection = db.collection('users')
  const temp = await collection.findOne({ id: 1000})
  console.log('ONE', temp)

  await collection.updateMany(
    { gender: 'MAN' },
    { $set: { isDeleted: false } },
    { upsert: false, multi: true }
  )
  const result = await collection.find({ first_name: 'Andre'}).toArray()
  console.log(result)
  // const cursor = await collection.find({}) // for big data requests
  // while (await cursor.hasNext()) {
  //   const data = await cursor.next()
  //   console.log(data)
  // }
  // const array = await collection.find({}).toArray()
  // console.log(array) - for small data requests
})
