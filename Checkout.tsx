import { useState } from "react"

const pagamentos = {
    cartaoCredito: "Cartão de Crédito",
    pix: "PIX"
}

const Checkout =({...props})=>{
    const[formadepagamento, setFormadePagamento] = useState(pagamentos.cartaoCredito)
    return <><div {...props}>Checkout
    <h2>Endereço:</h2>
        <form>
            <div className="m-3 block">
                <label htmlFor="cep">CEP:</label><br></br>
                <input type="number" id="cep" name="Nome" placeholder=" CEP" min={0} required></input>
            </div>

            <div className="m-3 block">
                <label htmlFor="rua">Rua:</label><br></br>
                <input type="text" id="rua" name="Rua" placeholder=" Rua" required></input>
            </div>

            <div className="m-3">
                <label htmlFor="numero">Número:</label><br></br>
                <input type="number" id="numero" name="numeroCasa" placeholder=" Número" min={0} required></input>
            </div>

            <div className="m-3">
                <label htmlFor="complemento">Complemento:</label><br></br>
                <input type="text" id="complemento" name="complemento" placeholder=" Complemento" required></input>
            </div>
        </form>
    <div className="flex flex-col text-center m-3">    
                <h2>Dados de Contato</h2>
        <form>
            <div>
                <label htmlFor="nome">Nome:</label><br></br>
                <input type="text" id="nome" name="nome" placeholder=" Nome" required></input>
            </div>

            <div>
                <label htmlFor="numeroCelular">Número de Celular:</label><br></br>
                <input type="number" id="numeroCelular" name="numeroCelular" placeholder=" Número de Celular" min={0} required></input>
            </div>          
        </form>
    </div>

    <div>
        <h2>Formas de Pagamento</h2>
        <div className="flex flex-col text-center m-3">
            <div>
                <input type="radio" id="cartaoCredito" name="pagamento" value="cartaoCredito" required onChange={() => setFormadePagamento(pagamentos.cartaoCredito)}></input>
                <label htmlFor="cartaoCredito"> Cartão de Crédito</label><br></br>
            </div>
            {formadepagamento===pagamentos.cartaoCredito && (
                <div id="pagamentocredito">
                    <label htmlFor="cartaoCredito"> Numero Cartao </label>
                    <input type="number" id="numeroCartao" name="numeroCartao" placeholder=" Numero Cartão" min={0} required></input>

                    <label htmlFor="nomeCartao"> Nome no Cartão </label>
                    <input type="text" id="nomeCartao" name="nomeCartao" placeholder=" Nome no Cartão" required></input>

                    <label htmlFor="validadeCartao"> Validade </label>
                    <input type="month" id="validadeCartao" name="validadeCartao" required></input>     

                    <label htmlFor="cvvCartao"> CVV </label>
                    <input type="number" id="cvvCartao" name="cvvCartao" placeholder=" CVV" min={0} required></input>    
                </div>
                )}
            <div>
                <input type="radio" id="pix" name="pagamento" value="pix" required onChange={() => setFormadePagamento(pagamentos.pix)}></input>
                <label htmlFor="pix"> PIX </label><br></br>
            </div>
            {formadepagamento===pagamentos.pix && (
                <div id="pagamentopix">
                    <label htmlFor="chavePix"> Chave PIX </label>
                    <input type="text" id="chavePix" name="chavePix" placeholder=" Chave PIX" required></input>
                </div>
                )}   
        </div>  
    </div>

    <div>
        <h2>Documento</h2>
        <div className="flex flex-col text-center m-3">
            <div>
                <input type="radio" id="cpf" name="documento" value="cpf" required></input>
                <label htmlFor="cpf"> CPF</label><br></br>
            </div>
            <div>
                <input type="radio" id="cnpj" name="documento" value="cnpj" required></input>
                <label htmlFor="cnpj"> CNPJ </label><br></br>
            </div>   
        </div>
    </div>

    <button>Finalizar Compra</button>   
    </div></>
}
export default Checkout
