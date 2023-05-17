import { FC, memo, useCallback, useEffect, useState } from 'react'
import { getListBooks } from '../../services/nytime'
import { Book } from '../../models/Book'
import Card from '../../components/Card'
import { useParams } from 'react-router-dom'
import { BooksList, Container } from './styles'

const Books: FC = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { listKey } = useParams()

  const handleSetBooks = useCallback(async () => {
    if (listKey) {
      const categoriesList = await getListBooks(listKey)
      setBooks(categoriesList)
    }

    setIsLoading(false)
  }, [listKey])

  useEffect(() => {
    handleSetBooks()
  }, [handleSetBooks])

  if (isLoading) {
    return <div>CARGANDO....</div>
  }
  return (
    <Container>
      <BooksList>
        {books.map((book, index) => (
          <Card
            key={index}
            title={book.title}
            extraInfo={book.author}
            isDetails={true}
          />
        ))}
      </BooksList>
    </Container>
  )
}

export default memo(Books)
