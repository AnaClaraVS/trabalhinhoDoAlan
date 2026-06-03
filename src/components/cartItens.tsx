import type {Iproduct} from "../context/StoreContext"

const CartItem = ({ product }: { product: Iproduct }) => {
    return (
        <div className="border m-7.5 p-3.75 flex flex-col md:flex-row">
            <img className="h-87.5" src={product.images?.[0]} alt={product.title} />
            <div className="flex w-full">
                <div className="flex flex-col items-start p-4 w-full">
                    <h2 className="mb-2">{product.title}</h2>
                    <div className="flex flex-col justify-end items-start h-full">
                        <h4>Tamanho:</h4>
                        <h4 className="mb-2">Cor: Já definido</h4>
                        <input className="w-10 border-2" type="number" id="Quantidade" name="Quantidade" placeholder="Quantidade" min={0} required
                        />
                    </div>
                </div>
                <div className="flex py-4 items-end">
                    <p className="text-4xl text-black font-semibold">R${(product.price).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;