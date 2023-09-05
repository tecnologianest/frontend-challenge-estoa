'use client'
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


interface SpecieProps {
    specie: string
}

export default function Specie({specie}: SpecieProps) {
  const [specieName, setSpecieName] = useState('possibly human');
  
    async function getSpecie() {
    const res = await axios.get(specie);
    setSpecieName(res.data.name)
    
  }
  
    useEffect(() => {
    if (specie.length > 0) {
        getSpecie();
    }
  }, [])
  
    return (
    <div>Specie: {specieName}</div>
  )
}
