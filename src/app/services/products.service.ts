import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({providedIn : "root"})
export class ProductsService{

  constructor(private http:HttpClient){
  }

  getAllProducts() : Observable<Product[]>{

    let host = environment.host
    return this.http.get<Product[]>(host+"/products")
  }

  getSelectedProducts() : Observable<Product[]>{

    let host = environment.host
    return this.http.get<Product[]>("http://localhost:3000/products?selected=true")
  }


  getAvailableProducts() : Observable<Product[]>{

    let host = environment.host
    return this.http.get<Product[]>("http://localhost:3000/products?available=true")
  }

  searchProducts(keyword:string):Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }
}
