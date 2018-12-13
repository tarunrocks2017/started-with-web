let file = require('fs');

const http = require('http');

http.createServer((req,res) => {
    if(req.url === "/showFile"){
    file.readFile('index.html',function(err,pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgResp);
        }
         
        res.end();  
    });
}else if(req.url === "/showImage"){
    let imageFile = file.createReadStream('icon.png');
       imageFile.pipe(res);
       console.log(res);

}else if(req.url === "/showBigFile"){
    let bigFile = file.createReadStream("sample.txt");
    bigFile.pipe(res);
}
}).listen(8080);