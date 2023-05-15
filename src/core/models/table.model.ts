export interface Table {
    id: number
    table: string
    keys: Key[]
  }
  
  export interface Key {
    keyName: string
    type: string
    isPrimaryKey: boolean
  }
  