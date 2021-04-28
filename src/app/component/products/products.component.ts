import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList$: BehaviorSubject<Product[]> = this.pService.list$;

  column: string = '';

  // productObject: Product = new Product;

  // keys: Array<string> = [];

  constructor(
    private pService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pService.getAll()
  //  this.keys = Object.keys(this.productObject)
  }

  onDelete(product: Product):void {
    this.pService.remove(product)
  }

  navigateUrl(product: Product):void {
  // localhost:4200/products/1
  this.router.navigateByUrl(`/products/${product.id}`)
  }

  sort(value: string):void {
    this.column = value;
  }
}
