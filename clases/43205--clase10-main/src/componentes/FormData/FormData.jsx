import { useState, useRef } from 'react';

const FormData = () => {
    const datosFormulario = useRef(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
    });

    const manejarCambio = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={manejarEnvio} ref={datosFormulario}>
            <label>
                Nombre:
                <input type="text" name="nombre" value={formData.nombre} onChange={manejarCambio} />
            </label>
            <label>
                Apellido:
                <input type="text" name="apellido" value={formData.apellido} onChange={manejarCambio} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={manejarCambio} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}
export default FormData;