import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router,
    private aRoute: ActivatedRoute,
  ) { }

    onCreate(product: Product):void {
      this.productService.create(product).subscribe(
        () => this.router.navigate([''])
      );
    }

  ngOnInit(): void {
    this.aRoute.params.subscribe(
      params => { this.productService.get(params.id).forEach(
        item => this.product = item
      )}
    )
  }
}
