import React from "react";
import ReactDOM from "react-dom";
import styles from "./ContactForm.module.css";

const Backdrop = ({ onClose }) => {
	return <div className={styles.backdrop} onClick={onClose} />;
};

const FormOverlay = ({ onClose }) => {
	function onSubmitHandler(e) {
		e.preventDefault();

		const formData = new FormData(e.target);

		formData.append("fullName", e.target.elements.fullName.value);
		formData.append("email", e.target.elements.email.value);
		formData.append("message", e.target.elements.message.value);

		const dataObject = Object.fromEntries(formData);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: { "form-name": "contact", ...dataObject },
		})
			.then(() => alert("Mesajınız iletilmiştir!"))
			.catch(error => alert(error));

		e.target.reset();
		onClose();
	}

	return (
		<form
			className={styles.form}
			onSubmit={onSubmitHandler}
			name='contact'
			id='contact'
			method='POST'
			autoComplete='on'
			netlify
		>
			<div className={styles.formGroup}>
				<label htmlFor='fullName'>Name/Surname</label>
				<input
					required
					type='text'
					className={styles.formControl}
					id='fullName'
					name='fullName'
					placeholder=''
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor='email'>Email</label>
				<input
					required
					type='email'
					className={styles.formControl}
					id='email'
					name='email'
					placeholder=''
				/>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor='message'>Your Message</label>
				<textarea
					required
					className={styles.formControl}
					id='message'
					name='message'
					rows='5'
				></textarea>
			</div>

			<input type='hidden' name='form-name' value='contact' />
			<div data-netlify-recaptcha='true'></div>

			<div className={styles.btnContainer}>
				<button type='submit' className={`${styles.btn} ${styles.primary}`}>
					Send Message
				</button>
				<button
					type='submit'
					className={`${styles.btn} ${styles.secondary}`}
					onClick={onClose}
				>
					Cancel
				</button>
			</div>
		</form>
	);
};

const ContactForm = ({ onClose }) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={onClose} />,
				document.getElementById("backdrop")
			)}
			{ReactDOM.createPortal(
				<FormOverlay onClose={onClose} />,
				document.getElementById("form")
			)}
		</React.Fragment>
	);
};

export default ContactForm;
