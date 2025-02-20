const{createServer}=require('http');
const fs=require('fs');
const hostname='127.0.0.1';
const port=3000;
const server=createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8',"application/json");
    if(req.url==='/' || req.url==='/overview'){
        let data=JSON.parse(fs.readFileSync('./dev-data/data.json',{encoding:'utf-8'}));
        let product=fs.readFileSync('./templates/single-product.html',{encoding:'utf-8'});
        data = data.map(function(el,index){
            return product
            .replaceAll("{{productName}}",el.productName)
            .replaceAll("{{quantity}}",el.quantity)
            .replaceAll("{{image}}",el.image)
            .replaceAll("{{image1}}",el.image)
            .replaceAll("{{price}}",el.price)
            .replaceAll("{{id}}",el.id
            )
        });
        // console.log(data);
        let overviewtemplate=fs.readFileSync('./templates/overview.html',{encoding:'utf-8'});
        overviewtemplate=overviewtemplate.replaceAll("{{content}}",data.join(""));
        res.end(overviewtemplate);
    }else if (req.url.startsWith('/product/')) {
        // Extract ID from URL
        const urlArr = req.url.split("/");
        const id = urlArr[urlArr.length - 1];

        // Load data and find product by ID
        const data = JSON.parse(fs.readFileSync('./dev-data/data.json', { encoding: 'utf-8' }));
        const productData = data.find(el => el.id == id);

        if (productData) {
            // Load product template and replace placeholders
            let producttemplate = fs.readFileSync('./templates/product.html', { encoding: 'utf-8' });
            producttemplate = producttemplate
                .replaceAll("{{productName}}", productData.productName)
                .replaceAll("{{quantity}}", productData.quantity)
                .replaceAll("{{image}}", productData.image)
                .replaceAll("{{organic}}", productData.organic ? 'Organic' : 'Non-organic')
                .replaceAll("{{from}}", productData.from)
                .replaceAll("{{nutrients}}", productData.nutrients)
                .replaceAll("{{description}}", productData.description)
                .replaceAll("{{price}}", productData.price)
                .replaceAll("{{id}}", productData.id);
                res.end(producttemplate);
        }
        else {
            // Product not found
            res.statusCode = 404;
            res.end('<h1>Product not found</h1>');
        }
        
    }  else if (req.url.startsWith('/search')) {
        // Parse query string from URL
        const url = require('url');
        const queryObject = url.parse(req.url, true).query;
        const searchQuery = queryObject.p ? queryObject.p.toLowerCase() : '';
    
        // Load data and search for product
        const data = JSON.parse(fs.readFileSync('./dev-data/data.json', { encoding: 'utf-8' }));
        const productData = data.find(el => el.productName.toLowerCase() === searchQuery);
    
        if (productData) {
            // Redirect to product page
            res.writeHead(302, { Location: `/product/${productData.id}` });
            res.end();
        } else {
            // Load search template and replace message
            let searchTemplate = fs.readFileSync('./templates/search.html', { encoding: 'utf-8' });
            searchTemplate = searchTemplate.replace("{{message}}", "NOT FOUND");
            res.end(searchTemplate);
        }
    }
    // Thêm vào điều kiện else if để xử lý đường dẫn '/create'
else if (req.url === '/create' && req.method === 'GET') {
    // Hiển thị form HTML
    const createTemplate = fs.readFileSync('./templates/create.html', { encoding: 'utf-8' });
    res.end(createTemplate);

} else if (req.url === '/create' && req.method === 'POST') {
    // Nhận dữ liệu gửi từ form
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        // Phân tích dữ liệu gửi từ form
        const newProduct = Object.fromEntries(new URLSearchParams(body));

        // Kiểm tra dữ liệu không được để trống
        if (
            !newProduct.productName || !newProduct.image || !newProduct.from ||
            !newProduct.nutrients || !newProduct.quantity || !newProduct.price ||
            !newProduct.description
        ) {
           alert ('Invalid Input');
        }

        // Đọc file dữ liệu hiện tại
        const data = JSON.parse(fs.readFileSync('./dev-data/data.json', { encoding: 'utf-8' }));

        // Thêm ID và lưu sản phẩm mới
        newProduct.id = data.length + 1;
        newProduct.quantity = parseInt(newProduct.quantity);
        newProduct.price = parseFloat(newProduct.price);
        newProduct.organic = newProduct.organic === 'on'; // Chuyển giá trị checkbox
        data.push(newProduct);

        // Ghi dữ liệu mới vào file
        fs.writeFileSync('./dev-data/data.json', JSON.stringify(data, null, 2), { encoding: 'utf-8' });

        // Chuyển hướng đến trang sản phẩm vừa tạo
        res.writeHead(302, { Location: `/product/${newProduct.id}` });
        res.end();
    });
    }
    else{
        res.statusCode=404;
        res.end('<h1>Page not found</h1>');
    }
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});