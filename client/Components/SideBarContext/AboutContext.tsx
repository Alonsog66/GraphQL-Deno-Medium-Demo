import { React } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
      button: any;
      hr: any;
    }
  }
}


const AboutContext = (props: any) => {
  const { user } = props;
  return (
  <div>
    <hr/>
    <div>
      <p className='user-info'>{ user.info }</p>
    </div>
    <hr/>
    <div className="social-button">
      <a href={ user.linkedin } className="fab fa-linkedin fa-5x" target="_blank"></a>
      <a href={ user.github } className="fab fa-github fa-5x" target="_blank"></a>
    </div>
    <hr/>
  </div>
  )
}

export default AboutContext;
