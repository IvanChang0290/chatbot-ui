import { FC, useState } from "react"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

interface FeedbackPanelProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (options: string[], detail: string) => void
}

const FEEDBACK_OPTIONS = [
  "數據錯誤",
  "詞不達意",
  "回覆時間過長",
  "其他問題"
]

export const FeedbackPanel: FC<FeedbackPanelProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [detail, setDetail] = useState("")

  const handleOptionToggle = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option)
        : [...prev, option]
    )
  }

  const handleSubmit = () => {
    onSubmit(selectedOptions, detail)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-black">
        <DialogHeader>
          <DialogTitle>請告訴我們遇到什麼問題</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-wrap gap-3">
            {FEEDBACK_OPTIONS.map((option) => (
              <div
                key={option}
                className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                  selectedOptions.includes(option) 
                    ? 'bg-gray-900 text-gray-400' 
                    : 'bg-gray-600 text-white hover:bg-gray-900 hover:text-gray-400'
                }`}
                onClick={() => handleOptionToggle(option)}
              >
                {option}
              </div>
            ))}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="detail">詳細說明</Label>
            <Textarea
              id="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="請描述您遇到的問題..."
              className="h-32"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-gray-700 text-white" onClick={handleSubmit}>提交</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
