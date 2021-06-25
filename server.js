const express = require('express');
const agents = require('./valorant.json');
const maps = require('./map.json')
const app = express();
const  serverless =require("serverless-http");
let port = process.env.Port || 3000;

app.get('/', (req, res) => {
    res.send('Welcome Dude ! Go to /api')
});
app.get('/api', (req, res) => {
   res.send('Hello This is A Valorant Api made By Naoufel Bahassoune.You can access to all Agents Stats and All informations by adding  /agents its look like /api/agents . You can access to a specific Agent Stats and All informations by adding his name  /api/agents/agent-name ex: /agents/jett . You can access to all Maps Stats and All informations by adding  /maps its look like /api/maps .You can access to a specific Map Stats and All informations by adding the map name /api/maps/map-name ex: /maps/icebox . ');
});
app.get('/api/agents', (req, res) => {
    res.send(agents);
 });
 app.get('/api/agents/:id',function (req,res) {
    const agent = agents.find(c=> c.id === req.params.id);
     if (!agent) return res.status(404).send('The Agent With The Given Name Not Found 404 😥 Available Agents : astra/brimstone/breach/viper/raze/phoenix/sova/sage/jett/skye/cypher/killjoy/omen   yoru will be added soon ! ')
     res.send(agent)  
});
app.get('/api/map', (req, res) => {
    return  res.redirect('/api/maps');
});
 app.get('/api/maps', (req, res) => {
    res.send(maps);
 });
 app.get('/api/maps/:id',function (req,res) {
    const map = maps.find(c=> c.id === req.params.id);
     if (!map) return res.status(404).send('The Map With The Given Name Not Found 404 😥 Available Maps: icebox/bind/haven/ascent/split')
     res.send(map)  
});
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
module.exports.handler = serverless(app);