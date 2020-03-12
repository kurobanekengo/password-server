import * as express from "express";
import { Request, Response, NextFunction } from "express";

export enum ApiMethod {
  POST, GET, DELETE, PUT
}

export enum ApiVersion {
  V1 = "v1"
}

export type ApiBody = (req: Request, res: Response) => void;

export interface ApiDefinition {
  resourceName: string;
  version: ApiVersion;
  apiMethod: ApiMethod;
  apiBody: ApiBody;
}

const defineApi = (resourceName: string, version: ApiVersion, apiMethod: ApiMethod, apiBody: ApiBody) => {
  return { resourceName, version, apiMethod, apiBody};
};

const defineApis = (): ApiDefinition[] => {
  const v1 = ApiVersion.V1;
  const get  = ApiMethod.GET;
  return [
    defineApi("passwords", v1,  get, getPasswords)
  ];
};

const getPasswords: ApiBody = (req, res) => {
  res.send({
    message: "HELLO, WORLD"
  });
};

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