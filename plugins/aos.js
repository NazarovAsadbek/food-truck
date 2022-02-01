import AOS from "aos";
import "aos/dist/aos.css";
export default ({ app }) => {
  app.AOS = new AOS.init({
    offset: 300,
    initClassName: 'aos-init',
    delay: 300, 
  }); // or any other options you need
};

