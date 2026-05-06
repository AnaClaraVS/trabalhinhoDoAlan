const Cart =({...props}) => {
    return (
        <div {...props}>
            <h2>Carrinho</h2>

            <div className="border m-7.5 p-3.75 flex">
                <img className="h-87.5" src="https://i.pinimg.com/1200x/a8/e8/f0/a8e8f06aa0bcd61601a27c9931dd885a.jpg" alt="Product Image" />
                
                <div className="flex w-full">
                    <div className="flex flex-col items-start p-4 w-full">
                        <h2 className="mb-2">kit de 4 bodys</h2>

                        <div className="flex flex-col justify-end items-start h-full">
                            <h4>Tamanho:</h4>
                            <h4 className="mb-2">Cor: Já definido</h4>
                            <input className="w-10 border-2" type="number" id="Quantidade" name="Quantidade" placeholder="Quantidade" min={0} required></input>
                        </div>
                    </div>
                    
                    <div className="flex py-4 items-end">
                        <p className="text-4xl text-black font-semibold">R$99,99</p>
                    </div>
                </div>
            </div>



            <div className="border m-7.5 p-3.75 flex">
                <img className =" w-65.5" src="https://i.pinimg.com/1200x/3a/5d/a1/3a5da18b74c90873a901852e2363e61b.jpg" alt="Product Image" />
                
                <div className="flex w-full">
                    <div className="flex flex-col items-start p-4 w-full">
                        <h2 className="mb-2">kit de 7 moletons</h2>

                        <div className="flex flex-col justify-end items-start h-full">
                            <h4>Tamanho:</h4>
                            <h4 className="mb-2">Cor: Já definido</h4>
                            <input className="w-10 border-2" type="number" id="Quantidade" name="Quantidade" placeholder="Quantidade" min={0} required></input>
                        </div>
                    </div>
                    
                    <div className="flex py-4 items-end">
                        <p className="text-4xl text-black font-[600]">R$249,99</p>
                    </div>
                </div>
            </div>
            
            <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ir para Checkout
            </button>
            
        </div>
    )
}

export default Cart