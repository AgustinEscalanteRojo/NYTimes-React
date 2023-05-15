import { Category } from '../../models/Category'

const NY_BOOKS_CATEGORY_KEY = 'nyBooksLists'

export const getCachedCategories = (): Category[] => {
  const response = window.localStorage.getItem(NY_BOOKS_CATEGORY_KEY)
  return response ? JSON.parse(response) : []
}

export const setCachedCategories = (categories: Category[]) => {
  window.localStorage.setItem(NY_BOOKS_CATEGORY_KEY, JSON.stringify(categories))
}
