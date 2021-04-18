import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: Product[]=[];
  products: Product[] = [];

  private _filterString: string = "";
  constructor(private productService: ProductService) {}

  onShowImageButton($event: MouseEvent) : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("on init Product List component");
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
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
}
