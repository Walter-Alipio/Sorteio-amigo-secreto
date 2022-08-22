import { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import { useDraftResults } from '../state/hooks/useDraftResults';
import { useParticipantsList } from '../state/hooks/useParticipantsList';
import { Title } from './Configuration';

const Section = styled.section`
	font-size: 1.5625rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Select = styled.select`
	width: 100%;
	border-radius: 45px;
	height: 3rem;
	box-sizing: border-box;
	padding: 0 2rem;
	border: 2px solid black;
	box-shadow: 0px 2px 0px 1px #000;

	&:focus {
		outline: none;
	}

	@media (min-width: 800px) {
		height: 5.125rem;
		width: 100%;
	}
`;

const Button = styled.button`
	width: 13.75rem;
	margin: 2rem 0;
	height: 3rem;
	box-shadow: 2px 2px 0px 1px #000;
	border-radius: 45px;
	background-color: #fe652b;
	color: #fff;
	cursor: pointer;
	font-size: 1rem;

	display: flex;
	align-items: center;
	justify-content: space-around;

	&::before {
		content: '';
		display: inline-block;
		background-image: url('/imagens/casino.svg');
		background-position: center;
		background-repeat: no-repeat;
		width: 2.5rem;
		height: 2.5rem;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	&:hover {
		background-color: #4b69fd;
	}

	@media (min-width: 800px) {
		width: 21.875rem;
		height: 5rem;
		margin: 1rem 0;
		font-size: 1.625rem;
		justify-content: center;
		gap: 1.5rem;
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

const Paragraph = styled.p`
	font-weight: 200;
	margin: 2rem 0;
	text-align: center;
	font-size: 1.25rem;

	@media (min-width: 800px) {
		font-size: 1.5625rem;
	}
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
			setTimeout(() => {
				setSecretSanta('');
			}, 5000);
		}
	};

	return (
		<Card>
			<Section>
				<Title>Quem vai tirar o papelzinho?</Title>
				<Form onSubmit={draft}>
					<Select
						required
						name='participantOfTheTime'
						id='participantOfTheTime'
						placeholder='Selecione o seu nome'
						value={participantOfTheTime}
						onChange={event => setParticipantOfTheTime(event.target.value)}
					>
						<option>Selecione seu nome</option>
						{participants.map(participant => (
							<option key={participant}>{participant}</option>
						))}
					</Select>
					<Paragraph>
						Clique em em sortear para ver quem é seu amigo secreto!
					</Paragraph>
					<Button>Sortear!</Button>
				</Form>
				{secretSanta && <Paragraph role='alert'>{secretSanta}</Paragraph>}
				<Footer>
					<Image />
				</Footer>
			</Section>
		</Card>
	);
};

export default DrawNames;
