import { ProductMock } from '../../molecules/product/product.component.mocks';
import { ProductOutOfStock } from './product-out-of-stock.component';

type MockKeys = 'PRIMARY' | 'MAX_CONTENT' | 'MIN_CONTENT';

export const ProductOutOfStockMock: Record<MockKeys, ProductOutOfStock> = {
  PRIMARY: {
    ...ProductMock.PRIMARY,
    type: 'product-out-of-stock',
  },
  MAX_CONTENT: {
    ...ProductMock.MAX_CONTENT,
    type: 'product-out-of-stock',
  },
  MIN_CONTENT: {
    ...ProductMock.MIN_CONTENT,
    type: 'product-out-of-stock',
  },
};
