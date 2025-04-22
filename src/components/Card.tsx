import { CardItem } from '../types';
interface Cards {
    cards: CardItem[] | undefined

    btn: boolean;
}

const Card: React.FC<Cards> = ({ cards, btn }) => {

    return (
        <div className='flex gap-x-6'>
            {
                cards?.map((item) => (
                    <div key={item.id} className="bg-[#FCFCFD] pt-1.5 pb-4 rounded-lg flex flex-col justify-center items-center">
                        {item.imgCard && (
                            <img className='h-44 pb-2 w-full px-1.5' src={item.imgCard} alt="img card" />
                        )}
                        <div className='px-3'>
                            <h3 className='text-2xl font-semibold pb-2'>{item.tituloCard}</h3>
                            <p className='text-xl'>{item.textCard}</p>
                        </div>
                        {btn && (
                            <button className='bg-[#DFBBFE] py-2 px-10 mt-6 mb-2 rounded-xs'>Lorem ipsum</button>
                        )}
                    </div>
                ))
            }
        </div>
    );
};

export default Card;