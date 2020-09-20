import { React, ObsidianWrapper } from '../deps.ts';

import MainComponent from './Components/MainComponent.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const App = () => {
  return (
    <ObsidianWrapper>
      <MainComponent />
    </ObsidianWrapper>
  );
};

export default App;
