import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationlistPage } from './locationlist';

@NgModule({
  declarations: [
    LocationlistPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationlistPage),
  ],
})
export class LocationlistPageModule {}
