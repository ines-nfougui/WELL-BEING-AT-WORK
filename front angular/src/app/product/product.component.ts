import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Products} from '../model/products';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Products[] ;
  priceMax: number ;
  varfil ="bonjour fils"
  name =""
  parmurl: any;
  constructor(private route:Router, private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
 
    this.productList = [
      {id: 1, title: 'T-shirt 1', price: 18, quantity: 0, like: 0},
      {id: 2, title: 'T-shirt 2', price: 21, quantity: 10, like: 0},
      {id: 3, title: 'T-shirt 3', price: 16, quantity: 8, like: 0},
      {id: 4, title: 'T-shirt 4', price: 21, quantity: 10, like: 10}
    ];

    

  }
  buyProdut(i: number){
    this.productList[i].quantity--;
  }
  likeprod(i: number){
    this.productList[i].like++ 

  }
  parentfunction (data : any){
    console.log(data)
  
  }
  
}
