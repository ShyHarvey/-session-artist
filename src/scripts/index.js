// import '../../node_modules/bootstrap/js/dist/dropdown';
// import '../../node_modules/bootstrap/js/dist/collapse';
// import '../../node_modules/bootstrap/js/dist/tab';

import Collapse from '../../node_modules/bootstrap/js/dist/collapse'

import Swiper, {FreeMode} from 'swiper';


const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
        spaceBetween: 30,
        FreeMode:true,
  });
  



// import { Collapse } from '../../node_modules/bootstrap/dist/js/bootstrap.esm'

// Array.from(document.querySelectorAll('.collapse'))
//   .forEach(collapseNode => new Collapse(collapseNode))
