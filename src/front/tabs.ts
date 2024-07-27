import { type DefineComponent } from 'vue'
export interface TabsType {
  label: string
  value: string
  icon: DefineComponent<HTMLElement>
  items?: { label: string; value: string; icon?: DefineComponent<string> }[]
}
