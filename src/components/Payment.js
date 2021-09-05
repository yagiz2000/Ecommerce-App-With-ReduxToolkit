import React from 'react';

let imgUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMakJ1GXEL3wmQARrK-6kbDz4WvjkH9VG5g&usqp=CAU"
function Payment() {

  return (
    <div className="payment-wrapper" style={{display:'flex',width:'100%',height:'500px'}}>
        <div className="input-section" style={{width:"50%"}}>
            <h3 style={{textAlign:'start',paddingLeft:'20px',fontSize:'30px',fontWeight:'bolder'}}>Check Out</h3>
            <div className="input-wrapper" style={{display:'flex',flexDirection:'column',paddingLeft:'20px'}}>
                <div className="card-input" style={{display:'flex',justifyContent:'start'}}>
                    <input style={{border:'2px solid #C2D7FB',height:'30px',borderRadius:'10px',width:'300px',outline:'none'}} type="text"/>
                </div>
                <div className="security-inputs" style={{display:'flex',width:'308px',marginTop:'30px'}}>
                    <input className="little-input" style={{marginRight:'12px'}} placeholder="Exp Date" type="text"></input>
                    <input className="little-input" placeholder="CVC" type="text"></input>
                </div>
                <div className="button" style={{width:'308px',marginTop:'30px'}}>
                    <button style={{cursor:'pointer',width:'100%',backgroundColor:'#6C98E3',color:'white',border:'none',height:'50px',borderRadius:'10px',fontSize:'20px'}}>Confirm Payment</button>
                </div>
            </div>
        </div>
        <div className="logo-section bg"  style={{width:"50%",backgroundColor:'transparent',display:'flex',justifyContent:'center',alignItems:'center',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>

        </div>
    </div>
  );
}

export default Payment;