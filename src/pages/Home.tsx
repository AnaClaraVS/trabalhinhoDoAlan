
import useNavigation from "../hooks/useNavigation";
import { useStore } from "../hooks/useStore";

const Home =({...props})=>{
    const {goToCart, goToCheckout, goToProduct} = useNavigation()
    const {  loading,  } = useStore();
    if(loading)return<div>Loading</div>
    return(
        <div {...props} className="flex flex-col">

            <button className="cursor-pointer" onClick={goToCart}>Carrinho</button>
            <button className="cursor-pointer" onClick={goToCheckout}>Checkout</button>
            <button className="cursor-pointer" onClick={()=>goToProduct('1')}>Produtos</button>
        </div>
    )
}
export default Home