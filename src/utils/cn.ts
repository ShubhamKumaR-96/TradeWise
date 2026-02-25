
// cn=classNames Utility


type ClassValue = string | number | boolean |  null | undefined | ClassValue[] | {[key:string]:boolean}

const toClass=(value:ClassValue):string=>{

    if(!value) return ''

    if(typeof value === 'string') return value

    if(typeof value === 'number') return String(value)

    if(Array.isArray(value)){
        return value.map(toClass).filter(Boolean).join(' ')
    }   
    
    if (typeof value === 'object'){
        return Object.entries(value).filter(([,val])=>Boolean(val)).map(([key])=>key).join(" ")
    }

    return ''

}

export const cn = (...inputs:ClassValue[]):string =>{
    return inputs.map(toClass).filter(Boolean).join(' ').trim()
}