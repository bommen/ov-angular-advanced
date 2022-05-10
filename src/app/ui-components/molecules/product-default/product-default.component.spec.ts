import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents, MockDirective, ngMocks } from 'ng-mocks';
import { testUtils, TestUtils } from '../../../utils/test.utils';
import { MessageComponent } from '../../atoms/message/message.component';
import { ResizeObserverDirective } from '../../utils/directives/resize-observer/resize-observer.directive';
import { ProductComponent } from '../product/product.component';
import { QuantityPickerComponent } from '../quantity-picker/quantity-picker.component';
import { ProductDefaultComponent } from './product-default.component';
import { ProductDefaultMock } from './product-default.component.mocks';

describe('ProductDefaultComponent', () => {
  let component: ProductDefaultComponent;
  let fixture: ComponentFixture<ProductDefaultComponent>;
  let utils: TestUtils;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductDefaultComponent,
        MockComponents(
          ProductComponent,
          MessageComponent,
          QuantityPickerComponent
        ),
        MockDirective(ResizeObserverDirective),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDefaultComponent);
    component = fixture.componentInstance;
    utils = testUtils(fixture);
  });

  describe('Default state', () => {
    beforeEach(() => {
      component.product = ProductDefaultMock.PRIMARY;
      fixture.detectChanges();
    });

    it('should render quantity picker', () => {
      const quantityPicker = utils.component(QuantityPickerComponent);
      expect(quantityPicker.quantity).toBe(component.product.quantity);
    });

    it('should render in stock ok message', () => {
      const message = utils.component(MessageComponent);
      expect(message.type).toEqual('ok');
      const messageElement = utils.querySelector('ov-message');
      expect(messageElement.innerText).toBe('This product is in stock');
    });

    it('should a label if the container is large enough', () => {
      const resizeDirective = ngMocks.findInstance(ResizeObserverDirective);
      resizeDirective.resize.emit('small');
      fixture.detectChanges();
      let text = utils.querySelector('[actions] p');
      expect(text).toBeNull();

      resizeDirective.resize.emit('large');
      fixture.detectChanges();
      text = utils.querySelector('[actions] p');
      expect(text).not.toBeNull();
    });

    it('should emit addToCart event if quantity is selected', () => {
      const quantityPicker = utils.component(QuantityPickerComponent);
      spyOn(component.addToCart, 'emit');
      quantityPicker.selectQuantity.emit(123);
      expect(component.addToCart.emit).toHaveBeenCalledOnceWith(123);
    });

  });

  describe('Limited state', () => {
    beforeEach(() => {
      component.product = ProductDefaultMock.MIN_CONTENT;
      fixture.detectChanges();
    });

    it('should render a limited warn message', () => {
      const message = utils.component(MessageComponent);
      expect(message.type).toEqual('warn');
      const messageElement = utils.querySelector('ov-message');
      expect(messageElement.innerText).toBe(
        `Only ${component.product.quantity.max} left`
      );
    });
  });

  describe('In cart state', () => {
    beforeEach(() => {
      component.product = ProductDefaultMock.IN_CART;
      fixture.detectChanges();
    });

    it('should render cart information ok message', () => {
      const message = utils.component(MessageComponent);
      expect(message.type).toEqual('ok');
      const messageElement = utils.querySelector('ov-message');
      expect(messageElement.innerText).toBe(
        `${component.product.cartInfo?.quantity}x = €${component.product.cartInfo?.total}0`
      );
    });

    it('should not render the quantity picker', () => {
      const quantityPicker = utils.component(QuantityPickerComponent);
      expect(quantityPicker).toBeNull();
    });
  });
});
