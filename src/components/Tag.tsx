import { LinkItem } from '../types';
interface Tags {
    tags: LinkItem[] | undefined
}

const Tag: React.FC<Tags> = ({ tags }) => {

    return (
        <div className='flex gap-6 justify-center items-center w-full flex-wrap'>
            {tags?.map((item) => (
                <a className='text-lg bg-[#DFDCD5] border-1 border-[#7D26C9] rounded-4xl py-2 px-10' key={item.id} href={item.link}>{item.titulo}</a>
            ))}
        </div>
    )
}

export default Tag
