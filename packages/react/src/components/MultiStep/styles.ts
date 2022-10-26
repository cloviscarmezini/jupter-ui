import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {
  // backgroundColor: '$gray900',
  // padding: '$3 $4',
  // borderRadius: '$sm',
  // boxSizing: 'boder-box',
  // border: '2px solid $gray900',
  // display: 'flex',
  // alignItems: 'baseline',
  // '&:has(input:focus)': {
  //   borderColor: '$jupter300',
  // },
  // '&:has(input:disabled)': {
  //   opacity: 0.5,
  //   cursor: 'not-allowed',
  // },
})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: '$xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
