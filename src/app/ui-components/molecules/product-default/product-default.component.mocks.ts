import { QuantityPickerMocks } from '../../molecules/quantity-picker/quantity-picker.component.mocks';
import { ProductMock } from '../product/product.component.mocks';
import { ProductDefault } from './product-default.component';

type MockKeys =
  | 'PRIMARY'
  | 'MAX_CONTENT'
  | 'MIN_CONTENT'
  | 'LANDSCAPE'
  | 'IN_CART';

export const ProductDefaultMock: Record<MockKeys, ProductDefault> = {
  PRIMARY: {
    ...ProductMock.PRIMARY,
    type: 'product',
    quantity: QuantityPickerMocks.PRIMARY,
    isLimited: false,
    inCart: false,
  },
  IN_CART: {
    ...ProductMock.PRIMARY,
    type: 'product',
    quantity: QuantityPickerMocks.PRIMARY,
    isLimited: false,
    inCart: true,
  },
  MAX_CONTENT: {
    ...ProductMock.MAX_CONTENT,
    type: 'product',
    quantity: QuantityPickerMocks.WITH_STEPS,
    isLimited: false,
    inCart: false,
  },
  MIN_CONTENT: {
    ...ProductMock.MIN_CONTENT,
    type: 'product',
    quantity: QuantityPickerMocks.MIN_QUANTITY,
    isLimited: true,
    inCart: false,
  },
  LANDSCAPE: {
    ...ProductMock.LANDSCAPE,
    type: 'product',
    quantity: QuantityPickerMocks.PRIMARY,
    isLimited: false,
    inCart: false,
  },
};
