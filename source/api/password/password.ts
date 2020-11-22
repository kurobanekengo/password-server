import {Api} from "@core/api/api";
import { CategoryId } from "@core/entity/categoryEntity";
import {PasswordEntity} from "@core/entity/passwordEntity";
import {VOID, Void} from "@core/model/common";
import {router} from "@server/server";

const v1 = Api.v1; 

v1.getPasswords.implementApi((request) => {
  return { data: { passwords: [] } };
});

console.log(`register api: ${v1.getPasswords.path}`);
router.get(`/${v1.getPasswords.path}`, (req, res) => {
  console.log(req.query);
  const apiResult = v1.getPasswords.callApi({
    data: {
      keyword: "",
      categoryId: CategoryId("")
    }
  });
  res.send(apiResult);
});