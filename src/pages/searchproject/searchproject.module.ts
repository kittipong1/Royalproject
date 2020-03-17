import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchprojectPage } from './searchproject';

@NgModule({
  declarations: [
    SearchprojectPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchprojectPage),
  ],
    entryComponents: [
    SearchprojectPage,
  ]
})
export class SearchprojectPageModule {}
