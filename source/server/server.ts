import * as express from "express";
import {Request, Response, NextFunction} from "express";

const _server = express();
_server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const _router = express.Router();
_router.use((req, res, next) => {
  next();
});

export const server = _server;
export const router = _router;