var Menu = /** @class */ (function () {
    function Menu(number_of_items, total_pages) {
        this.items = number_of_items;
        this.pages = total_pages;
    }
    Menu.prototype.list_menu = function () {
        console.log("**** Todays Menu ****");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var newMenu = new Menu(["Paneer Kofta", "Dosa", "Paratha"], 10);
newMenu.list_menu();
