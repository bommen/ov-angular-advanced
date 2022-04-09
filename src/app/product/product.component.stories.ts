import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

export default {
  title: 'ProductComponent',
  component: ProductComponent,
  decorators: [
    moduleMetadata({
      declarations: [ProductComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
