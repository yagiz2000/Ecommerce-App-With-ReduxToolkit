import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { changeQuantityOfProduct, removeProductFromCart, saveProductsToLocalStorage } from "../features/cart/cartSlice";
import "./styles/Cart.scss";
import { changeNavLinkIndex } from "../features/header/headerSlice";
const Cart = () => {
   
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changeNavLinkIndex(2))    
    },[]);

  const handleChangeInQuantity=(type,id)=>{
    dispatch(changeQuantityOfProduct({type,id}))
    dispatch(saveProductsToLocalStorage());
  }
  const handleRemoveEventInCart= (id)=>{
      dispatch(removeProductFromCart(id));
    dispatch(saveProductsToLocalStorage());
  }
  const calculateSubTotal = ()=>{
      let total=0;
      cartList.map((item)=>{
          let val = item.price.replaceAll(" ","")
          let val2 = val.replace("TL","");
          let val3 = val2.replace("tl","");
          let val4 = val3.replace(",","");
          let val5 = parseInt(val4.replace(".",""));
          total += val5*item.quantity;
        });
        let list = total.toString().split("");
        list.splice(list.length-2,0,",");
        let last = list.join("")+" TL";
        return last;
  }
  const subTotal = useMemo(()=>{
      return calculateSubTotal()
  },[cartList])
  return (
    <div className="cart-wrapper">
      {cartList.length===0 ? <h2>Your cart is empty</h2> : cartList.map((item) => {
        return (
          <div className="cart-item">
            <div className="item-rect">
              <div className="img-box">
                <img src={item.url} className="item-img"></img>
              </div>
              <div className="item-info">
                <div className="item-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="item-price">
                  <p>{item.price}</p>
                </div>
              </div>
              <div className="add-drop-box">
                <p>{item.quantity}</p>
                <button onClick={()=>handleChangeInQuantity("increment",item.id)} id="plusBtn">+</button>
                <button onClick={()=>handleChangeInQuantity("decrement",item.id)}>-</button>
              </div>
            </div>
            <div className="cancel-box">
              <i onClick={()=>handleRemoveEventInCart(item.id)} class="fas fa-times"></i>
            </div>
          </div>
        );
      })}
      { cartList.length===0? <div></div>:<div className="cost-box">
        <div className="back-button">
            <Link to="/products">Alışverişe dön</Link>
        </div>
        <div className="cost-detail">
            <h3>Subtotal</h3>
            <p>{subTotal}</p>
        </div>
      </div>}
    </div>
  );
};
export default Cart;
