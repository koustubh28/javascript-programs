class Menu {
	items: Array<string>;
	pages: number;

	constructor(number_of_items: Array<string>, total_pages: number) {
		this.items = number_of_items;
		this.pages = total_pages;
	}

	list_menu(): void {
		console.log("**** Todays Menu ****");
		for(var i=0; i<this.items.length; i++) {
			console.log(this.items[i]);
		}
	}
}

class HappyMeal extends Menu {
	constructor(number_of_items: Array<string>, total_pages: number) {
		super(number_of_items, total_pages);
	}

	list_menu(): void {
		console.log("**** Children's Menu ****");
		for(var i=0; i<this.items.length; i++) {
			console.log(this.items[i]);
		}
	}
}

var happy_meals = new HappyMeal(["Pizza","Candy","Chocolate Cake"], 5);
happy_meals.list_menu();