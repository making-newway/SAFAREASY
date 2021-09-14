const express = require('express');
const request = require('request');
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/api/prices', (req, res) => {

    const { value } = req.body;
    
    // For converting any value, pass a json file in request
    // i.e.
    // {
    //      "value" : "USD"
    // }

    request('https://api.coindesk.com/v1/bpi/currentprice.json', function(err, response, body) {

        if(err) res.status(500).json({err: err});

        const float_rate = JSON.parse(body).bpi[value].rate_float;

        const valuation = value+'_INR'

        request(`https://free.currconv.com/api/v7/convert?q=${valuation}&compact=ultra&apiKey=${process.env.EXCHANGE_KEY}`, async function(error, respons, bodys) {
            if(error) res.status(500).json({err: error});

            const rate = await JSON.parse(bodys)[valuation];

            res.status(202).json(rate * float_rate);
        })
        
    })
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})
