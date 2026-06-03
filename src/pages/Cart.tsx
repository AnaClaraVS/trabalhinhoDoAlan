import useNavigation from "../hooks/useNavigation"
import { useStore } from "../hooks/useStore"
import CartItem from "../components/cartItens" 

const Cart =({...props}) => {
const {cart} = useStore()
    const {goToCheckout} = useNavigation()

    return (
        <div {...props}>
            <h2>Carrinho</h2>

            {cart.length>0 && cart.map((item)=>(
                <CartItem key={item.id} product={item} />
            )
        )}

           

               <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToCheckout}>
                Comprar Agora
                </button>

        </div>
    )
}

export default Cart