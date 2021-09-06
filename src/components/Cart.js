import "./styles/Cart.scss";
const Cart = ()=>{
    return(
        <div className="cart-wrapper">
            <div className="cart-item">
                <div className="item-rect">
                    <div className="img-box">
                        <img src="https://productimages.hepsiburada.net/s/83/400-592/110000025426454.jpg" className="item-img">

                        </img>
                    </div>
                    <div className="item-info">
                        <div className="item-title">
                            <h3>Galaxy A7</h3>
                        </div>
                        <div className="item-price">
                            <p>1500 TL</p>
                        </div>
                    </div>
                    <div className="add-drop-box">
                        <p>2</p>
                        <button id="plusBtn">+</button>
                        <button>-</button>
                    </div>

                </div>
                <div className="cancel-box">
                <i class="fas fa-times"></i>
                </div>
            </div>
            <div className="cart-item">
                <div className="item-rect">
                    <div className="img-box">
                        <img src="https://productimages.hepsiburada.net/s/83/400-592/110000025426454.jpg" className="item-img">

                        </img>
                    </div>
                    <div className="item-info">
                        <div className="item-title">
                            <h3>Galaxy A7</h3>
                        </div>
                        <div className="item-price">
                            <p>1500 TL</p>
                        </div>
                    </div>
                    <div className="add-drop-box">
                        <p>2</p>
                        <button id="plusBtn">+</button>
                        <button>-</button>
                    </div>

                </div>
                <div className="cancel-box">
                <i class="fas fa-times"></i>
                </div>
            </div>
        </div>
    )
}
export default Cart;