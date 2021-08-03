import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { DishModule } from './dish/dish.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    NotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeRoutingModule,
    SharedModule,
    HomeModule,
    DishModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
