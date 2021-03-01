console.log("the server side")
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = "this is js"

weatherForm.addEventListener('submit',(event) =>{
    event.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    // messageTwo.textContent = ''

    const url = "/weather?address=" + location
    fetch(url).then((response)=>{

        response.json().then((data)=>{
            if (data.error){
                console.log(data.error)
                // messageTwo.textContent = data.error
            }else {
                console.log(data.location)
                messageOne.textContent = "The temperature in "+ location +" is " + data.data
            }
        })


})

})