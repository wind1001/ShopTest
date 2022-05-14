import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route:ActivatedRoute){
    this.product=new Product('','');

    if(route.snapshot.params['id'])
    this.product.productCode=route.snapshot.params['id'];
  }

  changeDetails(form: NgForm){
    console.log(form.value);
    this.product.productCode=form.value.productCode;
    this.product.productCode=this.product.productCode.toUpperCase();

  }

  ngOnInit(): void {
  }

}
