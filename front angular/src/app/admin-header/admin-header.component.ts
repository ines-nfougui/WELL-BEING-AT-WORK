import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/service/products.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css'
  ]
})
export class AdminHeaderComponent implements OnInit {

  listeven: any;

  constructor(private servp: ProductsService) { }

  ngOnInit(): void {
    this.servp.getAll().subscribe(res => {
      this.listeven = res
    });
  }

}
