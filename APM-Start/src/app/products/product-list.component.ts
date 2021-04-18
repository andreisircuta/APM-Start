import {Component, OnInit} from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImage: boolean = false;
  filterString: string = "cart";


  products: Product[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    }
  ];

  onShowImageButton($event: MouseEvent) : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("on init Product List component");
  }
}
