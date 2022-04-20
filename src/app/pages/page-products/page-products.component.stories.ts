import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProductDefaultMock } from '../../molecules/product-default/product-default.component.mocks';
import { ProductOutOfStockMock } from '../../molecules/product-out-of-stock/product-out-of-stock.component.mocks';
import { ProductReplacementMock } from '../../molecules/product-replaced/product-replaced.component.mocks';
import { PageProductsComponent } from './page-products.component';
import { PageProductsModule } from './page-products.module';

export default {
  title: 'Pages/Products',
  component: PageProductsComponent,
  decorators: [
    moduleMetadata({
      imports: [PageProductsModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<PageProductsComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  products: [
    ProductDefaultMock.PRIMARY,
    ProductDefaultMock.MIN_CONTENT,
    ProductOutOfStockMock.MAX_CONTENT,
    ProductReplacementMock.MAX_CONTENT,
    ProductDefaultMock.MAX_CONTENT,
  ],
};
