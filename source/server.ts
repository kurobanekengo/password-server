
import express from 'express';
const server: express.Express = express();

server.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.get('/passwords', (req: any, res: any) => {
  res.send('Hello World!!');
});
server.listen(3000, () =>{});