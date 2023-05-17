import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Category } from '../../models/Category'
import { getNyCategories } from '../../services/nytime'

const useLogic = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleGoToDetails = useCallback(
    (listKey: string) => {
      navigate(`/dashboard/${listKey}`)
    },
    [navigate]
  )

  const handleSetCategories = useCallback(async () => {
    const categoriesList = await getNyCategories()
    setCategories(categoriesList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    handleSetCategories()
  }, [handleSetCategories])

  return {
    categories,
    isLoading,
    handleGoToDetails,
  }
}

export default useLogic
