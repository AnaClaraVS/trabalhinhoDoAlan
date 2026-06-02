import useNavigation from "../hooks/useNavigation"
import { useStore } from "../hooks/useStore" 

const Cart =({...props}) => {
const {cart} = useStore()
    const {goToCheckout} = useNavigation()

    return (
        <div {...props}>
            <h2>Carrinho</h2>

            {cart.length>0 && cart.map((item)=>(

              <div className="border m-7.5 p-3.75 flex">
            <img className="h-87.5" src={item.images[0]} alt={item.title} />
            <div className="flex w-full">
                <div className="flex flex-col items-start p-4 w-full">
                    <h2 className="mb-2">{item.title}</h2>
                    <div className="flex flex-col justify-end items-start h-full">
                        <h4>Tamanho: Já definido</h4>
                        <h4 className="mb-2">Cor: Já definido</h4>
                        <input className="w-10 border-2" type="number" id="Quantidade" name="Quantidade" placeholder="Quantidade" min={0} required
                        />
                    </div>
                </div>
                <div className="flex py-4 items-end">
                    <p className="text-4xl text-black font-semibold">R${(item.price).toFixed(2)}</p>
                </div>
            </div>
        </div>

            )
        )}

           

               <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToCheckout}>
                Comprar Agora
                </button>

        </div>
    )
}

export default Cart