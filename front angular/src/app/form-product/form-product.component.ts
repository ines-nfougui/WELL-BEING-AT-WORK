import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Products} from '../model/products';

@Component({
  selector: 'app-from-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FromProductComponent implements OnInit {
  product: Products;
  list: Products[];
  constructor( private route:Router ) {   }

  ngOnInit(): void {
    this.product = new Products();
    this.list = [];
    console.log(this.list);
  }
  save(){
    this.product.like = 0;
    this.list.push(this.product);
    console.log('after the click ');
    console.log(this.list);
  }
}
