import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent, } from './menu/menu.component';

import { MatToolbarModule, MatButtonModule, MatGridListModule, MatDialogModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
<<<<<<< HEAD
import { MenuChoicesComponent } from './menu/menu-choices/menu-choices.component';
=======
import { ImageViewDialog } from './gallery/gallery.component';
>>>>>>> f4a8e64c9fdbee78d0745ae303c74c63772aa2fa

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    MenuChoicesComponent,
    ImageViewDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageViewDialog]
})
export class AppModule { }
