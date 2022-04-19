import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent, SupportedType } from './button.component';
import { ButtonModule } from './button.module';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
} as Meta;

const TYPES: Record<SupportedType, true> = {
  primary: true,
  inverted: true,
};

const Template: Story<ButtonComponent> = (args) => ({
  props: args,
  template: `
  <ul>
  ${Object.keys(TYPES)
    .map(
      (type) =>
        `<li style="padding-bottom: 4px">
          <ov-button type="${type}">${type}</ov-button>
        </li>`
    )
    .join('')}
  </ul>`,
});

export const Primary = Template.bind({});
Primary.args = {};
