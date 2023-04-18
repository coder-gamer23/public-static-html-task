const express = require('express');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const app = express();



app.set('views', './views'); 
app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.static('public'))



app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public') +'/portfolio.html')
})

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'public') +'/product.html')
})

app.get('/register', (req, res) => {
  res.render('registration', {
    pageTitle: 'Register Page',
    header: 'Please Register Here!'
  })
})

app.get('/periodictable', (req, res) => {
  res.render('periodictable', {
    pageTitle: 'Chemistry',
    header: 'Periodic table of element',
    
  })
})

app.use('/home', express.static(path.join(__dirname, 'public')))



app.listen(4444, () => {  
  console.log('Server is running on port 4444');
})