import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityPickerComponent } from './quantity-picker.component';
import { ButtonModule } from 'src/app/atoms/button/button.module';
import { IconModule } from 'src/app/atoms/icon/icon.module';
import { ToQuantityOptionsPipe } from './shared/to-quantity-options.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuantityPickerComponent, ToQuantityOptionsPipe],
  imports: [CommonModule, ButtonModule, IconModule],
  exports: [QuantityPickerComponent],
})
export class QuantityPickerModule {}
