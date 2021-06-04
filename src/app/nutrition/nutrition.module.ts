import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchresultComponent } from './components/searchresult/searchresult.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { ParameterInterceptor } from '../api.interceptor';
import { SearchService } from './service/search.service';

@NgModule({
  declarations: [
    SearchComponent,
    SearchresultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    SearchComponent
  ],
  providers: [
    SearchService,{
      provide: HTTP_INTERCEPTORS,
      useClass: ParameterInterceptor,
      multi: true
  }]
})
export class NutritionModule { }
