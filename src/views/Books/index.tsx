import { FC, useCallback, useEffect, useState } from 'react'
import { getListBooks } from '../../services/nytime'
import { Book } from '../../models/Book'
import Card from '../../components/Card'
import './styles.css'
import { useParams } from 'react-router-dom'

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
    <div className="booksContainer">
      <div className="books">
        {books.map((book, index) => (
          <Card
            key={index}
            title={book.title}
            extraInfo={book.author}
            isDetails={true}
          />
        ))}
      </div>
    </div>
  )
}

export default Books
