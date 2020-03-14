import {ApiDefinition, ApiMethod, ApiVersion, defineApi} from "@api/apiDescriptor";
import {getPasswords} from "@api/password/password";

export const defineApis = (): ApiDefinition[] => [
  defineApi(ApiMethod.GET,  ApiVersion.V1,"passwords", getPasswords)
];