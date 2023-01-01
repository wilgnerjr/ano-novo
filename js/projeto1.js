const chk = document.getElementById('chk');
var h1 = document.getElementById('h1');

chk.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    h1.classList.toggle('mudanca')
})
