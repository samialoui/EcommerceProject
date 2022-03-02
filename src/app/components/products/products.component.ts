import { Component, OnInit } from '@angular/core';
import { ShopingService } from 'src/app/services/shoping.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products!: any;
  constructor( private service: ShopingService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(data=>{
      this.Products = data;
       this.Products.forEach((a:any)=>{
         Object.assign(a,{quantity:1,total:a.price});
       })
    });
  }

  addToCartList(item : any){
    this.service.addToCart(item);
  }
}
