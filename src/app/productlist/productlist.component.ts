import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../Iproduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  pageTitle = "Products list";
  colorClassVariable = "colorClass";
  birthdate = "05/05/2014";
  btndisable = true;
  //constructor() { }
  products: any[] = [];
  imageWidth = 50;
  imageMargin = 2;
  selectedProduct: any = null;
  showImage: boolean = false;
  mycolor: string = "red";
  width: number = 100;
  Product: IProduct;

  toggleImage() {
    this.showImage = !this.showImage;
  }

  constructor(private productservice: ProductsService) { }

  ngOnInit() {

    this.productservice.getProducts().subscribe((value) => {
      alert(JSON.stringify(value));
    });

    this.Product = {
      'name': 'updated from angular',
      'description': 'test product 5 updated',
      'quandity': 20

    };

    this.productservice.DeleteProduct('5c78b7b32b4de130f8d167db').
      subscribe((result) => {
        alert(JSON.stringify(result));
      });

    // this.productservice.UpdateProduct(this.Product, '5c78b7b32b4de130f8d167db').
    //   subscribe((result) => {
    //     alert(JSON.stringify(result));
    //   });

    // this.productservice.AddProduct(this.Product).
    //   subscribe((result) => {
    //     alert(result);
    //   });

    this.products = [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      }];

  }

  selectProduct(product) {
    this.selectedProduct = product;
    //alert(JSON.stringify(product));
  }

}
