import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProductOutOfStockComponent } from './product-out-of-stock.component';
import { ProductOutOfStockMock } from './product-out-of-stock.component.mocks';
import { ProductOutOfStockModule } from './product-out-of-stock.module';

export default {
  title: 'Molecules/ProductOutOfStock',
  component: ProductOutOfStockComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductOutOfStockModule],
    }),
  ],
} as Meta;

const Template: Story<ProductOutOfStockComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  product: ProductOutOfStockMock.PRIMARY,
};

export const MaxContent = Template.bind({});
MaxContent.args = {
  product: ProductOutOfStockMock.MAX_CONTENT,
};

export const MinContent = Template.bind({});
MinContent.args = {
  product: ProductOutOfStockMock.MIN_CONTENT,
};
