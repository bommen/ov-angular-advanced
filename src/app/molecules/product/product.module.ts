import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PriceModule } from 'src/app/atoms/price/price.module';
import { RatingModule } from 'src/app/atoms/rating/rating.module';
import { SubTitleModule } from 'src/app/atoms/sub-title/sub-title.module';
import { ThumbnailModule } from 'src/app/atoms/thumbnail/thumbnail.module';
import { TitleModule } from 'src/app/atoms/title/title.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ThumbnailModule,
    TitleModule,
    PriceModule,
    SubTitleModule,
    RatingModule,
  ],
  exports: [ProductComponent],
})
export class ProductModule {}
