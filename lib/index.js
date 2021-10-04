"use strict";

var _fslightbox = _interopRequireDefault(require("fslightbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};
/* import { suma, saludos } from './operaciones';
import Swal from 'sweetalert2'

document.write(`<h1>${suma(1,2)}</h1>`)

console.log(suma(1, 2));
console.log(saludos);

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */

/*if (result.isConfirmed) {
  Swal.fire('Saved!', '', 'success')
} else if (result.isDenied) {
  Swal.fire('Changes are not saved', '', 'info')
}
}) */

/* import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */