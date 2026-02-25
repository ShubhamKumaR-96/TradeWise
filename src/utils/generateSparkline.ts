export const generateSparkline=(basePrice:number,points=20):number[]=>{
    const arr:number[]=[basePrice]

    for (let i=1;i<points;i++){
        const prev=arr[i-1]

        const volatility=prev*0.008

        const delta=(Math.random() - 0.48) * volatility

        arr.push(Math.max(prev + delta, basePrice*0.9))
    }
    return arr
}

export const generateCharData=(
    basePrice:number,
    points:number=60
):number[]=>{
    return generateSparkline(basePrice,points)
}