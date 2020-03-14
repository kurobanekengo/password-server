import {Request, Response} from "express";

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

export const defineApi = (apiMethod: ApiMethod, version: ApiVersion, resourceName: string, apiBody: ApiBody) => {
  return { resourceName, version, apiMethod, apiBody};
};