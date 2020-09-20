import React from 'https://dev.jspm.io/react@16.13.1';
import Sidebar from './Sidebar.tsx';
import Carousel from './Carousel.tsx';
import { useObsidian } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h1: any;
      div: any;
    }
  }
}

const GET_CHARACTERS = `
query{
  characters(page:1){
   results
   {
     id
     name
     image
   }
 }
 }
`;

const MainPage = () => {
  const [info, setInfo] = (React as any).useState({});
  const [characters, setCharacters] = (React as any).useState([]);

  const { gather } = useObsidian();

  (React as any).useEffect(() => {
    gather(GET_CHARACTERS, {
      endpoint: 'https://rickandmortyapi.com/graphql',
      destructure: false,
    }).then((resp: any) => setCharacters([...resp.data.characters.results]));
  }, []);

  return (
    <div id='main-container'>
      <h1>Rick and Morty Character Guide</h1>
      <div id='app-container'>
        <Sidebar info={info} />
        <Carousel characters={characters} setInfo={setInfo} />
      </div>
    </div>
  );
};

export default MainPage;
