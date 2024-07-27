export interface MarketType {
  isin?: string
  per?: number[]
  capitalization?: string|number[]
  price_to_book?: number[]
  volume?: number[]
  exchange_reference?: string[]
  funds?: number|null
  etfs?: number|null
  indexes?: string[]
  introduction?: string
}