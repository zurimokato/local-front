import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { StoreService } from './service/store-service.service';
import { BaseResponse } from './dto/base-response.dto';
import { Store } from './dto/store.dto';
import { CommonModule } from '@angular/common';
import { ProductsService } from './service/products.service';
import { Product } from './dto/product.dto';
import {  RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule
    , CommonModule, MatGridListModule, MatChipsModule,RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  title = 'store-page';
  stores: Store[] = [];
  products: Product[] = [];

  constructor(private storeService: StoreService,
    private productService: ProductsService
  ) {

  }

  cargarProductos(idStore: number): void {

    this.productService.getProductByStoreId(idStore).subscribe({
      next: (response: BaseResponse<Product[]>) => {
        console.log(response)
        this.products = response.data;
      },
      error:(error)=>{
        console.log(error);
      }
    })

  }

  ngOnInit(): void {
    this.storeService.getStores().subscribe({
      next: (response: BaseResponse<Store[]>) => {
        console.log(response)
        this.stores = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
