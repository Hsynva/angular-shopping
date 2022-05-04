//import { ProductListComponent } from './../product/product-list/product-list.component';
import { Product } from './../../app/models/product';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
