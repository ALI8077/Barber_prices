const express = require('express')
const app = express()
const {CosmosClient} = require('@azure/cosmos')
//const db = null//
const conString = "AccountEndpoint=https://wbl-db-barber.documents.azure.com:443/;AccountKey=bascdZOjdV6cxrpeLReHYjLQY3zvsUzYcTBCxsvyhO90FOkHoGa52ORzi6M38qR8SCAc8bo4slmnn5vAP5jfPA==;"
const port = process.env.PORT || 8080
const path = require('path')
const client = new CosmosClient(conString)
const db = client.database("Barber-db")
const container = db.container("User") // container name

app.use(express.json())
app.use(express.static(path.join(__dirname,"/client/build")))


app.post("/prices", (req,res)=>{
    /*const data = {
        id: Date.now().toLocaleString(),
        value
    }*/
    console.log(req.body.value)
    //container.items.create(data)
    res.send(JSON.stringify(req.body.value))
})

app.listen(port,() => {
    console.log("server started")
})
