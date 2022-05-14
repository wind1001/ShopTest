import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[]=[
    new Product('P01','Hat'),
    new Product('P02','Jeans')
  ]


  constructor() { }
  changeStarRating(message:string){
    console.log(`Message: ${message}`);

  }
  ngOnInit(): void {
  }

}
