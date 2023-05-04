const app = require('express')();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());

app.get('/api', async (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Hello World! From Anas.'
    })
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})