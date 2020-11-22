import {ApiDeclarations} from "@core/api/apiDefinitions";
import {ApiDeclaration} from "@core/api/apiDescriptor";
import {PasswordEntity} from "@core/entity/passwordEntity";
import {VOID, Void} from "@core/model/common";
import {router} from "@server/server";

const getPasswords: ApiDeclaration<Void, PasswordEntity[], 1> = ApiDeclarations.getPasswords;

// FIXME リクエスト型がタイプセーフになっていない
getPasswords.defineApi(1, () => {
  return [];
});

const api = getPasswords.getApi(1);
router.get(`/${api.apiPath}`, (req, res) => {
  const apiResult = api.apiBody(VOID);
  res.send(apiResult);
});