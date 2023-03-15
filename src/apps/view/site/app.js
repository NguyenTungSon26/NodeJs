const http = require("http");
const server = http.createServer((req, res)=>{
    res.write("Son dep trai");
    res.end();
    console.log("Server running on port" +port);
}).listen(port=8080);