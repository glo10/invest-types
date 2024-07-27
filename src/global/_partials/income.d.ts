import { PartType } from "./part"
export interface IncomeType {
  revenue?: number
  ebitda?: number
  exploitation_margin?: number
  net_result?: number
  net_margin?: number
  by_region: PartType[]
}