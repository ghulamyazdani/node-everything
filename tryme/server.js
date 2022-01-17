import {svgret} from "./svgret.js"
import express from 'express';
 const app = express();

  app.get('/date', (req, res) =>(
      res.send(svgret(req.query))
  ))
  const port = process.env.PORT || 3000;
  app.listen('3000',() =>{
      console.log(`listening on http://localhost:${port}`)
  })