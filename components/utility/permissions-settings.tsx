import { FC, useState } from "react"
import { IconLock } from "@tabler/icons-react"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet"
import { SIDEBAR_ICON_SIZE } from "../sidebar/sidebar-switcher"

interface PermissionsSettingsProps {}

export const PermissionsSettings: FC<PermissionsSettingsProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenPermissions = () => {
    window.open('https://google.com', '_blank')
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <IconLock
          className="cursor-pointer hover:opacity-50"
          size={SIDEBAR_ICON_SIZE}
        />
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>權限管理</SheetTitle>
        </SheetHeader>

        <div className="mt-6">
          <Button 
            className="w-full"
            onClick={handleOpenPermissions}
          >
            前往權限管理
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
