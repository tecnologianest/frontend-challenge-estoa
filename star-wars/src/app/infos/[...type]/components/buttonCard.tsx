'use client'
import {ComponentProps} from 'react'
import { useRouter } from 'next/navigation';

export type ButtonProps = ComponentProps<'button'> & {
    url: string
    tipo: string
}

export function ButtonCard({url, tipo, ...props}: ButtonProps) {
    const router = useRouter();

    function getPerson(url: string, tipo: string) {
        const match = url.match(/\/(\d+)\/$/);
      
        if (match) {
          const personId = match[1];
          const newPath = `/infos/detalhes/${tipo}/${personId}`;
          router.push(newPath);
        } else {
          throw new Error('URL inválida: ' + url);
        }
      }


    return (
        <button onClick={() => getPerson(url, tipo)} {...props} />
    )

}
