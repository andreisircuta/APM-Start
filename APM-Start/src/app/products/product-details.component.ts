import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from './product';
import {ProductService} from './services/product.service';
import {tap} from 'rxjs/operators';
import {observable, Subscription} from 'rxjs';
import {ProductListComponent} from './product-list.component';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers:[ProductService]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product details";
  product:Product | undefined;
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.product = this.loadProduct(id);
    console.log(this.product);
  }

  private loadProduct(id: Number) : Product | undefined{
    // let product;
    // this.subscription = this.productService.getProducts().pipe().subscribe({
    //   next: prods => {
    //     for (let prod of prods) {
    //       if(prod.productId === id){
    //         product = prod;
    //       }
    //     }
    //   }
    // });
    //
    // return product;

    return {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      }
  }

  public onBackButton() : void{
    this.router.navigate(['/products'])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
