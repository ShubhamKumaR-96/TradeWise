import { formatCurrency, formatPrice, formatPercent, cn } from '@/utils'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080C14] flex flex-col items-center justify-center gap-3 font-mono">

      {/* formatCurrency tests */}
      <p className="text-white">{formatCurrency(616271.50)}</p>   
      <p className="text-white">{formatCurrency(192000000)}</p>   
      <p className="text-white">{formatCurrency(45000)}</p>      

      {/* formatPrice test */}
      <p className="text-white">{formatPrice(2847.65)}</p>        

      {/* formatPercent tests */}
      <p className="text-emerald-400">{formatPercent(1.22)}</p>   
      <p className="text-red-400">{formatPercent(-0.73)}</p>       

      {/* cn tests */}
      <p className={cn('text-sm', true && 'text-blue-400', false && 'text-red-400')}>
        cn works!                                                  
      </p>

    </div>
  )
}