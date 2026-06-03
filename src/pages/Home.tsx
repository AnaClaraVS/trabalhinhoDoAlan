
import useNavigation from "../hooks/useNavigation";
import { useStore } from "../hooks/useStore";

const Home =({...props})=>{
    const {goToProduct} = useNavigation()
    const { products, loading,  } = useStore();
    if(loading)return<div>Loading</div>
    return(
        <div {...props} className="flex flex-col  items-center gap-4 content-center ">

            <img className='pt-5' src='https://i.postimg.cc/QMtSTX2Z/2106.png'></img>

          <div className="flex flex-wrap gap-4 justify-center">
              {products.length>0 && products.map((item)=>(

                <div key={item.id} className="w-40 border-2 border-[#81a6c6] p-2 cursor-pointer flex items-center flex-col content-items" onClick={()=>goToProduct(item.id.toString())}>
                   <img src={item.images[0]} alt={item.title} className="w-32 h-32 object-cover" />
                    <div className="flex flex-col content-end items-center gap-1">
                        <p className="font-[400]">{item.title}</p> 
                        <p className="font-[600] text-lg">R${item.price},00</p> 
                    </div>
                </div>





            )
        )}
       
        </div>
        </div>
    )
}
export default Home