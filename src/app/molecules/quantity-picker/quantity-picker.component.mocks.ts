import { Quantity } from './quantity-picker.component';

type MockKeys = 'PRIMARY' | 'WITH_STEPS' | 'MIN_QUANTITY';

export const QuantityPickerMocks: Record<MockKeys, Quantity> = {
  PRIMARY: {
    min: 1,
    step: 1,
    max: 100,
  },
  WITH_STEPS: {
    min: 4,
    step: 4,
    max: 100,
  },
  MIN_QUANTITY: { min: 1, step: 1, max: 1 },
};
