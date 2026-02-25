export const formatCurrency=(value:number):string=>{

    if (value >= 10000000){
        return `₹${(value/10000000).toFixed(2)}Cr`
    }

    if (value >= 1000000){
        return `₹${(value/100000).toFixed(2)}L`
    }

    return `₹${value.toLocaleString('en-IN',{
        minimumFractionDigits:2,
        maximumFractionDigits:2
    })}`

}

export const formatPrice=(value:number):string=>{

    return `₹${value.toLocaleString('en-IN',{
        minimumFractionDigits:2,
        maximumFractionDigits:2
    })}`

}

export const formatChange=(value:number):string=>{

    const sign= value >= 0 ? "+" : ""

    return `${sign}${value.toFixed(2)}`

}

export const formatPercent=(value:number):string=>{

    const sign=value>=0 ? "+" : ""

    return `${sign}${value.toFixed(2)}%`
}

export const formatVolume=(value:number):string=>{
    if(value>=1000000) return `${(value/1000000).toFixed(2)}M`

    if(value>=1000) return `${(value/1000).toFixed(2)}K`

    return value.toLocaleString('en-IN')
}