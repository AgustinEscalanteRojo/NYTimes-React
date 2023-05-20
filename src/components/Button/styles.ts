import styled from 'styled-components'
import { Props } from './types'

export const Container = styled.button<{ $variant: Props['variant'] }>`
  background-color: beigeColor;
  border: 1px solid ${({ theme }) => theme.colors.blue300};
  border-radius: 4px;
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.blue300 : theme.colors.orange};
  cursor: pointer;
  transition: all 200ms ease-in-out;
  padding: 8px 16px;

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === 'primary' ? theme.colors.orange : theme.colors.orange};
    color: beigeColor;
  }
`