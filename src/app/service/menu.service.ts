import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../dto/menu.dto';
import { BaseResponse } from '../dto/base-response.dto';
import { Observable } from 'rxjs';
import { api } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  apiEndpoint:string='menus';
  
  constructor(private readonly  http:HttpClient) { }

  getMenus():Observable<BaseResponse<Menu[]>>{

    return this.http.get<BaseResponse<Menu[]>>(`${api.baseUrl+this.apiEndpoint}`);

  }
}
