import React from 'https://dev.jspm.io/react@16.13.1';
import Character from './Character.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
    }
  }
}

const Carousel = (props: any) => {
  const characters = props.characters.map(
    (character: { id: string; name: string; image: string }) => {
      return (
        <Character
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          setInfo={props.setInfo}
        />
      );
    }
  );

  return <div id='carousel'>{characters}</div>;
};

export default Carousel;
