import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule,Http} from '@angular/http';
import  {  NgxProgressiveImgLoaderModule  }  from  'ngx-progressive-img-loader' ;

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { SpacePipe } from './space.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    SpacePipe
  ],
  imports: [
    BrowserModule,HttpModule,NgxProgressiveImgLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
