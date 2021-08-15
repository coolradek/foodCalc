import { Component, OnInit } from '@angular/core';

import { ProdList } from '../prod-list';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: ProdList[];

  constructor(private productService: ProductService) {
    this.productList = productService.productList;
  }

  ngOnInit() {

  }

}
