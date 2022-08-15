import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAddParticipant } from '../../state/hooks/addParticipant';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';

const Group = styled.div`
	margin-bottom: 2rem;
`;
const Input = styled.input`
	display: block;
	border-radius: 45px;
	height: 5.125rem;
	width: 100%;
	box-sizing: border-box;
	padding-left: 2rem;
	font-size: 1.25rem;
	border: 2px solid black;
	box-shadow: 0px 2px 0px 1px #000;
	margin-bottom: 1.125rem;

	&:focus {
		outline: none;
	}

	@media (min-width: 800px) {
		display: inline-flexbox;
		border-top-left-radius: 45px;
		border-bottom-left-radius: 45px;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		width: 70%;
	}
`;

const Button = styled(Input)`
	width: 13.75rem;
	color: #000;
	box-shadow: 2px 2px 0px 1px #000;
	cursor: pointer;
	background-color: #c4c4c4;
	margin-top: 1rem;
	margin: 0 auto;

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	@media (min-width: 800px) {
		display: inline-flexbox;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		border-top-right-radius: 45px;
		border-bottom-right-radius: 45px;
		width: 30%;
	}
`;

const Message = styled.p`
	margin: 3rem 0;

	@media (min-width: 800px) {
		margin: 0;
	}
`;

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
			<Group>
				<Input
					ref={inputRef}
					type='text'
					placeholder='Insira os nomes dos participantes'
					onChange={event => setName(event.target.value)}
					value={name}
				/>
				<Button as={'button'} disabled={!name}>
					Adicionar
				</Button>
			</Group>
			{errorMessage && <Message role={'alert'}>{errorMessage}</Message>}
		</form>
	);
};

export default Form;
