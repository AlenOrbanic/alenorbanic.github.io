let unosi = [];
const noviunos = (ev)=>{
    let unos = {
        id: Date.now(),
        ime: document.getElementById('ime').value,
        email: document.getElementById('email').value,
        broj: document.getElementById('mobitel').value,
        tekst: document.getElementById('tekst').value,
    }
    unosi.push(unos);

    //Spremi upisane informacije u local storage
    localStorage.setItem('Spremljene poruke', JSON.stringify(unosi) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', noviunos);
});