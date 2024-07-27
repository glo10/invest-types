export interface Db {
  connect(): Promise<void>
}