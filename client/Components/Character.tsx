import React from 'https://dev.jspm.io/react@16.13.1';
import { useObsidian } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
      h5: any;
      button: any;
      img: any;
    }
  }
}

const Book = (props: any) => {
  const { hunt } = useObsidian();
  const getCharInfo = (id: string) => {
    hunt(
      `query{
        character(id:"${id}"){
         name
         status
         species
         gender
         origin {
           name
         }
         location {
           name           
         }
       }
       }`,
      'https://rickandmortyapi.com/graphql'
    ).then((resp: any) => props.setInfo({ ...resp.data.character }));
  };

  return (
    <div className='card'>
      <h5>{props.name}</h5>
      <img src={props.image}></img>

      <button onClick={() => getCharInfo(props.id)}>Get more info</button>
    </div>
  );
};

export default Book;
