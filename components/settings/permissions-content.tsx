import { FC } from "react"
import { Button } from "../ui/button"

interface PermissionsContentProps {}

export const PermissionsContent: FC<PermissionsContentProps> = () => {
  const handleOpenPermissions = () => {
    window.location.href = 'https://google.com';
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
