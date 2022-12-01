import React, {useState} from 'react';

const Formulario = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputTelefono, cambiarInputTelefono] = useState('');
	 const [inputCorreo, cambiarInputCorreo] = useState('');
	 const [inputEmpresa, cambiarInputEmpresa] = useState('');
	const [inputCalle, cambiarInputCalle] = useState('');
	const [inputNumero, cambiarInputNumero] = useState('');
	const [inputColonia, cambiarInputColonia] = useState('');
	const [InputMunicipio, cambiarInputMunicipio] = useState('');
	const [InputCp, cambiarInputCp] = useState('');
	const [InputEstado, cambiarInputEstado] = useState('');
	const [InputPuntos, cambiarInputPuntos] = useState('');
	

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputTelefono = (e) => {
		cambiarInputTelefono(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputEmpresa = (e) => {
		cambiarInputEmpresa(e.target.value);
	}

	const handleInputCalle = (e) => {
		cambiarInputCalle(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputNumero = (e) => {
		cambiarInputNumero(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputColonia = (e) => {
		cambiarInputColonia(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputMunicipio = (e) => {
		cambiarInputMunicipio(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCp = (e) => {
		cambiarInputCp(e.target.value);
	}

	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputEstado = (e) => {
		cambiarInputEstado(e.target.value);
	}
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputPuntos = (e) => {
		cambiarInputPuntos(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
				<div class="title">INFORMACIÓN PARA EL CERTIFICADO DE CALIBRACIÓN </div>
				<br/>
					<label htmlFor="nombre">Nombre:</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre y Apellido"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
				<div>
					<label htmlFor="telefono">Teléfono con lada: </label>
					<input
						type="text"
						name="telefono"
						placeholder="Ejemplo: +52 811-327-0560. La lada de México es +52" 
						id="telefono"
						value={inputTelefono}
						onChange={handleInputTelefono}
					/>
				</div>

				<div>
					<label htmlFor="correo">Correo electronico: </label>
					<input
						type="text"
						name="correo"
						placeholder="micorreo@gmail.com"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>
				<div>
					<label htmlFor="empresa">Empresa o razón social:</label>
					<input
						type="text"
						name="empresa"
						placeholder="Ingrese el Nombre de su empresa o razón social"
						id="empresa"
						value={inputEmpresa}
						onChange={handleInputEmpresa}
					/>
				</div>
				<h2>Dirección: </h2>
				<br/>
				<div>
					<label htmlFor="calle">Calle:</label>
					<input
						type="text"
						name="calle"
						placeholder="Ingrese la calle de la dirección de su empresa"
						id="calle"
						value={inputCalle}
						onChange={handleInputCalle}
					/>
				</div>
				<div>
					<label htmlFor="numero">Número:</label>
					<input
						type="text"
						name="numero"
						placeholder="Ingrese el número de su dirección de empresa, ejemplo: #327"
						id="numero"
						value={inputNumero}
						onChange={handleInputNumero}
					/>
				</div>
				<div>
					<label htmlFor="colonia">Colonia:</label>
					<input
						type="text"
						name="colonia"
						placeholder="Ingrese la colonia de su empresa"
						id="colonia"
						value={inputColonia}
						onChange={handleInputColonia}
					/>
				</div>
				<div>
					<label htmlFor="municipio">Municipio:</label>
					<input
						type="text"
						name="municipio"
						placeholder="Ingrese el municipio de su empresa"
						id="municipio"
						value={InputMunicipio}
						onChange={handleInputMunicipio}
					/>
				</div>
				<div>
					<label htmlFor="cp">Código Postal:</label>
					<input
						type="text"
						name="cp"
						placeholder="Ingrese el código postal de su empresa"
						id="cp"
						value={InputCp}
						onChange={handleInputCp}
					/>
				</div>
				<div>
					<label htmlFor="estado">Estado:</label>
					<input
						type="text"
						name="estado"
						placeholder="Ingrese el Estado de la ubicación dónde se encuentra su empresa"
						id="cp"
						value={InputEstado}
						onChange={handleInputEstado}
					/>
				</div>
				<h2>Información de los instrumentos a calibrar: </h2>
				<br/>
				<p><textarea name="comentario" rows="5" cols="50">Escribe aquí tu comentario: </textarea></p>
				
				<button type="submit">Enviar</button>
			</form>
		</>
	);
}
 
export default Formulario;
