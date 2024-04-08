import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState, DataStateEnum} from "../state/product.state";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$ : Observable<AppDataState<Product[]>> | null = null

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.products$= this.productsService.getAllProducts().pipe(
      map(data=> // map qsq je retourne qd je recoit la reponse
        ({dataState:DataStateEnum.LOADED,data:data})
      ),
      startWith({dataState:DataStateEnum.LOADING}), // avant que la reqt soit meme envoyé
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message})) // l'error
    );
    //this.products$= this.productsService.getAllProducts();
  }

  onGetSelectedProducts() {
    this.products$= this.productsService.getSelectedProducts().pipe(
      map(data=>{

        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetAvailableProducts() {
    this.products$= this.productsService.getAvailableProducts().pipe(
      map(data=>{

        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onNewProduct() {

  }

  protected readonly DataStateEnum = DataStateEnum;

  onSelect(p: Product) {

  }

  onDelete(p: Product) {

  }

  onEdit(p: Product) {

  }

  onSearch(dataForm: any) {
    this.products$= this.productsService.searchProducts(dataForm.keyword).pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
}
