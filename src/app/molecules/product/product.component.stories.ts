import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductModule } from './product.module';

export default {
  title: 'Molecules/Product',
  component: ProductComponent,
  decorators: [
    moduleMetadata({
      imports: [ProductModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `<ov-product [product]="product">
  <div actions>Actions slot</div>
  <div footer>Footer slot</div>
  </ov-product>`,
});

export const Primary = Template.bind({});
Primary.args = {
  product: {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
};

export const MaxContent = Template.bind({});
MaxContent.args = {
  product: {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sodales augue, eget pellentesque urna. Duis eleifend enim quis velit posuere porttitor. Nam facilisis metus id turpis vehicula fermentum. Nunc sollicitudin blandit molestie. Vestibulum varius massa euismod massa egestas tincidunt. Proin laoreet odio vel sollicitudin imperdiet. Cras volutpat id odio id ultrices. Suspendisse sodales rutrum tortor, ultrices consectetur ante tincidunt sit amet. Donec laoreet arcu metus, at efficitur nibh placerat ac.',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
};

export const MinContent = Template.bind({});
MinContent.args = {
  product: {
    id: 1,
    title: 'Bag',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
};

export const Landscape = Template.bind({});
Landscape.args = {
  product: {
    id: 11,
    title:
      'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
};
