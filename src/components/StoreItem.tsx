import React,{useContext} from 'react'
import  {Card, Button} from 'react-bootstrap'
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { currencyFormat } from '../util/currencyFormat';

type StoreItemProps={
    id:number;
    name:string;
    price:number;
    imgUrl:string;

}
function StoreItem(props: StoreItemProps) {

  const {
   imgUrl,
   id,
   name,
   price
  }=props


  const {
    getItemQty,
    removeItem,
    increaseItemQty,
    decreaseItemQty}=useContext(ShoppingCartContext)


  const quantity=getItemQty(id);
  console.log(name,quantity)

  return (
    <Card >
      <Card.Img
       variant='top'
       src={imgUrl}
       height='200px'
       style={{objectFit:'cover'}}
      />
      <Card.Title
        style={{
          display:'flex',
          justifyContent:'space-between'
        }}
      >
        <div>{name}</div>
        <div>{currencyFormat(price)}</div>
      </Card.Title>
      <div className='mt-auto'>
        {
          quantity===0?
          <Button  onClick={()=>increaseItemQty(id)}>
            + Add To Cart
          </Button> :
          <>
            <div
              style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:'0.5rem',
                
              }}>
              
                  <div
                      style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-around',
                        width:'50%'
                      }}
                   
                  >
                    <Button onClick={()=>decreaseItemQty(id)}>-</Button>
                    <div >
                      <strong>{quantity}</strong>  In Cart
                    </div>
                    <Button onClick={()=>increaseItemQty(id)}>+</Button>
                       
                  </div>
                  <Button
                   onClick={()=>removeItem(id)}
                   style={{backgroundColor:'red',border:'none'}}>Remove</Button>
            </div>
          </>
        }
      </div>

    </Card>
  )
}

export default StoreItem