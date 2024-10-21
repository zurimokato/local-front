import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../dto/base-response.dto';
import { Product } from '../dto/product.dto';
import { api } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiEndpoint:string='products';

  constructor(private htpp:HttpClient) { }

  getProductByStoreId(storeId:number):Observable<BaseResponse<Product[]>>{
    return this.htpp.get<BaseResponse<Product[]>>(`${api.baseUrl+this.apiEndpoint}/find?storeId=${storeId}`);
  }

}
