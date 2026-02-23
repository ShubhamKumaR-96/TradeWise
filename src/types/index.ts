// Stocks
// Represent one row in the watchlist table

export interface Stock {
    symbol:string,
    name:string,
    price:number,
    change:number,
    changePercent:number,
    volume:string,
    high:number,
    low:number,
    open:number,
    close:number,
    prevClose:number,
    sparkLine:number[],
    sector:string,
    marketCap:string
}

export interface Holding {
    symbol:string,
    quantity:number,
    avgPrice:number,
    currentPrice:number,
    investedValue:number,
    currentValue:number,
    pnl:number,
    pnlPercent:number
}

export type OrderType='MARKET' | 'LIMIT' | 'SL' | 'NRML'

export type ProductType='CNC'| 'MIS' | 'NRML'

export type OrderSide='BUY'|'SELL'

export type OrderStatus='PENDING'|'EXECUTED'|'CANCELLED'|'REJECTED'

export interface Order {
    id:string,
    symbol:string,
    type:OrderSide
    orderType:OrderType,
    quantity:number,
    price:number,
    status:OrderStatus,
    timeStamp:string,
    product:ProductType
}

export interface PortfolioSummary {
    totalInvested:number,
    currentValue:number,
    totalPnl:number,
    totalPnlPercent:number,
    dayPnl:number,
    dayPnlPercent:number,
    availableMargin:number,
    usedMargin:number
}

export type ActiveView='dashboard'|'watchlist'|'holding'|'orders'|'chart'

export interface AppContextType {
    activeView:ActiveView,
    seleceted: Stock | null,
    watchList:Stock[]
    holding:Holding[]
    orders:Order[]
    portfolio:PortfolioSummary
    orderFormOpen:boolean
    orderSide:OrderSide


    setActiveView:(view:ActiveView)=>void;
    selectStock:(stock:Stock)=>void;
    openOrder:(stock:Stock,side:OrderSide)=>void;
    closeOrder:()=>void;

    placeOrder:(order:Omit<Order, 'id' | 'timestamp'| 'status'>)=> void

    updatePrices:(update:Record<string,number>)=> void

}

export interface OrderFormState {
    orderType:OrderType,
    quantity:number
    price:number,
    product:ProductType
}

export type OrderFormErrors=Partial<Record<keyof OrderFormState,string>>


export interface NavItem{
    id:ActiveView
    icon:string
    label:string
}



