import express from 'express';
 const app = express();

  app.get('/chalra=:color', (req, res) =>(
      res.json({color:req.params.color})
  ))
  app.listen('3000',() =>{
      console.log("listening on http://localhost:3000")
  })