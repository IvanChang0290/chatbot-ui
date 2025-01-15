import { ChatbotUIContext } from "@/context/context"
import { IconLogout, IconUser } from "@tabler/icons-react"
import { FC, useContext, useState } from "react"
import { SIDEBAR_ICON_SIZE } from "../sidebar/sidebar-switcher"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet"

interface ProfileSettingsProps {}

export const ProfileSettings: FC<ProfileSettingsProps> = ({}) => {
  const { profile } = useContext(ChatbotUIContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleSignOut = async () => {
    window.location.href = 'https://google.com';
    return
  }

  const companytitle = '公司名稱';
  const departmenttitle = '部門名稱';
  const positiontitle = '職位名稱'; 

  if (!profile) return null

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <IconUser size={SIDEBAR_ICON_SIZE} />
        </Button>
      </SheetTrigger>

      <SheetContent
        className="flex flex-col justify-between"
        side="left"
      >
        <div className="grow overflow-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between space-x-2">
              <div>User Settings</div>

              <Button
                tabIndex={-1}
                className="text-xs"
                size="sm"
                onClick={handleSignOut}
              >
                <IconLogout className="mr-1" size={20} />
                Logout
              </Button>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-4 space-y-4">
            <div className="space-y-1">
              <Label>Username</Label>
              <div className="p-2 rounded-md bg-secondary">
                {profile.username || "No username set"}
              </div>
            </div>

            <div className="space-y-1">
              <Label>Chat Display Name</Label>
              <div className="p-2 rounded-md bg-secondary">
                {profile.display_name || "No display name set"}
              </div>
            </div>

            <div className="space-y-1">
              <Label>公司名稱</Label>
              <div className="p-2 rounded-md bg-secondary">
                {companytitle || "No display name set"}
              </div>
            </div>

            <div className="space-y-1">
              <Label>部門名稱</Label>
              <div className="p-2 rounded-md bg-secondary">
              {departmenttitle || "No display name set"}
              </div>
            </div>

            <div className="space-y-1">
              <Label>職位名稱</Label>
              <div className="p-2 rounded-md bg-secondary">
              {positiontitle || "No display name set"}
              </div>
            </div>

            <div className="space-y-1">
              <Label>權限</Label>
              <div className="p-2 rounded-md bg-secondary">
              {"No display name set"}
              </div>
            </div>

          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
