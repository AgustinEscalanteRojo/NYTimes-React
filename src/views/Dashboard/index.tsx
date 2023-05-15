import { FC, useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { getNyCategories } from '../../services/nytime'
import { Category } from '../../models/Category'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Dashboard: FC = () => {
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

  if (isLoading) {
    return <div>CARGANDO....</div>
  }

  return (
    <div>
      <Header />
      <div className="dashboardContent">
        <div className="dashboardCards">
          {categories.map((category, index) => (
            <Card
              key={index}
              onClick={() => handleGoToDetails(category.key)}
              title={category.title}
              extraInfo={category.updated}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
