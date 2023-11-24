const express = require('express')

const app = express();

const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen( 3030, () => console.log('Servidor activado'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));
})

app.post('/register', (req, res) => {
    /*res.send('Recibido el formulario de registro');*/
    res.sendFile(path.join(__dirname, './src/views/home.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
})

app.post('/login', (req, res) => {
    /*res.send('Recibido el formulario de login');*/
    res.sendFile(path.join(__dirname, './src/views/home.html'));
})
