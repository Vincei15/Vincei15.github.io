let mealPlan = {};

function addToMealPlan(dish, price) {
    if (mealPlan[dish]) {
        mealPlan[dish].quantity++;
    } else {
        mealPlan[dish] = { price: price, quantity: 1 };
    }
    updateMealPlan();
}

function removeFromMealPlan(dish) {
    if (mealPlan[dish].quantity > 1) {
        mealPlan[dish].quantity--;
    } else {
        delete mealPlan[dish];
    }
    updateMealPlan();
}

function updateMealPlan() {
    let mealPlanList = document.getElementById("selected-dishes");
    let totalPrice = 0;
    mealPlanList.innerHTML = "";

    for (let dish in mealPlan) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${dish} x${mealPlan[dish].quantity} - $${mealPlan[dish].quantity * mealPlan[dish].price} 
        <button onclick="addToMealPlan('${dish}', ${mealPlan[dish].price})">+</button>
        <button onclick="removeFromMealPlan('${dish}')">-</button>`;
        
        mealPlanList.appendChild(listItem);
        totalPrice += mealPlan[dish].quantity * mealPlan[dish].price;
    }

    document.getElementById("total-price").innerText = totalPrice;
}
