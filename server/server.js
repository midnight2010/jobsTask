const express = require('express');
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB')
const corsOptions = require('./config/corsOptions')
const Job = require('./model/Job')
require('dotenv').config();
const PORT = process.env.PORT || 3000;

connectDB()

app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/', async (req,res) => {
   const jobs = await Job.find();
   if(!jobs) return res.status(204).json({message:"Jobs not found"})
   res.json(jobs)
})  


app.post('/job', async (req,res) => {
    const result = await Job.create(req.body)
    res.status(200).json(result);
})

app.post('/update', async (req,res) => {
  const {_id,isFavorite} = req.body;
  await Job.findOneAndUpdate({_id},{isFavorite}).exec();
    
})


mongoose.connection.once('open',() => {
    console.log('Database connection on');
    app.listen(PORT,
    () => console.log(`Server is running on ${PORT}`))
})

