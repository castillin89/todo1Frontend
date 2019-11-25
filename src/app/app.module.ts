import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from "./app-material/app-material.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KardexComponent } from './components/kardex/kardex.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './utils/data-table/data-table.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    KardexComponent,
    FormTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormTemplateComponent
  ]
})
export class AppModule { }
