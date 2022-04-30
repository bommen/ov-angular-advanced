import { ProductsHostDirective } from './products-host.directive';

describe('ProductsHostDirective', () => {
  it('should create an instance', () => {
    const directive = new ProductsHostDirective({} as any);
    expect(directive).toBeTruthy();
  });
});
