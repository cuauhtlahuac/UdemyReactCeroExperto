import Swal from 'sweetalert2';

export const loadFile = async file => {
	const cloudUrl = 'https://api.cloudinary.com/v1_1/dv6yj5sf8/upload';
	const formData = new FormData();

	formData.append('upload_preset', 'React-Journal');
	formData.append('file', file);

	try {
		const resp = await fetch(cloudUrl, {
			method: 'POST',
			body: formData,
		});

		if (resp.ok) {
			const cloudResp = await resp.json();

			return cloudResp.secure_url;
		} else {
			const cloudResp = await resp.json();

			Swal.close();
			Swal.fire({
				titleText: 'Upload Image Error',
				icon: 'error',
				text: `${cloudResp}`,
				footer: 'We are sorry',
			});
			throw cloudResp;
		}
	} catch (err) {
		Swal.close();
		Swal.fire({
			titleText: 'Upload Image Error',
			icon: 'error',
			text: `${err}`,
			footer: 'Please check your connection',
		});
		throw err;
	}
};
