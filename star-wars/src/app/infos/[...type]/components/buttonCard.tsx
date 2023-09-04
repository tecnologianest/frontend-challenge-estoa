'use client'
import {ComponentProps} from 'react'
import { useRouter } from 'next/navigation';

export type ButtonProps = ComponentProps<'button'> & {
    url: string
    tipo: string
}

export function ButtonCard({url, tipo, ...props}: ButtonProps) {
    const router = useRouter();

    function getPerson() {
        const match: any = url.match(/\/(\d+)\/$/);
        router.push(`/infos/detalhes/${tipo}/${match[1]}`);
    }


    return (
        <button onClick={() => getPerson()} {...props} />
    )

}
