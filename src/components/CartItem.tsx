

import React,{useContext} from 'react'
import { ShoppingCartContext } from './../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import {Stack,Button} from 'react-bootstrap'
import { currencyFormat } from '../util/currencyFormat';

type CartItemProps={
    id:number;
    quantity:number
}

export const CartItem = (props:CartItemProps) => {
    const {
        id,
        quantity
    }=props

    const {removeItem} = useContext(ShoppingCartContext);
    const item=storeItems.find(x=>x.id===id);
   

  return (
    item?
    <div style={{display:'flex', justifyContent:"space-between"}}>
        <div style={{display:'flex'}}>
        <Stack direction='horizontal' gap={2}>
            <img src={item.imgUrl} alt={""} style={{
                width:'125px',
                height:'75px',
                objectFit:'cover'
            }}/>
        </Stack>
         &nbsp;  &nbsp;
        <div >
            <p style={{margin:0}}>{item.name}</p>
            <p style={{margin:0,fontSize:'0.7rem'}}>qty: {quantity}</p>
            <p style={{margin:0,fontSize:'0.7rem'}}>{currencyFormat(item.price)}</p>
        </div>
        </div>
        <div>
            {currencyFormat(item.price * quantity)}
           
            &nbsp; <button 
                    onClick={()=>removeItem(item.id)}
                    style={{
                        border:'none',
                        borderRadius:'5px',
                        color:'black'
                    }}>&times;</button>
            
        </div>
    
    </div>:null
  )
}
