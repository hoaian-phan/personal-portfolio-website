import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import $ from 'jquery'
import Popper from 'popper.js'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(<App />);

// Highlight the navLink when scrolling
document.getElementsByTagName('body')[0].onscroll = function () {
  const contentIds = ["#", "about", "experience", "skills", "portfolio", "testimonials", "contact"];
  const navIds = ["menu#", "menuAbout", "menuExperience", "menuSkills", "menuPortfolio", "menuTestimonials", "menuContact"];
  for (var i = navIds.length - 1; i >= 0; i--) {
    // get position of the content div compare to the top
    var pagePosition = document.getElementById(contentIds[i]).getBoundingClientRect().top;
    console.log(pagePosition);
    console.log("navIds[i]", navIds[i]);
    console.log("contentIds[i]", contentIds[i]);
    if (pagePosition < 200) {
      for (var j = navIds.length - 1; j >= 0; j--) {
        if (i === j)
          document.getElementById(navIds[j]).classList.add("active");
        else
          document.getElementById(navIds[j]).classList.remove("active");
      }
      return;
    }
  }
};