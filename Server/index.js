const express = require('express');
const axios = require('axios');
const cors= require('cors')
require('dotenv')

//fetch
const Search=require('./Fetch/FetchSeacth')
const Genre=require('./Fetch/FetchGenre')
const Newer=require('./Fetch/FetchNewer')
const Pop=require('./Fetch/FetchPop')
const Manga=require('./Fetch/FetchManga')


const PORT = process.env.PORT;
const app = express();

AllowedOrigins=process.env.AllowedOrigins



app.use(cors())

//Routing
app.get('/search/:limit/:key/:offset', async (req,res) =>{
  const result= await Search(req.params.key,req.params.limit,req.params.offset || 0)
  res.send(result)
})
app.get('/genre/:limit/:uid/:offset', async (req,res) => {
  const result= await Genre(req.params.uid,req.params.limit,req.params.offset)
  res.send(result)
})
app.get('/new/:limit/:offset', async (req,res) => {
  const result = await Newer(req.params.limit,req.params.offset)
  res.send(result)
})
app.get('/pop/:limit/:offset', async (req,res) =>{
  const result = await Pop(req.params.limit,req.params.offset)
  res.send(result)
})

app.get('/manga/:id', async (req,res) =>{
  const result = await Manga(req.params.id)
  res.send(result)
})


// Starting server
app.listen(PORT,'0.0.0.0', () => {
  console.log(`✅ Server Running at Port: ${PORT}`);
});