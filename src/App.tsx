import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <h1 className="text-3xl text-indigo-300">Hello, GSAP!</h1>;
};

export default App;
