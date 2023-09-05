'use client'
import {useRouter} from 'next/navigation'
import Image from 'next/image';


export function ButtonBack() {

    const {back} = useRouter()

    function backPage () {
        back()
    }

    return (
        <button type='button' onClick={() => backPage()}  >
            <Image
               src="/assets/back.svg"
               alt="Imagem Voltar"
               width={40}
               height={40}
            />   
        </button>
    )

}
