import { Component, OnInit } from '@angular/core';
import { ShopingService } from 'src/app/services/shoping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productList : any=[];
  grandTotal !: number;

  constructor( private service: ShopingService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      this.productList = data;
      this.grandTotal = this.service.getTotalPrice();
    });
  }

  deleteItem(item: any){
    this.service.removeCartItem(item);
  }

  deleteAllItems(){
    this.service.removeAllItem();
  }

}
