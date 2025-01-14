import { ContentType } from "@/types"
import { FC } from "react"
import { TabsTrigger } from "../ui/tabs"
import { WithTooltip } from "../ui/with-tooltip"

interface SidebarSwitchItemProps {
  contentType: ContentType
  icon: React.ReactNode
  onContentTypeChange: (contentType: ContentType) => void
}

export const SidebarSwitchItem: FC<SidebarSwitchItemProps> = ({
  contentType,
  icon,
  onContentTypeChange
}) => {
  const getTooltipText = (type: ContentType) => {
    switch (type) {
      case "chats":
        return "對話"
      case "permissions":
        return "權限管理"
      case "downloads":
        return "下載管理"
      default:
        return type[0].toUpperCase() + type.substring(1)
    }
  }

  return (
    <WithTooltip
      display={<div>{getTooltipText(contentType)}</div>}
      trigger={
        <TabsTrigger
          className="hover:opacity-50 data-[state=active]:bg-muted/50"
          value={contentType}
          onClick={() => onContentTypeChange(contentType as ContentType)}
        >
          {icon}
        </TabsTrigger>
      }
    />
  )
}
