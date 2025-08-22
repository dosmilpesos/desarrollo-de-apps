document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const agregarBtn = document.getElementById('AgregarBtn');
    const lista = document.getElementById('lista');

    agregarBtn.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return;

    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
    
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => {
    lista.removeChild(li);
    });
    li.appendChild(eliminarBtn);

    input.value = '';
    input.focus();
    });
});