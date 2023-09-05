'use client'
import Image from 'next/image'

import { useRouter } from 'next/navigation';

export type Options = {
    img: string;
    alt: string;
    title: string;
    id: number;
    tipo: string;
}

interface LinksProps {
    linksProps: Options[];
}
export default function Links( { linksProps }: LinksProps) {

    const router = useRouter();


    function navigate(tipo: string) { 
        router.push(`/infos/${tipo}/1`);
    }

    return (

        <section className='body-home flex flex-wrap items-center justify-evenly'>
        {linksProps.map((filme: Options) => (
        <div key={filme.id} className="w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 flex items-center justify-center card">
            <button onClick={() => navigate(filme.tipo)} className="flex flex-col gap-3 p-4 hover:border-t-2 hover:border-b-2 text-center">
            <Image
                src={filme.img}
                alt={filme.alt}
                width={80}
                height={80}
                className="m-auto"
            />
            <p className="text-lg lg:text-4xl font-bold text-shadow">{filme.title}</p>
            </button>
        </div>
        ))}
        </section>
    )
}
