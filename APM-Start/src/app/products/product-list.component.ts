import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./services/product.service";
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy{
  pageTitle: string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: Product[]=[];
  products: Product[] = [];

  private _filterString: string = "";
  private productObservable!: Subscription;

  constructor(private productService: ProductService) {}

  onShowImageButton($event: MouseEvent) : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("on init Product List component");
    this.initProducts()
    this.filteredProducts = this.products;
  }

  private initProducts() : void {
    this.productObservable = this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => console.error(err)
    });
  }

  private performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: Product) =>
        product.productName.toLowerCase().includes(filterBy));
  }

  public filterProductsByName() : Product[]{
    return this.performFilter(this.filterString);
  }

  get filterString(): string {
    return this._filterString;
  }

  set filterString(value: string) {
    this._filterString = value;
    console.log("in setter: " + value);
    this.filteredProducts = this.performFilter(value);
  }

  onRatingClick(message: string) {
    this.pageTitle = "Product list - on click " + message;
  }

  ngOnDestroy(): void {
    this.productObservable.unsubscribe();
  }
}
