// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Handle ban request
app.post('/ban', (req, res) => {
    const { userId, reason } = req.body;

    // Logic to ban user in the database
    // Send request to Discord bot to ban user on the server

    res.status(200).send('User banned successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
