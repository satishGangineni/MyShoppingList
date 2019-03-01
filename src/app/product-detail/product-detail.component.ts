import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //@Input() product: any = null;
  pageTitle = 'Product Detail';
  product: any;
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    //this.snapshot.params.
    const id = this.route.snapshot.params.id;
    //alert(id);
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }

  navigateBack() {
    this.router.navigateByUrl('/products');
  }

}
