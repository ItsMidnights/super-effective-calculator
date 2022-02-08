import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';

export const WithEmojis = () => (
  <Button onPress={action('clicked-emoji')}>
    <Text>😀 😎 👍 💯</Text>
  </Button>
);

export default {
  name: "Button",
  component: Button
}