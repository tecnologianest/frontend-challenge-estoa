'use client'
import {ComponentProps} from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image';

export type ButtonProps = ComponentProps<'button'> 

export function ButtonBack({...props}: ButtonProps) {

    const {back} = useRouter()

    function backPage () {
        back()
    }

    return (
        <button onClick={() => backPage()}  {...props} >
            <Image
               src="/assets/back.svg"
               alt="Imagem Voltar"
               width={40}
               height={40}
            />   
        </button>
    )

}
