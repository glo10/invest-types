import type WatchListType from './watchlist'

export default interface WatchListComputedType extends WatchListType {
  average: number
  total: number
  min: { value: number; name: string }
  max: { value: number; name: string }
}
