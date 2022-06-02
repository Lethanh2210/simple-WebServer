const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err){
            return err;
        }else{
            res.writeHead(200,'utf-8',{'Content-Type': 'text/html'})
            res.write(data)
            return res.end();
        }

    })


})

server.listen('8080',()=>{
    console.log('server running in port 8080');
})