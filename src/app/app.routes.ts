import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { OrderComponent } from './pages/order/order.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'orders', component: OrderComponent },
    { path: 'stores', component: StoreComponent },
    { path: '', redirectTo: '/home',pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];
