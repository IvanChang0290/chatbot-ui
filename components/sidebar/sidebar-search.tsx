import { ContentType } from "@/types"
import { FC } from "react"
import { Input } from "../ui/input"

interface SidebarSearchProps {
  contentType: ContentType
  searchTerm: string
  setSearchTerm: Function
}

export const SidebarSearch: FC<SidebarSearchProps> = ({
  contentType,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <Input
      // placeholder={`Search ${contentType}...`}
      placeholder={`搜尋對話...`}
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}
