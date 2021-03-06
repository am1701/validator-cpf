const btnConsultar = document.getElementById('btn-consultar');
const response = document.getElementById('response');
const alerta = document.getElementById('caixa-msg');



function validaCpf() {

	var cpf = document.getElementById('number-cpf');

	if (cpf.value.length !== 11 || cpf.value == '11111111111' || cpf.value == '22222222222' || cpf == '33333333333' ||
		cpf.value == '44444444444' || cpf.value == '55555555555' || cpf.value == '66666666666' ||
		cpf.value == '77777777777' || cpf.value == '88888888888' || cpf.value == '99999999999' || 
		cpf.value == '01234567890') {
		
		cpf.value = '';
		response.textContent = 'CPF invalido!'
		alerta.classList.remove('alert-success')
		alerta.style.display = 'block';
		cpf.focus();

	} 

		
	resultado = 0;


	for (x = 0, contador = 10; contador >1; x++, contador--) {
			
		resultado += parseInt(cpf.value[x]) * contador;		
	}


	digito_um = (resultado * 10) % 11
	

	resultado = 0;

	if (digito_um == parseInt(cpf.value[9])) {
			
	for (x = 0, contador=11; contador>1; x++,contador--) {
		resultado += parseInt(cpf.value[x]) * contador;
	}

	digito_dois = (resultado * 10) % 11;
			
	if (digito_dois == cpf.value[10]) {

		alerta.classList.remove('alert-danger');
		alerta.classList.add('alert-success');
			response.textContent = "CPF válido "+ cpf.value;
			alerta.style.display = 'block';
			cpf.value = '';
			cpf.focus()
				
	} else {
			
			alerta.style.display = 'block';
			response.textContent = 'CPF INVALIDO';
			cpf.value = '';
			cpf.focus();
		}
	}


}


btnConsultar.addEventListener('click', validaCpf);