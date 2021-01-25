import Swal from 'sweetalert2';

export function genericError() {
	return Swal.fire(
		'Something went wrong',
		'Please try again in few minutes.<br/><br/> If the problem persist please contact to admin',
		'error',
	);
}