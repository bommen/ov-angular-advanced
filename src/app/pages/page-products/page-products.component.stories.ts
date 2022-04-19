import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProductDefaultMock } from '../../organisms/product-default/product-default.component.mocks';
import { PageProductsComponent } from './page-products.component';
import { PageProductsModule } from './page-products.module';
import { ProductOutOfStockMock } from '../../organisms/product-out-of-stock/product-out-of-stock.component.mocks';
import { ProductReplacementMock } from '../../organisms/product-replaced/product-replaced.component.mocks';

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
