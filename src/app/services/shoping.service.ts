import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingService {

  public cartItemList : any=[]
  public productList = new BehaviorSubject<any>([]);
  constructor( private http: HttpClient) { }

getAllProducts(){
  return this.http.get('https://fakestoreapi.com/products');
}

getProducts(){
  return this.productList.asObservable();
}

setProduct(product : any){
  this.cartItemList.push(...product);
  this.productList.next(product);
}

addToCart(product: any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  console.log(this.cartItemList);
}

getTotalPrice(): number{
   let grandTotal = 0;
   this.cartItemList.map((a:any)=>{
     grandTotal += a.total;
   });
   return grandTotal;
}

removeCartItem(product: any){
  this.cartItemList.map((a:any, index:any)=>{
    if(product.id == a.id){
      this.cartItemList.splice(index,1);
    }
  });
  this.productList.next(this.cartItemList);
}

removeAllItem(){
  this.cartItemList = [];
  this.productList.next(this.cartItemList);
  this.productList.next(this.cartItemList);
}

}
