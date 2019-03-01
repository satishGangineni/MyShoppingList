import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthAuthenticationGuardService } from './auth-authentication-guard.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductlistComponent, canActivate: [AuthAuthenticationGuardService] },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ShoppingListComponent,
    AppFooterComponent,
    ProductlistComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
