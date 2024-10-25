import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../dto/store.dto';
import { api } from '../constants/api-constants';
import { BaseResponse } from '../dto/base-response.dto';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  apiEndpoint:string='stores';
  
  constructor(private readonly  http:HttpClient) { }

  getStores(): Observable<BaseResponse<Store[]>> {
    return this.http.get<BaseResponse<Store[]>>(`${api.baseUrl+this.apiEndpoint}`);
  }
  createStore(store:Store):Observable<BaseResponse<Store>>{
    return this.http.post<BaseResponse<Store>>(`${api.baseUrl+this.apiEndpoint}`,store);
  }


}
