import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators,FormGroup, FormControl } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { StoreService } from '../../service/store-service.service';
import { Store } from '../../dto/store.dto';
import { BaseResponse } from '../../dto/base-response.dto';
import { Status } from '../../dto/enum/status.enum';
import { CommonModule, NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../dto/product.dto';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule,MatInputModule,MatFormFieldModule, MatIconModule,MatSelectModule, NgFor,
    MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule
    , CommonModule, MatGridListModule, MatChipsModule,RouterLink,
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit{

  title = 'store-page';
  stores: Store[] = [];
  products: Product[] = [];

  storeFormGroup:FormGroup;
  status:any[]=[];

  constructor(private readonly storeService: StoreService,
    private readonly productService: ProductsService

  ){
    this.storeFormGroup=new FormGroup({
      name:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      phone:new FormControl(""),
      status:new FormControl(""),
    })
  }
  ngOnInit(): void {
    this.status = Object.keys(Status);
    console.log(this.status);

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

  onSubmit() {
    const newStore:Store=this.storeFormGroup.value;
    console.log(newStore);
    this.storeService.createStore(newStore).subscribe(
      {
        next:(response:BaseResponse<Store>)=>{
          console.log(response)
        }
      }
    )
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

}
