const{createServer}=require('http');
const fs=require('fs');
const hostname='127.0.0.1';
const port=3000;
const server=createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8',"application/json");
    // let readthis=fs.readFileSync('./txt/read-this.txt',{encoding:'utf-8'}).toString();
    // let inputContent=fs.readFileSync('./txt/input.txt',{encoding:'utf-8'}).toString();
    // let appendContent=fs.readFileSync('./txt/append.txt',{encoding:'utf-8'}).toString();
    // let finalContent=readthis+inputContent+appendContent;
    // fs.writeFileSync('./txt/final.txt',finalContent);

    if(req.url==='/'){
        res.end('<h1>This is homepage</h1>');
    }else if(req.url==='/overview'){
        res.end('<h1>This is overview page</h1>');
    }else if(req.url==='product'){
        res.end('<h1>This is product page</h1>');
    }else if(req.url.startsWith("/api")){
        // let data = JSON.parse(fs.readFileSync('./dev-data/data.json'));
        // res.end(JSON.stringify(data));
        console.log(req.url.split("/"));
        let urlArr=req.url.split("/");
        if(urlArr.length===2){
            let data = JSON.parse(fs.readFileSync('./dev-data/data.json'));
            res.end(JSON.stringify(data));
        }else{
            let id = urlArr[urlArr.length-1];
            let data = JSON.parse(fs.readFileSync('./dev-data/data.json'));
            let product = data.find((el)=>el.id==id);
            if(product){
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(product));
            }
            else{
                res.statusCode=404;
                res.end('<h1>Product not found</h1>');
            }
        }
    }
    else{
        res.statusCode=404;
        res.end('<h1>Page not found</h1>');
    }

} );
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});