const request = require('request')
const geocode = require('./geocode')
const log = console.log


// geocode('Jamui',(error,data)=>{
//     log('error',error)
//     log('data',data)
// })

const forecast = (lat,lon, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=aa91bee6078a923afe283d482fe3aabd&query=" +lat +","+lon

    request({url:url, json:true}, (error,response)=>{

        if(error){
            callback('Unable to connect with weather service!',undefined)
        }else if (response.body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.temperature)
        }
    })

}

// const weatherstack = (loc)=>{


    
//     const url = "http://api.weatherstack.com/current?access_key=aa91bee6078a923afe283d482fe3aabd&query=" +loc.lat +","+loc.lon

//     request({url:url, json:true},(error,response)=>{



//         if (error) {
//             log(chalk.red.bold("Unable to connect to weatherstack server"))
//         } else if(response.body.error){
//             log(chalk.green.bold("Unable to find location"))
//         }else {

//             log("the temperature: " + chalk.yellow.bold(response.body.current.temperature))
//         }
//     })


// }

module.exports = forecast