import {
  Category,
  normalizeCategory,
  NyTimeCategoriesResponse,
} from '../../models/Category'
import { getCachedCategories, setCachedCategories } from '../storage/categories'
import { normalizeBook, NyTimeBooksResponse } from '../../models/Book'

export const getNyCategories = async (): Promise<Category[]> => {
  const savedCategories = getCachedCategories()

  if (!savedCategories || savedCategories.length <= 0) {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_NY_KEY}`
    )
    const data: NyTimeCategoriesResponse = await response.json()

    if (data.status !== 'OK') {
      return []
    }

    const mappedCategories = data.results.map(normalizeCategory)
    setCachedCategories(mappedCategories)

    return mappedCategories
  }

  return savedCategories
}

export const getListBooks = async (listName: string) => {
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${process.env.REACT_APP_NY_KEY}`
  )
  const data: NyTimeBooksResponse = await response.json()

  if (data.status !== 'OK') {
    return []
  }

  return data.results.books.map(normalizeBook)
}
