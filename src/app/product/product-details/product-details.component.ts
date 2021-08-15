import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProdList} from "../../prod-list";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId: number | undefined;
  product: ProdList | undefined;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.loadedProduct();

  }

  loadedProduct() {
    this.productId = +this.route.snapshot.params['id'];
    this.product = this.productService.productList.find(el => el.id === this.productId);
  }

  getProduct() {
    return JSON.stringify(this.product);
  }
}
