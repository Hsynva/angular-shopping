import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CategoryService } from '../../app/services/category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  toggle: boolean = true;

  
  @Output() categoryStr: EventEmitter<string> = new EventEmitter();
  constructor(private category: CategoryService) { }
  ngOnInit(): void {
    this.category.fetchProduct().subscribe(
      (data)=> {
          this.products = data as any;

      }
    )
  }

  getAllCategories(){
    const uniqueArr = [... new Set(this.products.map(data => data.category))]
    return uniqueArr
  }

  onClickToggle(){
    this.toggle = !this.toggle;
  }

  onClickCategory(item: string){
    this.categoryStr.emit(item);
    console.log(item)
  }
}
