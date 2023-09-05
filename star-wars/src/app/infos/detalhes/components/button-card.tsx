'use client'
import {ComponentProps} from 'react'
import { Tipos } from '../../[...type]/models/tipo'
import { store } from '@/app/store'
import { actions } from '@/app/store/details/details-slice'

export type ButtonProps = ComponentProps<'button'>  & {
    type: Tipos
    date: any
}  

export function ButtonCard({type, date , ...props}: ButtonProps) {

    function openModal () {
        const values = { type, date }
        store.dispatch(actions.addInfoModal(values))
    }

    return (
        <button onClick={() => openModal()}  {...props} />
    )

}
