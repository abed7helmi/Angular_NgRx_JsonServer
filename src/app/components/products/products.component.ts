import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] | null =null

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    /*this.products$= this.productsService.getAllProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );*/
    this.productsService.getAllProducts().subscribe(
      data =>{
        this.products=data
      }
    )
  }

  onGetSelectedProducts() {

  }

  onGetAvailableProducts() {

  }

  onNewProduct() {

  }
}
