import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { ButtonComponent } from '../../atoms/button/button.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { MessageComponent } from '../../atoms/message/message.component';
import { TitleComponent } from '../../atoms/title/title.component';

import { ProductReplacedComponent } from './product-replaced.component';

describe('ProductReplacedComponent', () => {
  let component: ProductReplacedComponent;
  let fixture: ComponentFixture<ProductReplacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductReplacedComponent,
        MockComponents(
          ButtonComponent,
          IconComponent,
          MessageComponent,
          TitleComponent
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReplacedComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
