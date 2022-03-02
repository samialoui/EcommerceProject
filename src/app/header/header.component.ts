import { Component, OnInit } from '@angular/core';
import { ShopingService } from '../services/shoping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public  totalItems : number = 0;
  constructor(private service:ShopingService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(res=>{
     this.totalItems = res.length;
    });
  }

}
