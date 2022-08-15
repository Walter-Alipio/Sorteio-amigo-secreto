import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';

const FooterGroup = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 800px) {
		flex-direction: row;
	}
`;

const Button = styled.button`
	width: 13.75rem;
	margin: 2rem 0;
	height: 5rem;
	font-size: 1.25rem;
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
		margin: 0;
	}
`;
const ImgBags = styled.img.attrs({
	src: '/imagens/sacolas.png',
	alt: 'Sacolas de compras',
})`
	margin-top: 32px;

	@media (min-width: 800px) {
		margin: 0;
	}
`;

const Footer = () => {
	const participants = useParticipantsList();
	const navigate = useNavigate();
	const start = () => {
		navigate('/sorteio');
	};
	return (
		<FooterGroup>
			<Button disabled={participants.length < 3} onClick={start}>
				Iniciar brincadeira
			</Button>
			<ImgBags />
		</FooterGroup>
	);
};

export default Footer;
