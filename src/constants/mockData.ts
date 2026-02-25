import type { Stock, Holding, Order,NavItem, PortfolioSummary  } from "@/types";

import { generateSparkline } from "@/utils/generateSparkline";


export const INITIAL_STOCKS: Stock[] = [
  {
      symbol: 'RELIANCE',
      name: 'Reliance Industries Ltd',
      price: 2847.65,
      change: 34.20,
      changePercent: 1.22,
      volume: '12.4M',
      high: 2865.00,
      low: 2801.30,
      open: 2813.00,
      prevClose: 2813.45,
      sector: 'Energy',
      marketCap: '₹19.2L Cr',
      sparkLine: generateSparkline(2847),
      close: 0
  },
  {
      symbol: 'TCS',
      name: 'Tata Consultancy Services',
      price: 3912.40,
      change: -28.75,
      changePercent: -0.73,
      volume: '3.2M',
      high: 3952.00,
      low: 3888.10,
      open: 3940.00,
      prevClose: 3941.15,
      sector: 'IT',
      marketCap: '₹14.2L Cr',
      sparkLine: generateSparkline(3912),
      close: 0
  },
  {
      symbol: 'HDFCBANK',
      name: 'HDFC Bank Ltd',
      price: 1678.90,
      change: 22.45,
      changePercent: 1.36,
      volume: '8.7M',
      high: 1692.00,
      low: 1655.30,
      open: 1656.00,
      prevClose: 1656.45,
      sector: 'Banking',
      marketCap: '₹12.8L Cr',
      sparkLine: generateSparkline(1678),
      close: 0
  },
  {
      symbol: 'INFY',
      name: 'Infosys Ltd',
      price: 1542.30,
      change: -15.60,
      changePercent: -1.00,
      volume: '5.1M',
      high: 1568.00,
      low: 1538.00,
      open: 1557.00,
      prevClose: 1557.90,
      sector: 'IT',
      marketCap: '₹6.4L Cr',
      sparkLine: generateSparkline(1542),
      close: 0
  },
  {
      symbol: 'ICICIBANK',
      name: 'ICICI Bank Ltd',
      price: 1089.75,
      change: 18.30,
      changePercent: 1.71,
      volume: '9.3M',
      high: 1098.00,
      low: 1068.00,
      open: 1071.00,
      prevClose: 1071.45,
      sector: 'Banking',
      marketCap: '₹7.7L Cr',
      sparkLine: generateSparkline(1089),
      close: 0
  },
  {
      symbol: 'WIPRO',
      name: 'Wipro Ltd',
      price: 467.85,
      change: 5.40,
      changePercent: 1.17,
      volume: '6.8M',
      high: 472.00,
      low: 460.00,
      open: 462.00,
      prevClose: 462.45,
      sector: 'IT',
      marketCap: '₹2.4L Cr',
      sparkLine: generateSparkline(467),
      close: 0
  },
  {
      symbol: 'BAJFINANCE',
      name: 'Bajaj Finance Ltd',
      price: 7234.50,
      change: -89.30,
      changePercent: -1.22,
      volume: '1.2M',
      high: 7340.00,
      low: 7198.00,
      open: 7323.00,
      prevClose: 7323.80,
      sector: 'NBFC',
      marketCap: '₹4.4L Cr',
      sparkLine: generateSparkline(7234),
      close: 0
  },
  {
      symbol: 'BHARTIARTL',
      name: 'Bharti Airtel Ltd',
      price: 1432.60,
      change: 28.90,
      changePercent: 2.06,
      volume: '4.5M',
      high: 1445.00,
      low: 1398.00,
      open: 1403.00,
      prevClose: 1403.70,
      sector: 'Telecom',
      marketCap: '₹8.5L Cr',
      sparkLine: generateSparkline(1432),
      close: 0
  },
  {
      symbol: 'ASIANPAINT',
      name: 'Asian Paints Ltd',
      price: 2856.40,
      change: -42.10,
      changePercent: -1.45,
      volume: '0.9M',
      high: 2908.00,
      low: 2841.00,
      open: 2898.00,
      prevClose: 2898.50,
      sector: 'Chemicals',
      marketCap: '₹2.7L Cr',
      sparkLine: generateSparkline(2856),
      close: 0
  },
  {
      symbol: 'KOTAKBANK',
      name: 'Kotak Mahindra Bank Ltd',
      price: 1756.20,
      change: 23.80,
      changePercent: 1.37,
      volume: '2.8M',
      high: 1768.00,
      low: 1728.00,
      open: 1732.00,
      prevClose: 1732.40,
      sector: 'Banking',
      marketCap: '₹3.5L Cr',
      sparkLine: generateSparkline(1756),
      close: 0
  },
  {
      symbol: 'LT',
      name: 'Larsen & Toubro Ltd',
      price: 3478.90,
      change: 67.50,
      changePercent: 1.98,
      volume: '2.1M',
      high: 3495.00,
      low: 3398.00,
      open: 3411.00,
      prevClose: 3411.40,
      sector: 'Infrastructure',
      marketCap: '₹4.8L Cr',
      sparkLine: generateSparkline(3478),
      close: 0
  },
  {
      symbol: 'SUNPHARMA',
      name: 'Sun Pharmaceutical Industries',
      price: 1678.30,
      change: -12.40,
      changePercent: -0.73,
      volume: '1.8M',
      high: 1698.00,
      low: 1662.00,
      open: 1690.00,
      prevClose: 1690.70,
      sector: 'Pharma',
      marketCap: '₹4.0L Cr',
      sparkLine: generateSparkline(1678),
      close: 0
  },
]

