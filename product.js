const urlParams = new URLSearchParams(window.location.search);
let name = urlParams.get("name")
console.log(name)



let results = document.querySelector(".results")


const API_URL= "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

async function getProduct(){
    try{
        const res = await fetch(API_URL + name);
        const data = await res.json()
        viewUser (data.meals)
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
getProduct()

function viewUser (category){
    console.log(category)
    let userFood = category.map((item) => {
        return`
        <div onclick="gotoIdPage('${item.idMeal}')"class="foods">
        <h3>${item.strMeal}</h3>
        <img  src=${item.strMealThumb}  alt="product" />
        </div>
        `
    })
results.innerHTML = userFood.join("")
}


function gotoIdPage(id){
    console.log(id);
    window.location.href = "id.html?id=" + id;
}
