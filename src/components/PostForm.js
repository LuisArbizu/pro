import axios from "axios"

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const body = Object.fromEntries(formData.entries());

    if (body.title === '' || body.description === '') return alert('Llena el titulo y la descripcion');

    const res = await axios.post('http://localhost:5500/posts/create', { ...body, active: body.active === 'on' }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    console.log(res);
}