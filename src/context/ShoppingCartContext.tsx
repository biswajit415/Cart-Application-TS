import { createContext,ReactNode,useState,useEffect } from "react";
import { ShoppingCart } from "../components/ShoppingCart";


type ShoppingCartProviderProps={
    children:ReactNode
}
type ShoppingCartContextType={
    openCart:()=>void
    closeCart: () => void
    getItemQty:(id: number)=>number
    increaseItemQty:(id: number)=>void
    decreaseItemQty:(id: number)=>void
    removeItem:(id: number)=>void
    cartQuantity:number
    cartItems:CartItemType[]
    isOpen:boolean
}
type CartItemType ={
    id:number
    quantity:number
}
export const ShoppingCartContext=createContext({} as ShoppingCartContextType )



export function ShoppingCartProvider({children}:ShoppingCartProviderProps){

    const [cartItems,setCartItems]=useState<CartItemType[]>([])
    const [cartQty,setCartQty]=useState<number>(0)
    const [isOpen,setIsOpen]=useState<boolean>(false)

    useEffect(()=>{
        const qty=cartItems.reduce((prev,curr)=>{
           return prev=curr.quantity+prev;
        },0)
        setCartQty(qty);
    },[cartItems])

    const openCart=()=>setIsOpen(true);
    const closeCart=()=>setIsOpen(false);


    const getItemQty=(id:number)=>{
        const x=cartItems.find(item=>item.id===id)?.quantity ||0;
        console.log(x);
        return x
    }
    const increaseItemQty=(id:number)=>{
        
       
        setCartItems((currItems)=>{
        
            if(currItems.find(item=>item.id===id)==null){
                return [...currItems,{id,quantity:1}]
            }else{
               
                
                let x=currItems.map(item=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity+1}
                    }else{
                        return item;
                    }
                })
                console.log(currItems)
                return x;
            }
        })
    }
    const decreaseItemQty=(id:number)=>{

        setCartItems((currItems)=>{
            if(currItems.find(item=>item.id===id)?.quantity===1){
                return currItems.filter(item=>item.id!==id)
            }else{
                return  currItems.map(item=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity-1}
                    }else{
                        return item;
                    }
                })
            }
        })
    }
    const removeItem=(id:number)=>{
        setCartItems((items)=>{
            return items.filter(item=>item.id!==id)
        })
    }

    


    return (
        <ShoppingCartContext.Provider value={{
            getItemQty,
            removeItem,
            increaseItemQty,
            decreaseItemQty,
            cartQuantity:cartQty,
            openCart,
            closeCart,
            cartItems,
            isOpen
            }}>
            {children}
            <ShoppingCart/>
        </ShoppingCartContext.Provider>
    )
}