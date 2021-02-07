let foodList = document.getElementsByClassName("single-food-items");
for (let i = 0; i < foodList.length; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            let { meals } = data;
            let [mealList] = meals;
            let { idMeal, strMeal, strMealThumb } = mealList;
            // console.log(idMeal, strMeal, strArea, strMealThumb);
            let foodImage = document.querySelectorAll('.food-image img');
            foodImage[i].src = strMealThumb;
            let foodNameList = document.querySelectorAll("#singleFoodName");
            foodNameList[i].innerText = strMeal;
            foodImage[i].classList.add(idMeal);
            foodNameList[i].classList.add(idMeal);
        })
}

let ingredient = (event) => {
    let targetFood = this.event.target;
    let foodId = targetFood.attributes[1].value;
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + foodId)
        .then(res => res.json())
        .then(data => {
            let { meals } = data;
            let [mealList] = meals;
            let { strMeal, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7 } = mealList;
            console.log(strMeal, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7);
            console.log(mealList);
            document.getElementById("foodItemsId").style.display = "none";
            document.getElementById("ingredientCart").style.display = "block";
            document.getElementById("ingredientImage").src = strMealThumb;
            document.getElementById("foodIngredientTitle").innerText = strMeal;

            let icon = `
             <i class="fas fa-check-square food-icon"></i>
             `;
            document.getElementById("strIngredient1").innerHTML = icon + strIngredient1;
            document.getElementById("strIngredient2").innerHTML = icon + strIngredient2;
            document.getElementById("strIngredient3").innerHTML = icon + strIngredient3;
            document.getElementById("strIngredient4").innerHTML = icon + strIngredient4;
            document.getElementById("strIngredient5").innerHTML = icon + strIngredient5;
            document.getElementById("strIngredient6").innerHTML = icon + strIngredient6;
            document.getElementById("strIngredient7").innerHTML = icon + strIngredient7;

            document.getElementById("foodSearchContent").style.display='none'
        })
}

const foodSearchfunction = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}