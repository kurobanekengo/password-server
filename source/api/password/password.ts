import { ApiBody } from "@api/apiDescriptor";

export const getPasswords: ApiBody = (req, res) => {
  res.send({
    message: "HELLO, WORLD"
  });
};