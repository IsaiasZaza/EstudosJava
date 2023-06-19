const btnmodallan = document.querySelector('#modal-lan');
const btnocultarlan = document.querySelector('#ocultar-modal');
const contModal = document.querySelector('#conteiner-modal');

const nameinput = document.querySelector('#nome');
const depoisinput = document.querySelector('#depois');
const emailinput = document.querySelector('#email');
const dateinput = document.querySelector('#date');

btnmodallan.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.add('mostrar');
})

btnocultarlan.addEventListener('click', (e) =>{
    e.preventDefault();
    contModal.classList.remove('mostrar');
    const empleado = document.querySelector('#mdchefe');
    
    const pname = document.createElement('p');
    pname.textContent = nameinput.value;

    const pdepois = document.createElement('p');
    pdepois.textContent = depoisinput.value;

    const pemail = document.createElement('p');
    pemail.textContent = emailinput.value;

    const pdate = document.createElement('p');
    pdate.textContent = dateinput.value;

})