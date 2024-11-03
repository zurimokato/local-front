import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Menu } from '../../dto/menu.dto';
import { MenuService } from '../../service/menu.service';
import { BaseResponse } from '../../dto/base-response.dto';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { Status } from '../../dto/enum/status.enum';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MenuItemComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  menus:Menu[]=[];
  menuhome:Menu;
  fillerNav = [];
  private readonly _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private readonly menuService:MenuService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change",()=>{
      this._mobileQueryListener();
    });
    this.menuhome={id:0,name:"Home", icon:"dashboard",url:"/home",status:Status.ACTIVE,parent:null,children:null};
  }
  ngOnInit(): void {
    this.getMenu();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", ()=>{
      this._mobileQueryListener();
    })
  }


  getMenu():void{
    this.menuService.getMenus().subscribe(
      {
        next:(response: BaseResponse<Menu[]>)=>{
          this.menus=response.data;
        }
      }
    )
  }

}
