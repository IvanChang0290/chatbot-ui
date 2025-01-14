import { ContentType } from "@/types"
import {
  IconAdjustmentsHorizontal,
  IconBolt,
  IconBooks,
  IconDownload,
  IconFile,
  IconLock,
  IconMessage,
  IconPencil,
  IconRobotFace,
  IconSparkles
} from "@tabler/icons-react"
import { FC } from "react"
import { TabsList } from "../ui/tabs"
import { WithTooltip } from "../ui/with-tooltip"
import { ProfileSettings } from "../utility/profile-settings"
import { SidebarSwitchItem } from "./sidebar-switch-item"

export const SIDEBAR_ICON_SIZE = 28

interface SidebarSwitcherProps {
  onContentTypeChange: (contentType: ContentType) => void
}

export const SidebarSwitcher: FC<SidebarSwitcherProps> = ({
  onContentTypeChange
}) => {
  return (
    <div className="flex flex-col justify-between border-r-2 h-full pb-5">
      <div className="flex flex-col space-y-4 mt-[60px]">
        <TabsList className="flex flex-col bg-transparent space-y-2 p-2">
          <SidebarSwitchItem
            icon={<IconMessage size={SIDEBAR_ICON_SIZE} />}
            contentType="chats"
            onContentTypeChange={onContentTypeChange}
          />

          <SidebarSwitchItem
            icon={<IconLock size={SIDEBAR_ICON_SIZE} />}
            contentType="permissions"
            onContentTypeChange={onContentTypeChange}
          />

          <SidebarSwitchItem
            icon={<IconDownload size={SIDEBAR_ICON_SIZE} />}
            contentType="downloads"
            onContentTypeChange={onContentTypeChange}
          />
        </TabsList>
      </div>

      <div className="flex flex-col items-center">
        <WithTooltip
          display={<div>用戶設定</div>}
          trigger={<ProfileSettings/>}
        />
      </div>
    </div>
  )
}
