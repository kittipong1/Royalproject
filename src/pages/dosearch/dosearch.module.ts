import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosearchPage } from './dosearch';

@NgModule({
  declarations: [
    DosearchPage,
  ],
  imports: [
    IonicPageModule.forChild(DosearchPage),
  ],
})
export class DosearchPageModule {}
