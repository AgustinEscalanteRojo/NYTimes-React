import { FC, memo } from 'react'
import { Button, Container, Content, Title } from './styles'
import useLogic from './logic'

const Header: FC = () => {
  const { handleLogout } = useLogic()

  return (
    <Container>
      <Content>
        <Title>NY Times Books</Title>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Content>
    </Container>
  )
}

export default memo(Header)