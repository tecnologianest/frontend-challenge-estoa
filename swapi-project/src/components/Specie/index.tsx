"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

interface SpecieProps {
  specie: string;
}

export default function Specie({ specie }: SpecieProps) {
  const [specieName, setSpecieName] = useState("Not Listed");
  const [loading, setLoading] = useState(false)

  async function getSpecie() {
    const res = await axios.get(specie);
    setLoading(false)
    setSpecieName(res.data.name);
  }

  useEffect(() => {
    if (specie.length > 0) {
      setLoading(true)
      getSpecie();
    }
  }, []);

  return (
    <div>
      {loading && <span className="text-slate-100">Especie: ...</span>}
      {!loading && <span className="text-slate-100">Especie: {specieName}</span>}
    </div>
    );
}
