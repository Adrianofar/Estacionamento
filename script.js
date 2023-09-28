const form = document.querySelector('#formulario')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const json = {};

    for (const [key, value] of formData.entries()) {
        json[key] = value;
    }

    alert('Cadastro realizado com sucesso!')

    console.log(json);

    form.reset();
})