let path = module.require('path');  
let express = module.require('express');
let app = express();

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')))

app.listen(port, ()=>{
    console.log('listening to port: ',port);
})

app.get('/', (req, res)=>{
    res.render('see.ejs');
});

app.get('/see', (req, res)=>{
    console.log('see');
    res.render('see.ejs');
});

app.get('/plan', (req, res)=>{
    console.log('plan');
    res.render('plan.ejs');
});

app.get('/sets', (req, res)=>{
    console.log('sets');
    res.render('sets.ejs');
});