export const INITIAL_HOLDINGS: Holding[] = [
  {
    symbol: 'RELIANCE',
    quantity: 50,
    avgPrice: 2650.00,
    currentPrice: 2847.65,
    investedValue: 132500.00,       // 50 * 2650
    currentValue: 142382.50,        // 50 * 2847.65
    pnl: 9882.50,                   // 142382.50 - 132500
    pnlPercent: 7.46,               // (9882.50 / 132500) * 100
  },
  {
    symbol: 'TCS',
    quantity: 20,
    avgPrice: 3780.00,
    currentPrice: 3912.40,
    investedValue: 75600.00,        // 20 * 3780
    currentValue: 78248.00,         // 20 * 3912.40
    pnl: 2648.00,
    pnlPercent: 3.50,
  },
  {
    symbol: 'HDFCBANK',
    quantity: 100,
    avgPrice: 1720.00,
    currentPrice: 1678.90,
    investedValue: 172000.00,       // 100 * 1720
    currentValue: 167890.00,        // 100 * 1678.90
    pnl: -4110.00,                  // Loss — current < avg
    pnlPercent: -2.39,
  },
  {
    symbol: 'INFY',
    quantity: 80,
    avgPrice: 1490.00,
    currentPrice: 1542.30,
    investedValue: 119200.00,       // 80 * 1490
    currentValue: 123384.00,        // 80 * 1542.30
    pnl: 4184.00,
    pnlPercent: 3.51,
  },
  {
    symbol: 'LT',
    quantity: 30,
    avgPrice: 3200.00,
    currentPrice: 3478.90,
    investedValue: 96000.00,        // 30 * 3200
    currentValue: 104367.00,        // 30 * 3478.90
    pnl: 8367.00,
    pnlPercent: 8.71,
  },
]
export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ORD001',
    symbol: 'WIPRO',
    type: 'BUY',
    orderType: 'LIMIT',
    quantity: 100,
    price: 462.00,
    status: 'EXECUTED',
    timeStamp: '10:32:15',
    product: 'CNC',
  },
  {
    id: 'ORD002',
    symbol: 'BAJFINANCE',
    type: 'SELL',
    orderType: 'MARKET',
    quantity: 5,
    price: 7234.50,
    status: 'EXECUTED',
    timeStamp: '11:15:42',
    product: 'MIS',
  },
  {
    id: 'ORD003',
    symbol: 'BHARTIARTL',
    type: 'BUY',
    orderType: 'SL',
    quantity: 50,
    price: 1400.00,
    status: 'PENDING',
    timeStamp: '13:20:08',
    product: 'CNC',
  },
  {
    id: 'ORD004',
    symbol: 'ICICIBANK',
    type: 'BUY',
    orderType: 'LIMIT',
    quantity: 75,
    price: 1065.00,
    status: 'CANCELLED',
    timeStamp: '09:15:30',
    product: 'MIS',
  },
  {
    id: 'ORD005',
    symbol: 'RELIANCE',
    type: 'SELL',
    orderType: 'SL',
    quantity: 10,
    price: 2790.00,
    status: 'REJECTED',
    timeStamp: '14:45:22',
    product: 'NRML',
  },
]

export const INITIAL_PORTFOLIO: PortfolioSummary = {
  // Sum of all investedValues above:
  // 132500 + 75600 + 172000 + 119200 + 96000 = 595300
  totalInvested: 595300.00,

  // Sum of all currentValues:
  // 142382.50 + 78248 + 167890 + 123384 + 104367 = 616271.50
  currentValue: 616271.50,

  // 616271.50 - 595300 = 20971.50
  totalPnl: 20971.50,

  // (20971.50 / 595300) * 100 = 3.52%
  totalPnlPercent: 3.52,

  dayPnl: 4832.40,
  dayPnlPercent: 0.79,

  // Trading account balance
  availableMargin: 125480.00,
  usedMargin: 45620.00,
}



export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard',  icon: '▣',  label: 'Dashboard'  },
  { id: 'watchlist',  icon: '◈',  label: 'Watchlist'  },
  { id: 'holding',    icon: '▦',  label: 'Holdings'   },
  { id: 'orders',     icon: '≡',  label: 'Orders'     },
  { id: 'chart',      icon: '∿',  label: 'Charts'     },
]