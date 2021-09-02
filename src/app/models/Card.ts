
export interface Card {
    primaryCard:{
      bank: string,
      type: string,
      name: string,
      number:string,
      expiry: string,
      ccv: number,
      active: boolean
    },
    expense:{
      current: number,
      limit:number
    },
    balance: {
      current: number,
      credit: number,
      provisions: number
    }
  }