import { Injectable } from '@angular/core';
import {ProdList} from "./prod-list";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productList: ProdList[];
  constructor() {
    this.productList = [
      {
        'id': 1,
        'unit': 1,
        'weight': 100,
        'name': 'Jajko',
        'carbohydrates': 50,
        'proteins': 20,
        'fats':30
      },
      {
        'id': 2,
        'unit': 1,
        'weight': 100,
        'name': 'Chleb razowy',
        'carbohydrates': 130,
        'proteins': 4,
        'fats': 30
      },
      {
        'id': 3,
        'unit': 1,
        'weight': 100,
        'name': 'Jabłko',
        'carbohydrates': 150,
        'proteins': 4,
        'fats': 3
      },
      {
        'id': 4,
        'unit': 1,
        'weight': 100,
        'name': 'Ziemniaki',
        'carbohydrates': 50,
        'proteins': 8,
        'fats': 3
      },
      {
        'id': 5,
        'unit': 1,
        'weight': 100,
        'name': 'Wołowina',
        'carbohydrates': 250,
        'proteins': 17,
        'fats': 36
      }
    ]
  }
}
