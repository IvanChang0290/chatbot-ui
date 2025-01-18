import { LLM } from "@/types"
import { GOOGLE_LLM_LIST } from "./google-llm-list"
import { CUSTOM_LLM_LIST } from "./custom-llm-list"

export const LLM_LIST: LLM[] = [
  ...GOOGLE_LLM_LIST,
  ...CUSTOM_LLM_LIST
]

export const LLM_LIST_MAP: Record<string, LLM[]> = {
  google: GOOGLE_LLM_LIST,
  custom: CUSTOM_LLM_LIST
}
