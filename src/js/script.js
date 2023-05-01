const openPopUp = document.getElementById('open_pop_up');
const search = document.getElementById('pop_up_body');
const div = document.getElementById('pop_up_container');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

div.addEventListener('click', (e) => {
    const closePopUp = e.composedPath().includes(search);

    if (! closePopUp) {
        popUp.classList.remove('active');
        search.value = "";
    }
})