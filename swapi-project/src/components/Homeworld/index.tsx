"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

interface HomeworldProps {
  planet: string;
}

export default function Homeworld({ planet }: HomeworldProps) {
  const [planetName, setPlanetName] = useState("Not Listed");
  const [loading, setLoading] = useState(false);

  async function getPlanet() {
    const res = await axios.get(planet);
    
    setLoading(false);
    setPlanetName(res.data.name);
  }

  useEffect(() => {
    if (planet.length > 0) {
      setLoading(true);
      getPlanet();
    }
  }, []);

  return (
    <div>
      {loading && <span className="text-slate-100">Homeworld: ...</span>}
      {!loading && <span className="text-slate-100">Homeworld: {planetName}</span>}
    </div>
  );
}
