const file1 = require("fs");
const http = require("http");

http.createServer((req,res) => {
    console.log(req.url);
     file1.exists("/home/tarun/Documents/MountBlueProjects/04-http-project"+req.url,(bool) => {
        file1.readFile("/home/tarun/Documents/MountBlueProjects/04-http-project"+req.url,(err,text) => {
            if(err){
            res.writeHead(404,"file not found ",{'content': 'text/html'});
            }else{
                res.write(text);
            }
        })
    });
    
}).listen(8080);

