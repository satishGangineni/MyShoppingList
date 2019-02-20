import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyShoppingList';
  products: string[] = ["Milk", "Bread", "Cheese"];
  errortext = "";
  shoppingItem: string = "";
  buttonLabel: string = "Add";

  addItem() {

    this.errortext = "";
    if (this.shoppingItem === "") { return; }
    if (this.products.indexOf(this.shoppingItem) == -1) {
      this.products.push(this.shoppingItem);
    } else {
      this.errortext = "The item is already in your shopping list.";
    }
  }

  // editItem(x: number) {
  //   this.shoppingItem = this.products[x];
  //   this.buttonLabel = "Update"

  // }

  // updateItem() {

  // }

  removeItem(x: number) {
    this.errortext = "";
    this.products.splice(x, 1);
  }

}
