import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import '../styles/components/person.sass'
import Waiting from "./Waiting";

const Person = () => {
  const {state, pathname} = useLocation()
  const person = state?.person
  const [data, setData] = useState<any>(person)

  const [waiting, setWaiting] = useState<boolean>(false)

  const getData = async() => {
    const auxUrlsFilms = [];
    const auxUrlsSpecies = [];

    let auxPerson = person;

    setWaiting(true)

    if(!person){

      const baseURL = "https://swapi.dev/api/people/?search="
      const auxUrl = `${baseURL}${pathname.replace('/people/','')}`

      const res = await fetch(auxUrl);
      const rawData = await res.json();

      auxPerson = rawData.results[0]

      setData(auxPerson)
    }
    for (let i =0; i<auxPerson.films.length; i+=1){
      auxUrlsFilms.push(fetch(auxPerson.films[i]).then((response)=> response.json()))
    }
    for (let i =0; i<auxPerson.species.length; i+=1){
      auxUrlsSpecies.push(fetch(auxPerson.species[i]).then((response)=> response.json()))
    }

    fetch(auxPerson.homeworld).then((response)=> response.json()).then((result)=> setData((prev:any)=>({...prev, homeworld: result.name})))

    Promise.all(auxUrlsFilms).then((result)=>setData((prev:any)=>({...prev, films: result.map((film:any)=>film.title)})))
    Promise.all(auxUrlsSpecies).then((result)=>setData((prev:any)=>({...prev, species: result.map((specie:any)=>specie.name)})))

    setWaiting(false)
    
  }

  useEffect(()=>{
    getData()
    
  },[])

  if(waiting){
    return<p>Waiting</p>
  }

  if(!data){
    return<Waiting/>
  }
  

  return <div >

    <div className="container-person">

      <img className="img" src={`https://starwars-visualguide.com/assets/img/characters/${data.url.replace(/.+\/([0-9]+).+/,(total:string, p1:string)=>p1)}.jpg`} alt={data.name}/>

      <div className="container-card">
        <h1>{data.name}</h1>

        <div className="card-data">
          <strong>Birth Year:</strong>
          <p>{data.birth_year}</p>
          
        </div>

        <div className="card-data">
        <strong>Eye Color:</strong>
        <p>{data.eye_color}</p>

          
        </div>
        <div className="card-data">
          <strong>Gender:</strong>
          <p>{data.gender}</p>

          
        </div>
        <div className="card-data">
          <strong>Hair Color:</strong>
          <p>{data.hair_color}</p>

          
        </div>
        <div className="card-data">
          <strong>Height:</strong>
          <p>{data.height}</p>
          
        </div>
        <div className="card-data">
          <strong>Mass:</strong>
          <p>{data.mass}</p>
          
        </div>
        <div className="card-data">
          <strong>Skin Color:</strong>
          <p>{data.skin_color}</p>
          
        </div>
        <div className="card-data">
          <strong>Homeworld:</strong>
          <p>{data.homeworld}</p>
          
        </div>
        <div className="card-data">
          <strong>Films:</strong>
          <p>
            {data.films.map((film:string, i:number, arr:string[])=>(
              <span key={film}>{i!==arr.length -1?film+", ":film} </span>
            ))}
          </p>
          
        </div>
        <div className="card-data">
          <strong>Species:</strong>
          {data.species.length ===0 && <p>Unknown</p>}
          <p>
            {data.species.map((specie:string, i:number, arr:string[])=>(
              <span key={specie}>{i!==arr.length -1?specie+", ":specie}, </span>
            ))}
          </p>
          
        </div>
      </div>

    </div>

  </div>;
}

export default Person;