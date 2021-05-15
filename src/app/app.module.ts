import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { LoaderDirective } from './directives/loader.directive';

const route: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent]
})
export class AppModule { }
