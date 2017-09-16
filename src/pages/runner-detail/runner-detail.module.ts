import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunnerDetailPage } from './runner-detail';

@NgModule({
  declarations: [
    RunnerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RunnerDetailPage),
  ],
})
export class RunnerDetailPageModule {}
