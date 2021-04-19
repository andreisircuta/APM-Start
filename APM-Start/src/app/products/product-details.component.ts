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
  public product:Product | undefined;
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.loadProduct(id);
    console.log(this.product);
  }

  private loadProduct(id: Number) : void{
    this.subscription = this.productService.getProducts().pipe().subscribe({
      next: prods => {
        for (let prod of prods) {
          if(prod.productId === id){
            this.product = prod;
          }
        }
      }
    });
  }

  public onBackButton() : void{
    this.router.navigate(['/products'])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
