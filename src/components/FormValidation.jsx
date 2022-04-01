import React, { useState, useRef } from 'react';
import { dataPeserta, dataError } from './baseData';

const FormValidation = () => {
	const [data, setData] = useState(dataPeserta);
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const namaRegex = /^[A-Za-z ]*$/;
	const noHpRegex = /^[0-9]{9,14}/;
	const [errMs, setErrMs] = useState(dataError);
	const foto = useRef(null);

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === 'nama') {
			if (namaRegex.test(value)) {
				setErrMs({ nama: '' });
			} else {
				setErrMs({ nama: 'Nama lengkap harus berupa huruf' });
			}
		}

		if (name === 'email') {
			if (emailRegex.test(value)) {
				setErrMs({ email: '' });
			} else {
				setErrMs({ email: 'Email Tidak Valid!' });
			}
		}

		if (name === 'noHandphone') {
			if (noHpRegex.test(value)) {
				setErrMs({ noHandphone: '' });
			} else {
				setErrMs({ noHandphone: 'No Handphone Tidak Valid!' });
			}
		}

		setData({
			...data,
			[name]: value,
		});

		console.log(errMs);
		console.log('data: ', data);
	};

	// errMs.noHandphone !== ''

	const handleSubmit = (event) => {
		if (errMs.nama !== '' && errMs.email !== '' && errMs.noHandphone !== '') {
			alert('data gagal');
		} else {
			alert('data berhasil');
		}
		event.preventDefault();
	};

	const handleReset = () => {
		setData(dataPeserta), setErrMs('');
	};

	return (
		<div>
			<div className="py-6">
				<h1 className="text-3xl font-semibold text-center font-sans">
					Pendaftaran Peserta Coding Bootcamp
				</h1>
			</div>
			<div className="w-[50%] m-auto">
				<form
					onSubmit={handleSubmit}
					className="border block p-6 rounded-3xl mb-20"
				>
					<label className="text-lg font-medium">Nama Lengkap:</label>
					<br />
					<input
						className="w-[60%] rounded-xl mt-2 mb-2"
						placeholder="Nama Lengkap"
						required
						type="text"
						name="nama"
						value={data.nama}
						onChange={handleInput}
					/>{' '}
					<p> {errMs.nama}</p>
					<br />
					<label className="text-lg font-medium">Email:</label>
					<br />
					<input
						className="w-[60%] rounded-xl mt-2 mb-2"
						placeholder="Email"
						required
						type="email"
						name="email"
						value={data.email}
						onChange={handleInput}
					/>
					<p> {errMs.email}</p>
					<br />
					<label className="text-lg font-medium">No Handphone:</label>
					<br />
					<input
						className="w-[60%] rounded-xl mt-2 mb-2"
						required
						type="number"
						name="noHandphone"
						value={data.noHandphone}
						onChange={handleInput}
					/>
					<p> {errMs.noHandphone}</p>
					<br />
					<label className="text-lg font-medium">
						Latar Belakang Pendidikan:
					</label>
					<br />
					<input
						className="form-radio text-green-600"
						type="radio"
						value="IT"
						name="pendidikan"
						onChange={handleInput}
					/>
					<label className="text-lg font-medium ml-2 mr-3">IT</label>
					<input
						className="form-radio text-green-600"
						type="radio"
						value="Non IT"
						name="pendidikan"
						onChange={handleInput}
					/>
					<label className="text-lg font-medium ml-2">Non IT</label>
					<br />
					<label className="text-lg font-medium">
						Kelas Coding yang Dipilih:
					</label>
					<br />
					<select
						className="form-select py-3 rounded-xl m-2 mb-3"
						required
						name="kelas"
						value={data.kelas}
						onChange={handleInput}
					>
						<option value="Coding Backend with Golang">
							Coding Backend with Golang
						</option>
						<option value="Coding Frontend with ReactJs">
							Coding Frontend with ReactJs
						</option>
						<option value="Fullstack Developer">Fullstack Developer</option>
					</select>
					<br />
					<label className="text-lg font-medium">Foto Surat Kesungguhan:</label>
					<br />
					<input type="file" required ref={foto} className="form-input mb-3" />
					<br />
					<label className="text-lg font-medium">
						Harapan Untuk Coding Bootcamp ini:
					</label>
					<br />
					<textarea
						className="form-textarea rounded-md mt-2 "
						name="harapan"
						cols="40"
						rows="4"
						value={data.harapan}
						onChange={handleInput}
					></textarea>
					<br />
					<button
						type="submit"
						className="text-lg font-medium py-2 px-16 border bg-indigo-700 text-white rounded-lg"
					>
						Submit
					</button>
					<button
						type="reset"
						onClick={handleReset}
						className="text-lg font-medium py-2 px-16 border bg-red-600 text-white rounded-lg ml-4"
					>
						Reset
					</button>
				</form>
			</div>
		</div>
	);
};

export default FormValidation;
