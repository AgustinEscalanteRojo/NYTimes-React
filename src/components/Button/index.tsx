import { FC, memo } from 'react'
import { Container } from './styles'
import type { Props } from './types'

const Button: FC<Props> = ({
  className,
  children,
  onClick,
  type = 'button',
  variant = 'primary',
}) => {
  return (
    <Container
      $variant={variant}
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default memo(Button)