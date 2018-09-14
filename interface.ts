interface Food {
	name: string;
	calories: number;
}

function foodies(food: Food):void {
	console.log("Our " + food.name + " has " + food.calories);
} 

var burger = {
	name: "Burger",
	calories: 300	
};

foodies(burger);