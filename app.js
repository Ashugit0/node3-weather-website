// aa91bee6078a923afe283d482fe3aabd   access key weatherstack api
// pk.eyJ1IjoiYW5qYW5pc2luZ2giLCJhIjoiY2tsZ291cmtvMmFrdjJvczh4OGl5YjRzNiJ9.dzMpv6YBLXqNIUvI-ZdBNA  access tokens map box
const chalk = require('chalk')
const log = console.log
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const forecast = require('./mc/forecast.js')
const geocode = require('./mc/geocode.js')











const app = express()
const port = process.env.PORT || 3000


// define path for express config
const publicDirectoryPath = path.join(__dirname,'./public')
const viewsPath = path.join(__dirname, './template/views')
const partialPath = path.join(__dirname,'./template/partials')


// setup handlebar engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)


// setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'Jhon Doe'
    })
})




app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:'send the address'
        })
    } else {

        geocode(req.query.address,(error,data)=>{


            if (error) {
                return log(error)
            }
    
            forecast(data.lat, data.lon, (error, forecastdata) => {
    
                if(error) {
                    return res.send({
                        error: "Unable get the data"
                    })
                } else {
                    res.send({
                        data: forecastdata,
                        location: data.location
                    })
                }
            })
        })
    }

})



app.get('/products', (req,res)=>{

    if (!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    } else {
        res.send({
            products:[]
        })
    }

    log(req.query.search)
    
})

app.get('/about', (req,res)=>{

    res.render('about',{
        title:"About me",
        name: 'Jhon Doe'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help",
        name: 'Jhon Doe'
    })
})

app.listen(port,()=>{
    log('Server is up on port ' + port)
})


