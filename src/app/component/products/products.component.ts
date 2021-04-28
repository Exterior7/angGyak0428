import { Component, OnInit } from '@angular/core';
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

  constructor(
    private pService: ProductService,
  ) { }

  ngOnInit(): void {
    this.pService.getAll()
  }

}
