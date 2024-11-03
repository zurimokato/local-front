import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Menu } from '../../../../dto/menu.dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [RouterLink,MatIconModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input() menu!:Menu;

}
