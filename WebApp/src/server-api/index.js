const express = require('express')
const app = express()
const fs = require('fs');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));
        let output = '[\n';
        data.forEach((product, index) => {
            output += `  {\n`;
            output += `    "imgeUrl": "${product.imgeUrl}",\n`;
            output += `    "name": "${product.name}",\n`;
            output += `    "weight": "${product.weight}",\n`;
            output += `    "price": "${product.price}"\n`;
            output += `  }`;
            if (index < data.length - 1) {
                output += ',';
            }
            output += '\n';
        });
        output += ']';
        res.send(output);
    } catch (err) {
        res.send({ message: 'Error reading db.json file!', error: err.message });
    }
})

app.post('/products', (req, res) => {
    const product = {
        imgeUrl: req.body.imgeUrl,
        name: req.body.name,
        weight: req.body.weight,
        price: req.body.price,
    };
    try {
        let products = [];
        try {
            products = JSON.parse(fs.readFileSync('db.json', 'utf8'));
        } catch (err) { }
        products.push(product);
        fs.writeFileSync('db.json', JSON.stringify(products));
        res.send({ message: 'Data added successful!', product });
    } catch (err) {
        res.send({ message: 'Data added unsuccessful!', error: err.message });
    }
});

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});