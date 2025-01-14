import { FC, useState } from "react"
import { IconDownload } from "@tabler/icons-react"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet"
import { SIDEBAR_ICON_SIZE } from "../sidebar/sidebar-switcher"
import { exportLocalStorageAsJSON } from "@/lib/export-old-data"

interface DownloadsSettingsProps {}

export const DownloadsSettings: FC<DownloadsSettingsProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <IconDownload
          className="cursor-pointer hover:opacity-50"
          size={SIDEBAR_ICON_SIZE}
        />
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>下載管理</SheetTitle>
        </SheetHeader>

        <div className="mt-6">
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
      </SheetContent>
    </Sheet>
  )
}
