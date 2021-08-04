import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadedProduct();

    
  }

  loadedProduct() {
    this.productId = +this.route.snapshot.params['id'];
  }
}
