import { Document } from "mongoose"
import { type LeaderType } from "./_partials/company/leader.js"
import { type CompanyType } from "./_partials/company.js"
import { type MotivationsType } from "./_partials/company/motivation.js"
import { type RatioType } from "./_partials/others/ratio.js"
import { type MarketType } from "./_partials/market.js"
import { type ManagementType } from "./_partials/company/management.js"
import { type SwotType } from "./_partials/company/swot.js"
import { type IncomeType } from "./_partials/income/income.js"
import { type DividendeType } from "./_partials/income/dividende.js"
import { type BalanceType } from "./_partials/income/balance.js"
import { type DebtType } from "./_partials/income/debt.js"
import { type CashFlowType } from "./_partials/income/cashflow.js"
import { type InvestismentType } from "./_partials/income/investisment.js"
import { type NotationsType } from "./_partials/others/notations.js"
import { type AnalystType } from "./_partials/market/analyst.js"
import { type ConcomitanteType } from "./_partials/company/concomitante.js"
import { type NewsType } from "./_partials/others/news.js"
import { type ShortType } from "./_partials/market/short.js"
import { type InsidersSellsType } from "./_partials/market/insider-sells.js"
import { type LynchType } from "./_partials/others/lynch.js"
import { ShareHoldersType } from "./_partials/market/share_holders.js"
export interface StockType extends Document {
  company?: CompanyType,
  lynch?: LynchType[],
  cycle?: string,
  motivations?: MotivationsType,
  ratio?: RatioType[],
  market?: MarketType,
  management?: ManagementType,
  share_holders?: ShareHoldersType[],
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