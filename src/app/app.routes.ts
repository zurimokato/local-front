import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { OrderComponent } from './pages/order/order.component';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'order', component: OrderComponent },
    { path: 'store', component: StoreComponent },
];
