interface HomeCardsProps {
    item: {
        id: number;
        title: string;
        price: number;
        images: string[];
    };
}
const HomeCards = ({ item }: HomeCardsProps) => {
    return (
        <div key={item.id} className="w-30 p-2 cursor-pointer flex justify-center items-center flex-col ">
            <img src={item.images[0]} alt={item.title} className="w-32 h-32 object-cover" />
            <p className="font-[500] ">{item.title}</p>
            <p className='bg-[#4c698c] text-black p-2 rounded-lg font-[700]'>R${item.price},00</p>
        </div>
    );
};

export default HomeCards;