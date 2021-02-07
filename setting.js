let foodList = document.getElementsByClassName("single-food-items");
for (let i = 0; i < foodList.length; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            let { meals } = data;
            let [mealList] = meals;
            console.log(mealList);
            let { idMeal, strMeal, strArea, strMealThumb } = mealList;
            console.log(idMeal, strMeal, strArea, strMealThumb);
            const foodInfo = `
                        <div class="food-image">
                            <img id="singleFoodImg" src="${}" alt="">
                        </div>
                        <div class="food-name">
                            <p>Pasta</p>
                        </div>`
            let img = document.querySelectorAll('.food-image img');
            // img[i].forEach(element => {
            //     element.src=strMealThumb;;
            // });
            img[i].src = strMealThumb;
        })
}