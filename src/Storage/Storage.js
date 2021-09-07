class Storage{
    static getProductListFromLocalStorage(){
        let list;
        if(localStorage.getItem("cartList")===null){
            list = [];
        }
        else{
            list = JSON.parse(localStorage.getItem("cartList"));
        }
        return list;
    }
}
export default Storage;