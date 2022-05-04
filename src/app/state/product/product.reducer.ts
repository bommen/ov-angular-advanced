import { createReducer, on } from '@ngrx/store';
import { AsyncState } from '../../utils/async-state.utils';
import {
  emptySet,
  normalize,
  Normalized,
} from '../../utils/normalization.utils';
import * as ProductActions from './product.actions';
import { ApiProduct } from './product.service';

export type ProductState = AsyncState<Normalized<ApiProduct>>;

const INITIAL_STATE: ProductState = {
  data: { byId: {}, allIds: [] },
  loading: false,
};

export const productReducer = createReducer<ProductState>(
  INITIAL_STATE,
  on(ProductActions.getProducts, ({ data }) => ({
    data,
    loading: true,
  })),
  on(ProductActions.getProductsSuccess, (state, action) => {
    const products = normalize(action.products);
    const existingData = state.data ?? emptySet();
    return {
      data: {
        byId: {
          ...existingData.byId,
          ...products.byId,
        },
        allIds: [
          ...existingData.allIds,
          ...products.allIds.filter(
            (id) => existingData.byId[id] === undefined
          ),
        ],
      },
      loading: false,
    };
  }),
  on(ProductActions.getProductsError, ({ data }, { error }) => ({
    data,
    error: error,
    loading: false,
  }))
);
