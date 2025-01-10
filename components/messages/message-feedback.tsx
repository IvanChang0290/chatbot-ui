import { FC, useState } from "react"
import { Button } from "../ui/button"
import { IconThumbUp, IconThumbDown } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { FeedbackPanel } from "./feedback-panel"

interface MessageFeedbackProps {
  messageId: string
  onFeedback?: (messageId: string, isLike: boolean, option?: string, detail?: string) => void
}

export const MessageFeedback: FC<MessageFeedbackProps> = ({
  messageId,
  onFeedback
}) => {
  const [feedback, setFeedback] = useState<"like" | "dislike" | null>(null)
  const [showFeedbackPanel, setShowFeedbackPanel] = useState(false)
  const imgSize = 20

  const handleFeedback = (isLike: boolean) => {
    const newFeedback = isLike ? "like" : "dislike"
    
    if (isLike) {
      setFeedback(feedback === newFeedback ? null : newFeedback)
      onFeedback?.(messageId, true)
    } else {
      setShowFeedbackPanel(true)
      setFeedback("dislike")
    }
  }

  const handleFeedbackSubmit = (options: string[], detail: string) => {
    // Pass the first selected option, or undefined if no options selected
    onFeedback?.(messageId, false, options[0], detail)
    setShowFeedbackPanel(false)
  }

  return (
    <>
      <div className="flex items-center mt-2">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "hover:bg-neutral-200 dark:hover:bg-neutral-800",
            feedback === "like" 
          )}
          onClick={() => handleFeedback(true)}
        >
          <IconThumbUp size={imgSize} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "hover:bg-neutral-200 dark:hover:bg-neutral-800",
            feedback === "dislike" 
          )}
          onClick={() => handleFeedback(false)}
        >
          <IconThumbDown size={imgSize} />
        </Button>
      </div>

      <FeedbackPanel 
        isOpen={showFeedbackPanel}
        onClose={() => setShowFeedbackPanel(false)}
        onSubmit={handleFeedbackSubmit}
      />
    </>
  )
}
