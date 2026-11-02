const versaler = str => str.toUppercase()
const citera = str => `"${str}"`

const formateraText = (str,callback) => {
    return callback(str)
}



const tal = [4,15,8,25,2]

let nyaTal = tal.filter(n=>n>10)

console.log(nyaTal)

let nyareTal = nyaTal.map(n=>n+5)

console.log(nyareTal)
