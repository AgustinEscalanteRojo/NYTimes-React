import styled from 'styled-components'
import DefaultButton from '../Button'

export const Container = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  height: 15rem;
  width: 10rem;
`

export const Content = styled.div`
  padding: 16px;
`

export const Header = styled.div`
  height: 4rem;
`

export const Footer = styled.div`
  border-top: 1px solid gray;
  margin-top: 16px;
`

export const FooterContent = styled.div`
  margin-top: 16px;
`

export const ExtraInfo = styled.div`
  margin-bottom: 16px;
`

export const Button = styled(DefaultButton)`
  width: 100%;
`
