import { FC } from "react"
import { Button } from "../ui/button"
import { exportLocalStorageAsJSON } from "@/lib/export-old-data"

interface DownloadsContentProps {}

export const DownloadsContent: FC<DownloadsContentProps> = () => {
  const handleOpenDownloads = () => {
    window.location.href = 'https://google.com';
  }

  return (
    <div className="p-4">
      <Button 
        className="w-full"
        onClick={handleOpenDownloads}
      >
        前往下載
      </Button>
    </div>
  )
}
