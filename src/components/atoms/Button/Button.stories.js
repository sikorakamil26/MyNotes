import React from 'react';
import Button from './Button';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

export default { title: 'Atoms/Button', decorators: [withKnobs] };

export const primary = () => {
  const label = 'Colors';
  const options = {
    primary: 'hsl(49, 100%, 58%)',
    secondary: 'hsl(196, 83%, 75%)',
    tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}>Hello Button</Button>;
};
export const secondary = () => <Button secondary>Remove</Button>;
// Knobs as dynamic variables.
