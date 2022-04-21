import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ProductUnion } from '../../organisms/products-list/products-list.component';
@Component({
  selector: 'ov-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProductsComponent implements OnInit {
  @Input() products!: ProductUnion[];

  ngOnInit(): void {}
}
