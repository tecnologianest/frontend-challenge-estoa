'use client'
import { store } from "@/app/store"
import {useEffect,useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { actions } from "@/app/store/details/details-slice";
import { tipo } from "../../[...type]/models/tipo";


interface Date {
  title: string;
  description: string;
  url?: string;
}

export function ModalCard() {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [localState, setLocalState] = useState(store.getState().modalDetailsReducer);
    const [dados, setDados] = useState<Date[]>([]);


    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
          const updatedState: any = store.getState().modalDetailsReducer;
          if(updatedState.date.length > 0  || updatedState.date.url ) {
            setLocalState(updatedState);
              setDados(infos(updatedState.type, updatedState.date))
              onOpen();
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const closeModal = () => {
        const clear = {
          type: '',
          date: []
        }
        store.dispatch(actions.clearModal(clear))
        onClose();
    }

    
    function infos(type: string, data: any): Date[] {
      let dados = [];
      switch (type) {
        case tipo.NAVES:
          dados = data.map((element: any) => {
            return [
              {
                title: "Nome",
                description: element.name
              },
              {
                title: "Modelo",
                description: element.model
              },
              {
                title: "Classe de nave",
                description: element.starship_class ? element.starship_class : element.vehicle_class
              },
  
            ]
          });
        break;

        case tipo.PLANETA:

        dados = data.map((element: any) => {
          return [
            {
              title: "Nome",
              description: element.name
            },
  
            {
              title: "Terreno",
              description: element.terrain
            },
  
            {
              title: "População",
              description: element.population
            },
  
            {
              title: "Clima",
              description: element.climate
            },
          ]
        });
        break;

    
        case tipo.PERSONAGEM:

          dados = data.map((element: any) => {
            return [
              {
                title: "Nome",
                description: element.name
              },
              {
                title: "Nascimento",
                description: element.birth_year
              },
              {
                title: "Altura",
                description: element.height 
              },
              {
                title: "Genero",
                description: element.gender 
              },
  
            ]
          });


        break;
      
      
        case tipo.FILMES:

          dados = data.map((element: any) => {
              return [
                {
                  title: "Título",
                  description: element.title
                },

                {
                  title: "Sinopse",
                  description: element.opening_crawl
                },

                {
                  title: "Diretor",
                  description: element.director
                },

                {
                  title: "Produtor",
                  description: element.producer
                },

              ]
          });

        break;
      }

      return dados
    }

    return (
        <Modal backdrop='blur' isOpen={isOpen} onClose={closeModal}>
          <ModalContent>

            <ModalHeader>
              <p  className="text-[#323232] lg:text-2xl text-lg font-bold uppercase text-space tracking-[2.56px] title-modal-detalhes flex flex-col gap-1">
                {localState.type}
              </p> 
            </ModalHeader>


            <ModalBody>

            <div className="overflow-y-auto lg:h-full lg:max-h-[500px]">
              {
                  dados.map((date: any, i) => (
                    <div key={i} className="py-4 border-black border-t-2 border-b-2">

                      {date.map((info: any, index: number) => (
                        <div key={index}>
                          <span className="text-[#464048] text-sm">{info.title}</span>
                          <p className="text-sm text-[#2a212f] font-bold">
                              {info.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))
                }
            </div>


            </ModalBody>


            <ModalFooter>
                  <Button color="primary" onPress={closeModal}>
                    Pronto
                  </Button>
            </ModalFooter>

          </ModalContent>
        </Modal>
    );

}