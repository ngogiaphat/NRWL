import { withKnobs } from '@storybook/addon-knobs';
import { configure, addDecorator } from '@storybook/react';
addDecorator(withKnobs);
configure(require.context('../src/lib', true, /\.stories\.tsx?$/), module);