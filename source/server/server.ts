import * as express from "express";
import { Request, Response, NextFunction } from "express";
import {defineApis} from "@api/apiDefinitions";
import {ApiMethod} from "@api/apiDescriptor";

const server= express();
server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const apis = defineApis();
const router = express.Router();
for (const api of apis) {
  const apiPath = `/${api.version}/${api.resourceName}`;
  switch (api.apiMethod) {
    case ApiMethod.GET:
      router.get(apiPath, api.apiBody);
      break;
    case ApiMethod.POST:
      router.post(apiPath, api.apiBody);
      break;
    case ApiMethod.PUT:
      router.put(apiPath, api.apiBody);
      break;
    case ApiMethod.DELETE:
      router.delete(apiPath, api.apiBody);
      break;
    default:
      break;
  }
}

server.use('/api', router);
server.listen(3000, () =>{});