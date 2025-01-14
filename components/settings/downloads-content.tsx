import { FC } from "react"
import { Button } from "../ui/button"
import { exportLocalStorageAsJSON } from "@/lib/export-old-data"

interface DownloadsContentProps {}

export const DownloadsContent: FC<DownloadsContentProps> = () => {
  return (
    <div className="p-4">
      <Button 
        className="w-full"
        onClick={exportLocalStorageAsJSON}
      >
        下載聊天記錄
      </Button>
      <p className="text-sm text-muted-foreground mt-2">
        下載 Chatbot UI 1.0 數據為 JSON 格式
      </p>
    </div>
  )
}
