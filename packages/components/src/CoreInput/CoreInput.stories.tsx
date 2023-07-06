import type { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
import { CoreInput } from './CoreInput';
import { colors } from '../consts';

const meta = {
  title: 'Components/CoreInput',
  component: CoreInput,
  parameters: {
    actions: {
      handles: ['focus', 'change', 'focus', 'blur'],
    },
  },
  tags: ['form', 'input'],
  argTypes: {
    color: {
      control: {
        type: 'select',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        options: colors,
      },
    },
  },
  decorators: [withActions],
} satisfies Meta<typeof CoreInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Text Input',
  },

  render: (args) => <CoreInput {...args} />,
};
