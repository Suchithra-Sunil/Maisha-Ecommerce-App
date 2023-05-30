import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   search=new BehaviorSubject("") 

  constructor(private http:HttpClient) { }

  //api to view all products
  viewAllProduct(){
    return this.http.get('http://localhost:3000/products')
  }

  //api to view single product
  viewProduct(pid:any){
    return this.http.get('http://localhost:3000/products/'+pid)
  }

  //product delete
  DeleteProduct(pid:any){
    return this.http.delete('http://localhost:3000/products/'+pid)
  }

  //add product
  addNewProduct(pdata:any){
    return this.http.post('http://localhost:3000/products/',pdata)
  }

  //edit product
  editProduct(pid:any,pdata:any){
      return this.http.put('http://localhost:3000/products/'+pid,pdata)
  }
}
