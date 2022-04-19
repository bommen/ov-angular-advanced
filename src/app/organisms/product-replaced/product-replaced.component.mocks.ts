import { ProductMock } from '../../molecules/product/product.component.mocks';
import { ProductReplaced } from './product-replaced.component';

type MockKeys = 'PRIMARY' | 'MAX_CONTENT' | 'MIN_CONTENT';

export const ProductReplacementMock: Record<MockKeys, ProductReplaced> = {
  PRIMARY: {
    ...ProductMock.PRIMARY,
    type: 'product-replaced',
    replacement: ProductMock.PRIMARY,
  },
  MAX_CONTENT: {
    ...ProductMock.MAX_CONTENT,
    type: 'product-replaced',
    replacement: ProductMock.MAX_CONTENT,
  },
  MIN_CONTENT: {
    ...ProductMock.MIN_CONTENT,
    type: 'product-replaced',
    replacement: ProductMock.MIN_CONTENT,
  },
};
