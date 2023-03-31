function Cart({ cart, setCart }) {
  const initVal = 0;
  
  let totalPrice = cart.reduce((acc, currVal) => acc + currVal.qty * currVal.price, initVal);
  
  function interactCart(){
    document.getElementById('cart').classList.toggle('active')
  }

  function removeItemFromCart(product){
    setCart(cart.filter((p) => p.id !== product.id))
  }

  function editItemQty(e, product){
    if (e.target.innerText === '+') {
        setCart(
            cart.map((p) => {
                if (p.id === product.id) {
                    return {
                        ...p,
                        qty: p.qty + 1
                    }
                }
                else {
                    return p
                }
            })
        )
    }

    else {
        if (cart.filter((p) => p.id === product.id)[0].qty - 1 > 0) {
            setCart(
                cart.map((p) => {
                    if (p.id === product.id) {
                        return {
                            ...p,
                            qty: p.qty - 1
                        }
                    }
                    else {
                        return p
                    }
                })
            )
        }
        else {
            setCart(cart.filter((p) => p.id !== product.id))            
        }
    }
  }
  
  return (
    <div id="cart" className="cart fixed top-0 right-0 w-[25%] h-full bg-[white] p-5 z-10 overflow-y-scroll" style={ {backgroundColor: "#1A202C"} }>
        <div className="flex justify-between items-center mb-5 font-[SweetSansPro]">
            <p className="text-[32px]">Cart ({cart.length})</p>
            <i className="fa-solid fa-xmark text-[white] cursor-pointer" onClick={() => interactCart()}></i>
        </div>     

        {cart.map((product) => {
            return (
                <div key={product.id} className="py-4 border-t-[1px] border-white space-y-5">
                    <div className="flex space-x-8 items-center">
                        
                        <img src={product.imgPath} alt="" className="cart-item rounded-[20px] w-[40%]" />
                        
                        <div className="space-y-2 ">
                            <h3 className="text-white font-extrabold text-lg">{product.name} <p className="text-white font-light text-sm mt-0 pt-0">{product.category}</p></h3>
                            
                            <p className="text-white">Price: {product.price.toFixed(2)}</p>
                            <p className="text-white">Quantity:</p>
                            <div className="flex items-center space-x-4">
                                <button className="text-white px-3 py-1 bg-green-900 font-extrabold border-white border-[1px] rounded-lg" onClick={(e) => editItemQty(e, product)}>-</button>
                                <p className="text-white font-bold">{product.qty}</p>
                                <button className="text-white px-3 py-1 bg-green-900 font-extrabold border-white border-[1px] rounded-lg" onClick={(e) => editItemQty(e, product)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="border-[2px] rounded-full border-white text-white px-4 py-2 bg-red-500" onClick={() => removeItemFromCart(product)}><i className="fa-solid fa-trash text-white"></i></button>
                    </div>
                </div>                    
            )
        })}

        <div className="border-t-[2px] my-7 border-white flex justify-between">
            <p className="text-white text-[20px]">Total:</p>
            <p className="text-white text-[32px]">Php {totalPrice.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-center">
            <button className="w-[80%] py-2 text-white text-center border-[1px] border-[#0A4508] rounded-full bg-green-900" onClick={() => alert('Checkout Successful!')}>CHECKOUT</button>
        </div>
        
    </div>   
  )
}

export default Cart