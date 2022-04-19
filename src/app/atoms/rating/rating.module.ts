import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { StarsPipe } from './shared/stars.pipe';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [RatingComponent, StarsPipe],
  imports: [CommonModule, IconModule],
  exports: [RatingComponent],
})
export class RatingModule {}
