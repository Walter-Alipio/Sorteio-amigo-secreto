import { useRef, useState } from 'react';
import { useAddParticipant } from '../../state/hooks/addParticipant';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';

const Form = () => {
	const [name, setName] = useState('');

	const inputRef = useRef<HTMLInputElement>(null);

	const addToList = useAddParticipant();

	const errorMessage = useErrorMessage();

	const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addToList(name);
		setName('');
		inputRef.current?.focus();
	};
	return (
		<form onSubmit={addParticipant}>
			<input
				ref={inputRef}
				type='text'
				placeholder='Insira os nomes dos participantes'
				onChange={event => setName(event.target.value)}
				value={name}
			/>
			<button disabled={!name}>Adicionar</button>
			{errorMessage && <p role={'alert'}>{errorMessage}</p>}
		</form>
	);
};

export default Form;
