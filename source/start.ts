import {server, router} from "@server/server";
import {getConfig} from "@core/config/applicationConfig";
import "@api/password/password";

const config = getConfig();
server.use(`/${config.api.prefixPath}`, router);
server.listen(config.api.port, config.api.host, () =>{
  console.log(`listen on ${config.api.host}:${config.api.port}`)    
});