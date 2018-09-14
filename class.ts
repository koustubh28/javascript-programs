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

var newMenu = new Menu(["Paneer Kofta","Dosa","Paratha"],10);
newMenu.list_menu();