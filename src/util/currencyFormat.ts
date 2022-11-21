
const CURRENCY_FORMAT=new Intl.NumberFormat(undefined,{
    currency:"INR",style:"currency"
})

export const currencyFormat = (number:number) => {
  return CURRENCY_FORMAT.format(number)
}
