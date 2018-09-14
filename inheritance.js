var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    function HappyMeal(number_of_items, total_pages) {
        return _super.call(this, number_of_items, total_pages) || this;
    }
    HappyMeal.prototype.list_menu = function () {
        console.log("**** Children's Menu ****");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return HappyMeal;
}(Menu));
var happy_meals = new HappyMeal(["Pizza", "Candy", "Chocolate Cake"], 5);
happy_meals.list_menu();
