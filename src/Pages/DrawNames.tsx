import { useState } from 'react';
import styled from 'styled-components';
import { useDraftResults } from '../state/hooks/useDraftResults';
import { useParticipantsList } from '../state/hooks/useParticipantsList';

const Section = styled.section`
	font-size: 1.5625rem;
`;

const Select = styled.select`
	width: 100%;
	border-radius: 45px;
	height: 5.125rem;
	box-sizing: border-box;
	padding: 0 2rem;
	border: 2px solid black;
	box-shadow: 0px 2px 0px 1px #000;

	&:focus {
		outline: none;
	}

	@media (min-width: 800px) {
		width: 70%;
	}
`;

const Button = styled.button`
	width: 13.75rem;
	margin: 2rem 0;
	height: 5rem;
	box-shadow: 2px 2px 0px 1px #000;
	border-radius: 45px;
	background-color: #fe652b;
	color: #fff;
	cursor: pointer;

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	&:hover {
		background-color: #4b69fd;
	}

	@media (min-width: 800px) {
		width: 21.875rem;
		margin: 1rem 0;
	}
`;

const Footer = styled.footer`
	margin: 64px 0;
`;

const Image = styled.img.attrs({
	src: '/imagens/aviao.png',
	alt: 'Um desenho de um avião de papel',
})`
	color: #fe652bfc;
`;

const Alert = styled.p`
	font-weight: 200;
	margin: 2rem 0;
`;

const DrawNames = () => {
	const [participantOfTheTime, setParticipantOfTheTime] = useState('');
	const [secretSanta, setSecretSanta] = useState('');

	const participants = useParticipantsList();

	const result = useDraftResults();

	const draft = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (result.has(participantOfTheTime)) {
			setSecretSanta(result.get(participantOfTheTime)!);
		}
	};

	return (
		<Section>
			<form onSubmit={draft}>
				<Select
					required
					name='participantOfTheTime'
					id='participantOfTheTime'
					placeholder='Selecione o seu nome'
					value={participantOfTheTime}
					onChange={event => setParticipantOfTheTime(event.target.value)}
				>
					{participants.map(participant => (
						<option key={participant}>{participant}</option>
					))}
				</Select>
				<Button>Sortear</Button>
			</form>
			{secretSanta && <Alert role='alert'>{secretSanta}</Alert>}
			<Footer>
				<Image />
			</Footer>
		</Section>
	);
};

export default DrawNames;