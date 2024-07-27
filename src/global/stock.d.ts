import { Document } from "mongoose"
import { type LeaderType } from "./_partials/leader.js"
import { type CompanyType } from "./_partials/company.js"
import { type MotivationsType } from "./_partials/motivation.js"
import { type RatioType } from "./_partials/ratio.js"
import { type MarketType } from "./_partials/market.js"
import { type ManagementType } from "./_partials/management.js"
import { type SwotType } from "./_partials/swot.js"
import { IncomeType } from "./_partials/income.js"
import { DividendeType } from "./_partials/dividende.js"
import { BalanceType } from "./_partials/balance.js"
import { DebtType } from "./_partials/debt.js"
import { CashFlowType } from "./_partials/cashflow.js"
import { InvestismentType } from "./_partials/investisment.js"
import { NotationsType } from "./_partials/notations.js"
import { AnalystType } from "./_partials/analyst.js"
import { ConcomitanteType } from "./_partials/concomitante.js"
import { NewsType } from "./_partials/news.js"
import { ShortType } from "./_partials/short.js"
import { InsidersSellsType } from "./_partials/insider-sells.js"
export interface StockType extends Document {
  company?: CompanyType,
  lynch?: { current: string, olds: string[] }[],
  cycle?: string,
  motivations?: MotivationsType,
  ratio?: RatioType[],
  market?: MarketType,
  management?: ManagementType,
  share_holders?: { name: string, value: number }[],
  administrators?: LeaderType[],
  insiders?: LeaderType[],
  autocontrols?: number,
  floating?: number,
  swot?: SwotType,
  income?: IncomeType,
  dividende?: DividendeType,
  balance?: BalanceType,
  debt?: DebtType,
  cashflow?: CashFlowType,
  investisment?: InvestismentType,
  reports?: string[],
  notations?: NotationsType[],
  analyst?: AnalystType,
  concomitantes?: ConcomitanteType[],
  news?: NewsType[],
  shorts?: ShortType,
  insiders_sells?: InsidersSellsType[],
  urls?: string[],
  last_updated:  string
}