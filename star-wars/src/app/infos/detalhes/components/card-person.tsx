import Films from '../../[...type]/models/filmes';
import People from '../../[...type]/models/people';

type Person = {
    dados: People
}

export default function CardPerson({dados}: Person) {

    return (
        <>
            <div className="lg:w-[380px] lg:p-5 p-5 card-detalhes rounded ">
                <p className="text-[#ECE4EF] lg:text-2xl text-lg font-bold uppercase text-space tracking-[2.56px] title-card-detalhes">
                    {dados.name}
                </p>
            
                <div className="flex flex-col gap-3 pt-3">

                    <div className='cursor-pointer' >
                        <span className="text-[#9C83A7] text-sm">Filmes</span>
                        {dados.newFilms?.map((filmes: Films) => (
                            <p key={filmes.title} className="text-sm text-[#D8CEDE] font-bold">
                                {filmes.title}
                            </p>
                        ))}

                    </div>

                    <div>
                        <span className="text-[#9C83A7] text-sm">Espécie</span>
                        <p className="text-sm text-[#D8CEDE] font-bold">
                            {dados.newSpecies.name}
                        </p>
                    </div>
                    
                    <div>
                        <span className="text-[#9C83A7] text-sm">Cor de pele</span>
                        <p className="text-sm text-[#D8CEDE] font-bold">
                            {dados.skin_color}
                        </p>
                    </div>
                
                    <div>
                        <span className="text-[#9C83A7] text-sm">Massa</span>
                        <p className="text-sm text-[#D8CEDE] font-bold">
                            {dados.mass}
                        </p>
                    </div>

                    <div>
                        <span className="text-[#9C83A7] text-sm">Altura</span>
                        <p className="text-sm text-[#D8CEDE] font-bold">
                            {dados.height}
                        </p>
                    </div>

                    <div>
                        <span className="text-[#9C83A7] text-sm">Cor de cabelo</span>
                        <p className="text-sm text-[#D8CEDE] font-bold">
                            {dados.hair_color}
                        </p>
                    </div>
                
                    <div>
                        <span className="text-[#9C83A7] text-sm">Gênero</span>
                        <p className="text-sm text-[#D8CEDE] font-bold">
                            {dados.gender}
                        </p>
                    </div>

                    <div>
                        <span className="text-[#9C83A7] text-sm">Cor do olho</span>
                        <p className="text-sm text-[#D8CEDE] font-bold">
                            {dados.eye_color}
                        </p>
                    </div>

                    <div>
                        <span className="text-[#9C83A7] text-sm">Ano de nascimento</span>
                        <p className="text-sm text-[#D8CEDE] font-bold">
                            {dados.birth_year}
                        </p>
                    </div>
                
                </div>

            </div>
            
        </>
    )
}