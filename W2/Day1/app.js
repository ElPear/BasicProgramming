const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple", "Grus"]

cart.forEach(product => {
    product === "Godis" ? console.log("tjock :(") : console.log(`Köp ${product}`)
});

const halsa = (name = "stranger") => {
    return`${name} was here`
}

console.log(halsa())