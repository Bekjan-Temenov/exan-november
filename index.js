const api ="https://www.themealdb.com/api/json/v1/1/categories.php";



// CRUD //
// C = CREAT
// R = READ
// U = UPDATE
// D = DELETE
let result = document.querySelector(".result")
async function getUser(){
    try{
        const response = await fetch(api)
        const data = await response.json()
        showCategory(data.categories)

        // console.log(data)

    }catch(error){
        console.log(error)
    }
}
getUser();



function showCategory(category){
    console.log(category)

    let showStr = category.map((item) =>  {
        return`
        <div onclick="openProductPage('${item.strCategory}')" class="category">
        <img src="${item.strCategoryThumb}"/>
        <h2>${item.strCategory}</h2>
        </div>
        `
    })
    result.innerHTML = showStr.join("")
}

function openProductPage(name){
    console.log(name);
    window.location.href = "product.html?name=" + name;
}
