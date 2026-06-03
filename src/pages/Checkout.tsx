import { useState } from "react"
import {useStore} from "../hooks/useStore"


const pagamentos = {
    cartaoCredito: "Cartão de Crédito",
    pix: "PIX"
}

const documentos = {
    cpf: "CPF",
    cnpj: "CNPJ"
}

const Checkout =({...props})=>{
    const {cart} = useStore()
    const[documento, setDocumento] = useState()
    const[formadepagamento, setFormadePagamento] = useState()

   

    function calcularTotal(){
        let total = 0
        cart.forEach((item) => {
            total += item.price 
        })
        return total
    }
    return <><div {...props}>Checkout
<div className="md:flex flex-row lg:flex-row">
    <div className="border rounded-lg border-gray-700 m-10 p-3 md:w-1/2 lg:w-1/2">
        <h2 className="text-3xl">Endereço:</h2>
            <form className="p-[12px] text-lg"> 
                <div className="m-3 block">
                    <label htmlFor="cep">CEP:</label><br></br>
                    <input type="number" id="cep" name="Nome" placeholder=" CEP" min={0} required className="bg-gray-100"></input>
                </div>

                <div className="m-3 block ">
                    <label htmlFor="rua">Rua:</label><br></br>
                    <input type="text" id="rua" name="Rua" placeholder=" Rua" required className="bg-gray-100"></input>
                </div>

                <div className="m-3">
                    <label htmlFor="numero">Número:</label><br></br>
                    <input type="number" id="numero" name="numeroCasa" placeholder=" Número" min={0} required className="bg-gray-100"></input>
                </div>

                <div className="m-3">
                    <label htmlFor="complemento">Complemento:</label><br></br>
                    <input type="text" id="complemento" name="complemento" placeholder=" Complemento" required className="bg-gray-100"></input>
                </div>
            </form>
    </div>        
        <div className="flex flex-col rounded-lg text-center border border-gray-700 m-10 p-3 gap-3 md:w-1/2 h-1/2 lg:w-1/2 h-1/2 flex">    
                    <h2 className="text-3xl">Dados de Contato</h2>
            <form className="p-[12px] text-lg">
                <div>
                    <label htmlFor="nome">Nome:</label><br></br>
                    <input type="text" id="nome" name="nome" placeholder=" Nome" required className="bg-gray-100"></input>
                </div>

                <div>
                    <label htmlFor="numeroCelular">Número de Celular:</label><br></br>
                    <input type="number" id="numeroCelular" name="numeroCelular" placeholder=" Número de Celular" min={0} required className="bg-gray-100"></input>
                </div>          
            </form>
    </div>
</div>
    <div className="border rounded-lg border-gray-700 m-10 p-3">
        <h2 className="text-3xl">Formas de Pagamento</h2>
        <div className="flex flex-col text-center m-3 transform: scale-113 p-[12px] text-lg">
            <div>
                <input type="radio" id="cartaoCredito" name="pagamento" value="cartaoCredito" required onChange={() => setFormadePagamento(pagamentos.cartaoCredito)}></input>
                <label htmlFor="cartaoCredito"> Cartão de Crédito</label><br></br>
            </div>
            {formadepagamento===pagamentos.cartaoCredito && (
                <div className="p-3 text-lg">
                    <label htmlFor="cartaoCredito"> Numero Cartao </label><br></br>
                    <input type="number" id="numeroCartao" name="numeroCartao" placeholder=" Numero Cartão" min={0} required className="bg-gray-100"></input><br></br>

                    <label htmlFor="nomeCartao"> Nome no Cartão </label><br></br>
                    <input type="text" id="nomeCartao" name="nomeCartao" placeholder=" Nome no Cartão" required className="bg-gray-100"></input><br></br>

                    <label htmlFor="validadeCartao"> Validade </label><br></br>
                    <input type="month" id="validadeCartao" name="validadeCartao" required className="bg-gray-100"></input><br></br>     

                    <label htmlFor="cvvCartao"> CVV </label><br></br>
                    <input type="number" id="cvvCartao" name="cvvCartao" placeholder=" CVV" min={0} required className="bg-gray-100"></input><br></br>   
                </div>
                )}
            <div>
                <input type="radio" id="pix" name="pagamento" value="pix" required onChange={() => setFormadePagamento(pagamentos.pix)}></input>
                <label htmlFor="pix"> PIX </label><br></br>
            </div>
            {formadepagamento===pagamentos.pix && (
                <div className="p-3 text-lg">
                    <label htmlFor="chavePix"> Chave PIX </label>
                    <input type="text" id="chavePix" name="chavePix" placeholder=" Chave PIX" required className="bg-gray-100"></input>
                </div>
                )}   
        </div>  
    </div>

    <div className="border rounded-lg border-gray-700 m-10 p-3">
        <h2 className="text-5xl">Documento</h2>
        <div className="flex flex-col text-center m-3 transform: scale-113 p-[12px] text-lg">
            <div>
                <input type="radio" id="cpf" name="documento" value="cpf" required onChange={() => setDocumento(documentos.cpf)}></input>
                <label htmlFor="cpf"> CPF</label><br></br>
            </div>
            {documento === documentos.cpf && (
                <div className="p-3 text-lg">
                    <label htmlFor="numeroCpf"> Número do CPF </label>
                    <input type="number" id="numeroCpf" name="numeroCpf" placeholder=" Número do CPF" min={0} required className="bg-gray-100"></input>
                </div>
            )}
            <div>
                <input type="radio" id="cnpj" name="documento" value="cnpj" required onChange={() => setDocumento(documentos.cnpj)}></input>
                <label htmlFor="cnpj"> CNPJ </label><br></br>
            </div>
            {documento === documentos.cnpj && (
                <div className="p-3 text-lg">
                    <label htmlFor="numeroCnpj"> Número do CNPJ </label>
                    <input type="number" id="numeroCnpj" name="numeroCnpj" placeholder=" Número do CNPJ" min={0} required className="bg-gray-100"></input>
                </div>
            )}
        </div>
    </div>
    {cart.map((item, indice) => (
        <div className="border rounded-lg border-gray-700 m-10 p-3 text-center" key={indice}>
            <h2>Produto</h2>
            <div className="md:flex">
                <img className="md:w-55" src={item.images[0]} alt={item.title}></img>
                    <div className="md:flex w-full">
                        <div className="md:flex flex-col items-start p-4 w-full">
                            <h2 className="mb-2">Nome: {item.title}</h2>
                        </div>
                        <div className="md:flex py-4 items-end itens-left">
                            <p className="text-xl text-black font-semibold">Preço: R$ {item.price.toFixed(2)}</p>
                        </div>
                    </div>
            </div>
        </div>
    ))
    }
    
    <div>
        <p className="text-2xl text-black font-semibold">Total: R$ {calcularTotal().toFixed(2)}</p>
    </div>
    <div>
        <button type="submit" className="m-3 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer">Finalizar Compra</button>
        </div>   
    </div></>
}
export default Checkout
