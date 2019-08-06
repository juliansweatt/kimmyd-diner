import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu/breakfast', component: MenuComponent},
  { path: 'menu/lunch', component: MenuComponent},
  { path: 'menu/lunch/front', component: MenuComponent},
  { path: 'menu/lunch/back', component: MenuComponent}
  { path: 'order', component: OrderComponent }
>>>>>>> d89a7d3b559cc3d4b4cc3e82ef04685713a15045
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
