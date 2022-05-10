import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockComponents, MockPipe } from 'ng-mocks';
import { testUtils, TestUtils } from '../../../utils/test.utils';
import { ButtonComponent } from '../../atoms/button/button.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { QuantityPickerComponent } from './quantity-picker.component';
import { QuantityPickerMocks } from './quantity-picker.component.mocks';
import { QuantityOptionsPipe } from './shared/quantity-options.pipe';

describe('QuantityPickerComponent', () => {
  let component: QuantityPickerComponent;
  let fixture: ComponentFixture<QuantityPickerComponent>;
  let utils: TestUtils;
  let quantityOptionsPipeSpy: jasmine.Spy;
  const QUANTITY_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 'More'];

  beforeEach(async () => {
    quantityOptionsPipeSpy = jasmine.createSpy();
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        QuantityPickerComponent,
        MockComponents(ButtonComponent, IconComponent),
        MockPipe(
          QuantityOptionsPipe,
          quantityOptionsPipeSpy.and.returnValue(QUANTITY_OPTIONS)
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityPickerComponent);
    component = fixture.componentInstance;
    component.quantity = QuantityPickerMocks.PRIMARY;
    utils = testUtils(fixture);
  });

  describe('Default state', () => {
    it('should render a select', () => {
      fixture.detectChanges();
      const select = utils.querySelector<HTMLSelectElement>('select');
      expect(select).not.toBeNull();
    });

    it('should render a default option with value min', () => {
      fixture.detectChanges();
      const option = utils.querySelector<HTMLOptionElement>(
        'option[selected][hidden][disabled]'
      );
      expect(parseInt(option.value)).toBe(component.quantity.min);
    });

    it('should render options based on quantity', () => {
      fixture.detectChanges();
      expect(quantityOptionsPipeSpy).toHaveBeenCalledOnceWith(
        component.quantity
      );
      const [_default, ...options] =
        utils.querySelectorAll<HTMLOptionElement>('option');
      expect(options.length).toBe(9);
    });

    it('should be disabled if the min and max amount are equal', () => {
      component.quantity = {
        min: 1,
        max: 1,
        step: 1,
      };
      fixture.detectChanges();
      const select = utils.querySelector<HTMLSelectElement>('select');
      expect(select.disabled).toBeTrue();
    });

    const showInput = () => {
      const select = utils.querySelector<HTMLSelectElement>('select');
      utils.changeValue(select, 'More');
      fixture.detectChanges();
    };

    it('should show an input instead of a select if More is selected', () => {
      fixture.detectChanges();
      showInput();
      expect(utils.querySelector('select')).toBeNull();
    });

    describe('With input', () => {
      beforeEach(() => {
        fixture.detectChanges();
        showInput();
      });

      it('should have focus', () => {
        const input = utils.querySelector('input');
        expect(document.activeElement === input).toBeTrue();
      });

      it('should increase in steps', () => {
        const input = utils.querySelector<HTMLInputElement>('input');
        expect(parseInt(input.step) === component.quantity.step).toBeTrue();
      });

      it('should disable the button if input is invalid', () => {
        const input = utils.querySelector<HTMLInputElement>('input');
        utils.inputValue(input, '');

        fixture.detectChanges();
        const button = utils.component(ButtonComponent);
        expect(button.disabled).toBeTrue();
      });

      it('should submit a valid amount', () => {
        const input = utils.querySelector<HTMLInputElement>('input');
        utils.inputValue(input, '10');

        spyOn(component.selectQuantity, 'emit');
        const button = utils.querySelector('ov-button');
        button.click();
        expect(component.selectQuantity.emit).toHaveBeenCalledOnceWith(10);
      });
    });
  });
});
