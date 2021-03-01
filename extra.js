const log = console.log

// exploring callback

const add = (a,b, callback) => {
    setTimeout(()=>{
        c = a + b
        callback(c)
    }, 2000)
}

const callback = (c) => {
    log("a + b: " + c )
}

add(3,4, callback)
log("print afte 2 sec")

