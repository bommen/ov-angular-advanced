import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { testUtils, TestUtils } from '../../../utils/test.utils';
import { PriceComponent } from '../../atoms/price/price.component';
import { RatingComponent } from '../../atoms/rating/rating.component';
import { SubTitleComponent } from '../../atoms/sub-title/sub-title.component';
import { ThumbnailComponent } from '../../atoms/thumbnail/thumbnail.component';
import { TitleComponent } from '../../atoms/title/title.component';
import { Product, ProductComponent } from './product.component';
import { ProductMock } from './product.component.mocks';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let utils: TestUtils;
  @Component({
    selector: 'ov-host',
    template: `<ov-product [product]="product">
      <div actions>Actions</div>
      <div footer>Footer</div>
    </ov-product>`,
  })
  class Host {
    @Input() product!: Product;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        Host,
        MockComponents(
          ThumbnailComponent,
          SubTitleComponent,
          TitleComponent,
          RatingComponent,
          PriceComponent
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = ProductMock.PRIMARY;
    utils = testUtils(fixture);
    fixture.detectChanges();
  });

  it('should render a thumbnail', () => {
    const thumbnail = utils.component(ThumbnailComponent);
    expect(thumbnail.src).toEqual(component.product.image);
    expect(thumbnail.alt).toEqual(component.product.title);
  });

  it('should render a subtitle', () => {
    const subtitleDebugElement = utils.debugElement(SubTitleComponent);
    expect(subtitleDebugElement.nativeElement.innerText).toEqual(
      component.product.subtitle
    );
  });

  it('should render a title', () => {
    const titleDebugElement = utils.debugElement(TitleComponent);
    expect(titleDebugElement.nativeElement.innerText).toEqual(
      component.product.title
    );
  });

  it('should render a rating', () => {
    const rating = utils.component(RatingComponent);
    expect(rating.rate).toEqual(component.product.rating.rate);
    expect(rating.count).toEqual(component.product.rating.count);
  });

  it('should render a description', () => {
    const description = utils.querySelector('.description');
    expect(description.textContent!.trim()).toEqual(
      component.product.description
    );
  });

  it('should render a price', () => {
    const price = utils.component(PriceComponent);
    expect(price.amount).toEqual(component.product.price);
  });

  describe('Content', () => {
    let fixture: ComponentFixture<Host>;
    beforeEach(() => {
      fixture = TestBed.createComponent(Host);
      utils = testUtils(fixture);
    });

    it('should fill the actions slot', () => {
      const footer = utils.querySelector('[actions]');
      expect(footer.textContent).toEqual('Actions');
    });

    it('should fill the footer slot', () => {
      const footer = utils.querySelector('[footer]');
      expect(footer.textContent).toEqual('Footer');
    });
  });
});
