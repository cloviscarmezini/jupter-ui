import { styled, keyframes } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  height: '$6',
  width: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'boder-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state=checked]': {
    backgroundColor: '$jupter300',
    border: '2px solid $jupter300',
  },

  '&:focus': {
    border: '2px solid $jupter300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  height: '$4',
  width: '$4',

  '&[data-state=checked]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state=unchecked]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
