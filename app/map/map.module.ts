import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core';
import {MapComponent}  from './map.component' ;
import { MapService } from './map.service';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1HBUNa_5b71FtlcpLvAqviZNtITKgbxU'
    }),
    FormsModule
  ],
  providers: [MapService],
  declarations: [MapComponent],
  exports: [ MapComponent]
})

export class MapModule { }
