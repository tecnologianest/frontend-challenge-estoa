import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/components/people.sass'
import Waiting from "./Waiting";

function People() {
  const [data, setData] = useState<any>([])
  const [search, setSearch] = useState<string>('')


  const [waiting, setWaiting] = useState<boolean>(false)

  const navigate = useNavigate();

  const firstPage = async() => {
    setWaiting(true)

    const res = await fetch(`https://swapi.dev/api/people/?page=${1}`)
    const aux = await res.json()
    setWaiting(false)

    for (let i =0; i<aux.results.length; i+=1){
      const aux1 = [];
      for (let j =0; j<aux.results[i].species.length; j+=1){
        aux1.push(fetch(aux.results[i].species[j]).then((response)=> response.json()))

      }

      Promise.all(aux1).then((result)=>setData((prev:any)=>{
        let aux = prev.results;
        aux[i].species = result.map((specie:any)=> specie.name)

        return {...prev, results:aux}
      }))
    }

    setData(aux)
  }

  const changePage = async(e:any,direction:string) => {

    let auxUrl = "";
    if(direction=== "from" && data.previous){
      auxUrl = data.previous
    }else if(direction=== "to" && data.next){
      auxUrl = data.next
    }else if(direction=== "search"){
      const baseURL = "https://swapi.dev/api/people/?search="
      auxUrl = `${baseURL}${search}`
    }else{

      return
    }

    setWaiting(true)

    const res = await fetch(auxUrl)
    const aux = await res.json()

    for (let i =0; i<aux.results.length; i+=1){
      const aux1 = [];
      // console.log(aux.results[i])

      for (let j =0; j<aux.results[i].species.length; j+=1){
        aux1.push(fetch(aux.results[i].species[j]).then((response)=> response.json()))
      }
      Promise.all(aux1).then((result)=>setData((prev:any)=>{
        let aux = prev.results;
        aux[i].species = result.map((specie:any)=> specie.name)

        return {...prev, results:aux}
      }))

    }


    setWaiting(false)


    setData(aux)

  }

  useEffect(()=> {
    firstPage()
  },[])


  if(waiting){
    return <Waiting/>

  }

  return <div>
    <div className="direction-button">
      <div className="direction-button">
        <input className="search-input" placeholder="nome" type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className="search-button" type="button" onClick={(e)=>changePage(e,"search")}>Procurar</button>

      </div>
      <div className="direction-button">
        <button className="direction-button" disabled={data.previous ? false: true} type="button" onClick={(e)=>changePage(e,"from")}>{"<"}</button>
        <button className="direction-button" disabled={data.next ? false: true} type="button" onClick={(e)=>changePage(e,"to")}>{">"}</button>
      </div>

    </div>
    <div className="container">
        <div className="container-cards">

        {data.results?.length>0 && data.results.map((person:any)=>(
          <button className="containers-buton-card" key={person.name} onClick={()=>navigate("people/"+person.name,{state:{person}})}>
            <div>
              <img className="img-card" src={`https://starwars-visualguide.com/assets/img/characters/${person.url.replace(/.+people\/([0-9]+).+/,(total:string, p1:string)=>p1)}.jpg`} alt={data.name}/>

              <h2 className="name" >{person.name}</h2>
              <div className="container-birth">
                <strong>Birth_Year:</strong>
                <p>{person.birth_year}</p>
              </div>

              <ul className="ul-species">
                <strong>Species:</strong>

                {person.species.length ===0 && <p>Unknown</p>}

                {person.species.map((specie:string)=>(
                  <li className="li-species" key={specie}>{specie}</li>
                ))}
              </ul>
                
            </div>
          </button>
        ))}
      </div>

    </div>
    
  </div>;
}

export default People;