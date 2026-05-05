import { useState } from "react"

const pagamentos = {
    cartaoCredito: "Cartão de Crédito",
    pix: "PIX"
}

const documentos = {
    cpf: "CPF",
    cnpj: "CNPJ"
}

const Checkout =({...props})=>{
    const[documento, setDocumento] = useState(documentos.cpf)
    const[formadepagamento, setFormadePagamento] = useState(pagamentos.cartaoCredito)
    return <><div {...props}>Checkout
    <h2 className="text-3xl">Endereço:</h2>
        <form className="p-[12px] text-lg"> 
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
                <h2 className="text-3xl">Dados de Contato</h2>
        <form className="p-[12px] text-lg">
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
        <h2 className="text-3xl">Formas de Pagamento</h2>
        <div className="flex flex-col text-center m-3 transform: scale-113 p-[12px] text-lg">
            <div>
                <input type="radio" id="cartaoCredito" name="pagamento" value="cartaoCredito" required onChange={() => setFormadePagamento(pagamentos.cartaoCredito)}></input>
                <label htmlFor="cartaoCredito"> Cartão de Crédito</label><br></br>
            </div>
            {formadepagamento===pagamentos.cartaoCredito && (
                <div id="pagamentocredito" className="p-3">
                    <label htmlFor="cartaoCredito"> Numero Cartao </label><br></br>
                    <input type="number" id="numeroCartao" name="numeroCartao" placeholder=" Numero Cartão" min={0} required></input><br></br>

                    <label htmlFor="nomeCartao"> Nome no Cartão </label><br></br>
                    <input type="text" id="nomeCartao" name="nomeCartao" placeholder=" Nome no Cartão" required></input><br></br>

                    <label htmlFor="validadeCartao"> Validade </label><br></br>
                    <input type="month" id="validadeCartao" name="validadeCartao" required></input><br></br>     

                    <label htmlFor="cvvCartao"> CVV </label><br></br>
                    <input type="number" id="cvvCartao" name="cvvCartao" placeholder=" CVV" min={0} required></input><br></br>   
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
        <h2 className="text-5xl">Documento</h2>
        <div className="flex flex-col text-center m-3 transform: scale-113 p-[12px] text-lg">
            <div>
                <input type="radio" id="cpf" name="documento" value="cpf" required onChange={() => setDocumento(documentos.cpf)}></input>
                <label htmlFor="cpf"> CPF</label><br></br>
            </div>
            {documento === documentos.cpf && (
                <div>
                    <label htmlFor="numeroCpf"> Número do CPF </label>
                    <input type="number" id="numeroCpf" name="numeroCpf" placeholder=" Número do CPF" min={0} required></input>
                </div>
            )}
            <div>
                <input type="radio" id="cnpj" name="documento" value="cnpj" required onChange={() => setDocumento(documentos.cnpj)}></input>
                <label htmlFor="cnpj"> CNPJ </label><br></br>
            </div>
            {documento === documentos.cnpj && (
                <div>
                    <label htmlFor="numeroCnpj"> Número do CNPJ </label>
                    <input type="number" id="numeroCnpj" name="numeroCnpj" placeholder=" Número do CNPJ" min={0} required></input>
                </div>
            )}
        </div>
    </div>

    <div>
        <h2>Produto</h2> 
    </div>
    <div>
        <button type="submit" className="m-3 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Finalizar Compra</button>
        </div>   
    </div></>
}
export default Checkout
