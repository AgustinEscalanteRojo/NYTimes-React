import { FC, memo, useCallback } from 'react'
import {
  Button,
  Container,
  Content,
  ExtraInfo,
  Footer,
  FooterContent,
  Header,
} from './styles'
import type { Props } from './types'

const Card: FC<Props> = ({ title, extraInfo, isDetails = false, onClick }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick()
    }
  }, [onClick])

  return (
    <Container>
      <Content>
        <Header>{title}</Header>
        <Footer>
          <FooterContent>
            <ExtraInfo>{extraInfo}</ExtraInfo>
            {!isDetails && <Button onClick={handleClick}>Detalle</Button>}
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  )
}

export default memo(Card)