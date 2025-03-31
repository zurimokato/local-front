import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


interface MenuItem {
  name: string;
  link: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,MatCardModule,MatIconModule,MatButtonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menuItems: MenuItem[] = [
    { name: 'Inventario', link: '/products', icon: 'inventory', description: 'Gestiona el inventario de productos' },
    { name: 'Órdenes', link: '/orders', icon: 'shopping_cart', description: 'Administra las órdenes de clientes' },
    { name: 'Tiendas', link: '/stores', icon: 'store', description: 'Administra las tiendas' },
    { name: 'Clientes', link: '/clients', icon: 'group', description: 'Gestiona la información de los clientes' }
  ];

}
