import { FC } from 'react'
import type { Props } from './types'
import './styles.css'

const Button: FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick} className="customButton">{children}</button>
}

export default Button
