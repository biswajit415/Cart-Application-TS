import React,{useContext} from 'react'
import {Offcanvas,Stack} from 'react-bootstrap'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
import { currencyFormat } from '../util/currencyFormat'
import { CartItem } from './CartItem'
import storeItems from '../data/items.json';


export const ShoppingCart:React.FC = () => {

  const {isOpen,closeCart,cartItems}=useContext(ShoppingCartContext)
  return (
    <Offcanvas show={isOpen} onHide={closeCart}  placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
            <Stack>
                {
                  cartItems.map(item=><CartItem key={item.id} {...item}/>)
                }
            </Stack>
            <br/>
            <div style={{display:'flex',justifyContent:'center'}}>
              Total : {currencyFormat(cartItems.reduce((prev,curr)=>{
                const data =storeItems.find(i=>i.id===curr.id)
                 return prev=prev+((data?.price||0)*curr.quantity)
              },0))}
            </div>
           
        </Offcanvas.Body>
    </Offcanvas>
  )
}
