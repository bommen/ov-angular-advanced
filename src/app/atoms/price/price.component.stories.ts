import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { PriceComponent } from './price.component';
import { PriceModule } from './price.module';

export default {
  title: 'Atoms/Price',
  component: PriceComponent,
  decorators: [
    moduleMetadata({
      imports: [PriceModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  amount: 10,
};
