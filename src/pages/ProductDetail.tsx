import { useParams } from "react-router-dom"
import { useStore } from "../hooks/useStore"
import { useEffect, useState } from "react"
import { type Iproduct } from "../context/StoreContext"


const ProductDetail = ({ ...props }) => {

    const {id} = useParams()
    const { getProductById } = useStore()
    const [product,setProduct] = useState<Iproduct>()
    const loadProduct= async ()=>{
        if(id){
            const response = await getProductById(parseInt(id)) 
            if(response){     
                setProduct(response)
            }
        }
    }
    useEffect(()=>{     
        loadProduct()
    },[])


    return (<div {...props}>
        


        <section className='flex flex-col pt-20 pb-25 md:flex-row sm:max-w-full sm:pb-5 items-center md:items-start bg-[#f2eae1]'>     {/*TUDO (menos avaliação)*/}
            <section className='flex flex-col'>         {/* Esquerda */}
                <div className="imgPrincipal">
                    <img className='h-auto
                    md:h-130 md:pr-25 md:pl-25 max-w-170' src={product? product.images[0]:''}></img></div>
                <section className='flex flex-col items-start pb-25'>
                    <p className='pt-20 pl-5 text-3xl font-[400] pb-5'> Característica do Produto</p>
                    <p className='font-[600] pl-3 text-xl font-[300]'> Descrição:</p>
                    <p className='pl-3 max-w-150 text-left'> {product? product.description:''} </p>
                </section>
            </section>

            <section className='flex flex-col justify-items-start w-75 text-left'>          {/* Direita */}
                <section className="pb-6 border-2 border-[#e3dad1] rounded-lg mb-10">
                    <div className='items-start'>
                        <p className='text-3xl  pb-2 font-[600] p-3'> {product? product.title:''} </p>
                        <div className='flex items-center gap-5'>
                            <p className='text-blue-500  text-xl pl-3'>★★★★★</p>
                            <p> 4.9 (1000 avaliações) </p>
                        </div>
                        <p className=' text-4xl font-[400] pt-5 pb-7 pl-3'> R${product? product.price:''},99</p>
                        <p className='pt-10 text-green-500 text-2xl font-[700] pl-3'>Frete Grátis</p>
                        <p className='text-green-500 text-lg font-[600] pl-3'> chegará entre .. e ..</p>
                        <p className='font-[400] pb-9 pl-3'> Por ser sua primeira compra </p>
                        <p className='font-[600] pl-3'> Cor: <span className='font-[400]'>Predefinida</span></p>
                        <div className='opcColor'>
                            <img className='h-15 w-15 md:h-15 border-[#2c5596] border-2 rounded-lg' src={product? product.images[0]:''}></img>
                        </div>
                        <div className='opcTamanho pt-5 pb-12 md:pb-20 pl-3'>
                            <p className='font-[600]'>Tamanho:</p>
                            <button className="border-[#2c5596] bg-#9db8e3 cursor-pointer focus:bg-[#81a6c6] focus:border-[#6789ab] focus:text-white-700 rounded-lg duration-300 ease-in border-3 focus:text-white w-9 h-9 m-1"> PP </button>
                            <button className="border-[#2c5596] bg-#9db8e3 cursor-pointer focus:bg-[#81a6c6] focus:border-[#6789ab] focus:text-white-700 rounded-lg duration-300 ease-in border-3 focus:text-white w-9 h-9 m-1">  P </button>
                            <button className="border-[#2c5596] bg-#9db8e3 cursor-pointer focus:bg-[#81a6c6] focus:border-[#6789ab] focus:text-white-700 rounded-lg duration-300 ease-in border-3 focus:text-white w-9 h-9 m-1"> M </button>
                            <button className="border-[#2c5596] bg-#9db8e3 cursor-pointer focus:bg-[#81a6c6] focus:border-[#6789ab] focus:text-white-700 rounded-lg duration-300 ease-in border-3  focus:text-white w-9 h-9 m-1"> G </button>
                            <button className="border-[#2c5596] bg-#9db8e3 cursor-pointer focus:bg-[#81a6c6] focus:border-[#6789ab] focus:text-white-700 rounded-lg duration-300 ease-in border-3 focus:text-white w-9 h-9 m-1"> GG </button>
                        </div>
                        <p className="font-[600] p-4">Estoque disponível <span className='text-green-500'> 2500+</span></p>
                        <div className='flex flex-col items-center'>
                            <button className='bg-[#aacddc] rounded-lg p-2 cursor-pointer font-[700] hover:bg-[#9bbfcf] text-white duration-300 ease-in w-60 h-12'> Comprar Agora </button><br></br>
                            <button className='bg-[#7b8ab3] rounded-lg p-2 cursor-pointer font-[700] hover:bg-[#6f7ea8] text-white duration-300 ease-in w-60 h-12'> Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </section>
                <div className="infoLoja pb-10 border-2 border-[#e3dad1] rounded-lg pl-3">
                    <p className="text-black text-lg font-[600]"> Formas de Pagamento</p>
                    <div className='flex flex-col items-start gap-2'>
                        <p> Pix:</p>
                        <img className="w-12 h-12" src="https://logospng.org/download/pix/logo-pix-icone-1024.png"></img>
                        <p> Cartões de Crédito:</p>
                        <img className="w-15 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/3840px-Elo_card_association_logo_-_black_text.svg.png"></img>
                        <img className="w-15 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg/3840px-Visa_Inc._logo_%282021%E2%80%93present%29.svg.png"></img>
                        <img className="w-12 h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/330px-Mastercard-logo.png"></img>
                    </div>
                </div>
            </section>
        </section>
        <section className="Reviews bg-[#f2eae1]">
                <h2> Avaliações</h2>
            <div className="Avaliações flex items-center justify-start gap-5 pb-10 flex-col md:flex-row flex ">
                <div className="avaliacao bg-[#fcf1e3] rounded-lg p-5 border-2 border-[#d2c4b4] w-80 flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&s"
                        className="h-15 rounded-full"></img>
                        <p className='text-blue-500  text-xl'>★★★★★</p>
                        <p> Muito bom! Identico a imagem</p>
                </div>
                <div className="avaliacao bg-[#fcf1e3] rounded-lg p-5 border-2 border-[#d2c4b4] w-80 flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&s"
                        className="h-15 rounded-full"></img>
                        <p className='text-blue-500  text-xl'>★★★★★</p>
                        <p> Chegou rápido e o produto é ótimo! </p>
                </div>
                <div className="avaliacao bg-[#fcf1e3] rounded-lg p-5 border-2 border-[#d2c4b4] w-80 flex ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&s"
                        className="h-15 rounded-full"></img>
                        <p className='text-blue-500  text-xl'>★★★★★</p>
                        <p> Produto de qualidade, super recomendo! </p>
                </div>
            </div>
        </section>


    </div>
    )
}
export default ProductDetail