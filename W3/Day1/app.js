// mock-data
const products=[
    {name: "Hörlurar", category: "elektronik", price: 1000, icon:"🎧"},
    {name: "Hoodie", category: "kläder", price: 500, icon:"👕"},
    {name: "Tangentbord", category: "elektronik", price: 1200, icon:"⌨️"},
    {name: "Kepps", category: "kläder", price: 300, icon:"🧢"},
    {name: "Dator Mus", category: "elektronik", price: 600, icon:"🖱️"}
]

const productContainer = document.querySelector("#product-container")
const categorySelector = document.querySelector("#filter-category")
const priceSelector = document.querySelector("#sort-price")
const discountCheck = document.querySelector("#discount-check")

const showItems = (array) =>{
    productContainer.replaceChildren()
    for(const item of array){
        let card = document.createElement("div")
        card.innerHTML = `
        <div class="product-icon"> ${item.icon}</div>
        <div class="product-name"> ${item.name}</div>
        <div class="product-category"> ${item.category}</div>
        <div class="product-price"> ${item.price}kr</div>
        `
        card.classList = "product-card"
        productContainer.appendChild(card)
    }
}

const applyFilter = () =>{
    let result = [...products]
    
    result = result.filter((item) => item.category === categorySelector.value || categorySelector.value === "alla")

    result = result.sort((a,b) => priceSelector.value === "normal" ? a = b : priceSelector.value ==="low-high" ? a.price - b.price : b.price - a.price)

    result = result.map(item => discountCheck.checked ? {name: item.name, category: item.category, price: item.price*0.8, icon:item.icon} : item)

    showItems(result)
}


//lyssnare

applyFilter()

document.querySelectorAll("#filter-category, #sort-price, #discount-check").forEach(element => {
    element.addEventListener("change", applyFilter)
});



