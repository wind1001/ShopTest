import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutes } from './routes/admin.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes=[
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdetails/:id', component: ProductDetailsComponent },
  { path: '', pathMatch:'full', redirectTo: 'productlist'},
  { path: '**', component: NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    StarComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminRoutes,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
