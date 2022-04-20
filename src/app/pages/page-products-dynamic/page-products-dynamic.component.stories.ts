import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProductDefaultMock } from '../../molecules/product-default/product-default.component.mocks';
import { ProductOutOfStockMock } from '../../molecules/product-out-of-stock/product-out-of-stock.component.mocks';
import { ProductReplacementMock } from '../../molecules/product-replaced/product-replaced.component.mocks';
import { PageProductsDynamicComponent } from './page-products-dynamic.component';
import { PageProductsDynamicModule } from './page-products-dynamic.module';

export default {
  title: 'Pages/ProductsDynamic',
  component: PageProductsDynamicComponent,
  decorators: [
    moduleMetadata({
      imports: [PageProductsDynamicModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<PageProductsDynamicComponent> = (args) => ({
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
