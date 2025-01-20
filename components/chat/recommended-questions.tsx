import { FC, useEffect, useState } from 'react'
import { Button } from '../ui/button'

interface RecommendedQuestionsProps {
  onQuestionClick: (question: string) => void
  isVisible: boolean
  isNewMessage: boolean
}

interface Question {
  id: number
  text: string
}

export const RecommendedQuestions: FC<RecommendedQuestionsProps> = ({
  onQuestionClick,
  isVisible,
  isNewMessage
}) => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!isVisible) return
      
      try {
        setIsLoading(true)
        const url = `/api/recommend-questions`
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch questions')
        }
        const data = await response.json()
        setQuestions(data)
      } catch (error) {
        console.error('Error fetching recommended questions:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (isVisible) {
      fetchQuestions()
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {isLoading ? (
        <div>Loading questions...</div>
      ) : (
        questions.map((question) => (
          <Button
            key={question.id}
            variant="outline"
            size="sm"
            onClick={() => onQuestionClick(question.text)}
            className="text-xs"
          >
            {question.text}
          </Button>
        ))
      )}
    </div>
  )
}
