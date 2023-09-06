import React from 'react'

interface CharacterInfoProps {
    text: string,
    info: string | number | undefined;
}

export default function CharacterInfo({text, info}: CharacterInfoProps) {
  return (
    <span className='text-slate-100'>{text}: {info}</span>
  )
}
