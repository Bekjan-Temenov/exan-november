const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id")




const API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
let resultd = document.querySelector(".resultd")

async function getProduct(){
    try{
        const res = await fetch(API);
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
        <div onclick="gotoIdPage('${item.strMeal}')"class="recept">
        <h3>${item.strArea }</h3>
        <h3>${item.strCategory }</h3>
        <h3>${item.strCreativeCommonsConfirmed}</h3>
        <h3>${item.strDrinkAlternate}</h3>
        <h3>${item.strImageSource}</h3>
        <h3>${item.strIngredient1}</h3>
        <h3>${item.strIngredient2}</h3>
        <h3>${item.strIngredient3}</h3>
        <h3>${item.strIngredient4}</h3>
        <h3>${item.strIngredient5}</h3>
        <h3>${item.strIngredient6}</h3>
        <h3>${item.strIngredient7}</h3>
        <h3>${item.strIngredient8}</h3>
        <h3>${item.strIngredient9}</h3>
        <h3>${item.strIngredient10}</h3>
        <img  src=${item.strMealThumb}  alt="product" />
        </div>
        `
    })
resultd.innerHTML = userFood.join("")
}







