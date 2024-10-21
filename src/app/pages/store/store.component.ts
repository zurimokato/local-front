import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormControl} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { StoreService } from '../../service/store-service.service';
import { Store } from '../../dto/store.dto';
import { BaseResponse } from '../../dto/base-response.dto';
import { Status } from '../../dto/enum/status.enum';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule,MatInputModule,MatFormFieldModule, MatIconModule,MatSelectModule, NgFor],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit{

  storeFormGroup:FormGroup;
  status:any[]=[];

  constructor(private storeService: StoreService){
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

}
