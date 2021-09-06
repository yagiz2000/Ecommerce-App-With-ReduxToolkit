import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import "./styles/Payment.scss";
import {addProductToDatabase} from "../features/products/productsSlice";
function Payment() {
  let [productTitle,setProductTitle] = useState("");
  let [productPrice,setProductPrice] = useState("");
  let [productUrl,setProductUrl] = useState("");
  let dispatch = useDispatch();
  const setInputsEmpty = ()=>{
      setProductPrice("");
      setProductTitle("");
      setProductUrl("");
  }
  const handleSubmit = ()=>{
    dispatch(addProductToDatabase({title:productTitle,url:productUrl,price:productPrice}));
    setInputsEmpty();
  }
  return (
    <div className="payment-wrapper" style={{display:'flex',width:'100%',height:'500px'}}>
        <div className="input-section" style={{width:"50%"}}>
            <h3 style={{textAlign:'start',paddingLeft:'20px',fontSize:'30px',fontWeight:'bolder'}}>Add Product</h3>
            <div className="input-wrapper" style={{display:'flex',flexDirection:'column',paddingLeft:'20px'}}>
                <div className="card-input" style={{display:'flex',justifyContent:'start',width:'450px'}}>
                    <input value={productUrl} onChange={(e)=>(setProductUrl(e.target.value))} placeholder="Image url of product (get url from hepsiburada)"  style={{border:'2px solid #C2D7FB',fontSize:'15px',height:'45px',paddingLeft:'10px',borderRadius:'10px',width:'100%',outline:'none'}} type="text"/>
                </div>
                <div className="security-inputs" style={{display:'flex',width:'450px',marginTop:'30px',justifyContent:'space-between'}}>
                    <input className="little-input"  value={productTitle} onChange={(e)=>setProductTitle(e.target.value)} style={{marginRight:'12px',width:'200px',height:'45px',fontSize:'15px',paddingLeft:'10px'}} placeholder="Product Name" type="text"></input>
                    <input className="little-input" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} style={{height:'45px',width:'200px',fontSize:'15px',paddingLeft:'10px'}} placeholder="Price (with penny)" type="text"></input>
                </div>
                <div  style={{width:'308px',marginTop:'30px'}}>
                    <button onClick={()=>handleSubmit()} className="button">Add Product</button>
                </div>
            </div>
        </div>
        <div className="logo-section bg"  style={{width:"50%",backgroundColor:'transparent',display:'flex',justifyContent:'center',alignItems:'center',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>

        </div>
    </div>
  );
}

export default Payment;