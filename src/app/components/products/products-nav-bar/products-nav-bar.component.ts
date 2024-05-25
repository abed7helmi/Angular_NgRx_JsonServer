import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductActionsTypes} from "../../../state/product.state";
import {EventDriverService} from "../../../state/event.driver.service";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  // @Output() productEventEmitter : EventEmitter<any> = new EventEmitter();


  constructor(private eventDriverService : EventDriverService) { }

  ngOnInit(): void {
  }


  onGetSelectedProducts() {
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAllProducts() {
    // this.productEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetAvailableProducts() {
    //this.productEventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {

    // this.productEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCT});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.NEW_PRODUCT});
  }

  onSearch(dataForm: any) {
    // this.productEventEmitter.emit(
    //   {type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataForm}
    // );

    this.eventDriverService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataForm});
  }
}
