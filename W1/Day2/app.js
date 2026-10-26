let age = 16
let hasTicket = true
let withAdult = true
if ((age >= 18 || withAdult) && hasTicket) {
    console.log("yay")
}else{
    console.log("nay")
}


const isLoggedIn = true
const userRole = "admin"
if (isLoggedIn) {
    if (userRole==="admin") {
        console.log("admin")
    } else {
        console.log("regular user") 
    }
}else{
    console.log("please login")
}