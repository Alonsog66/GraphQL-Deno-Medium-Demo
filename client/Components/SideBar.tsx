import React from 'https://dev.jspm.io/react@16.13.1';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h2: any;
      h5: any;
      p: any;
    }
  }
}

const Sidebar = (props: any) => {
  if (!Object.values(props.info).length)
    return <div id='sidebar-wrapper'>Select a Character!</div>;

  const { name, status, species, gender, location, origin } = props.info;

  return (
    <div id='sidebar-wrapper'>
      <h2>{name}</h2>
      <h5>- Status: {status} -</h5>

      <div>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
        <p>Current Location: {location.name}</p>
      </div>
    </div>
  );
};

export default Sidebar;
