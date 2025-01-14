import { FC } from "react"
import { Button } from "../ui/button"

interface PermissionsContentProps {}

export const PermissionsContent: FC<PermissionsContentProps> = () => {
  const handleOpenPermissions = () => {
    window.open('https://google.com', '_blank')
  }

  return (
    <div className="p-4">
      <Button 
        className="w-full"
        onClick={handleOpenPermissions}
      >
        前往權限管理
      </Button>
    </div>
  )
}
