import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductUnion } from '../../organisms/products-list/products-list.component';

@Component({
  selector: 'ov-page-products-dynamic',
  templateUrl: './page-products-dynamic.component.html',
  styleUrls: ['./page-products-dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProductsDynamicComponent {
  @Input() products!: ProductUnion[];
}
