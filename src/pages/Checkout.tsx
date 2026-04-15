const Checkout =({...props})=>{
    return <><div {...props}>Checkout
    <h2>Endereço:</h2>
    <form>
        <div className="m-3 block">
            <label htmlFor="cep">CEP:</label>
            <input type="number" id="cep" name="Nome" placeholder="CEP" min={0} required></input>
        </div>

        <div className="m-3 block">
            <label htmlFor="rua">Rua:</label>
            <input type="text" id="rua" name="Rua" placeholder="Rua" required></input>
        </div>

       <div className="m-3">
            <label htmlFor="numero">Número:</label>
            <input type="number" id="numero" name="numeroCasa" placeholder="Número" min={0} required></input>
       </div>

       <div className="">
            <label htmlFor="complemento">Complemento:</label>
            <input type="text" id="complemento" name="complemento" placeholder="Complemento" required></input>
       </div>
    </form></div></>
}
export default Checkout
