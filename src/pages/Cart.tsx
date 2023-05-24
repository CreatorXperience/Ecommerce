import React, { useEffect,useState} from 'react'
import ItemCard from '../components/ItemCard'
import { forCartItem} from '../type'


const Cart = ({item}:forCartItem)=>{
    const [cartItem, setCartItem]= useState(item)
    
    useEffect(()=> {
        let item =   localStorage.getItem('cart')
    
            setCartItem(JSON.parse(item as string))
        
      },[])
    

    useEffect(()=> {
        
localStorage.setItem('cart',JSON.stringify(cartItem))
        
    })

   
        let eachItem;
        for(let i= 0; i < cartItem.length; i++){
            if(cartItem[i] === item[i]){
                break;
            }
           eachItem = cartItem.map((item)=> {
                return   <ItemCard />
             })
        }
           
     
 
return (
    <div> 
   {eachItem}
    </div>
   
)
}

export default Cart