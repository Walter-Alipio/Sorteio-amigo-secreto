import styled from 'styled-components';

const HeaderPage = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding-top: 60px;

	@media (min-width: 800px) {
		padding-top: 120px;
		flex-direction: row;
	}
`;

const ImageLogo = styled.div`
	background-image: url('../../imagens/logo-pequeno.png');
	background-repeat: no-repeat;
	background-size: contain;
	object-fit: fill;
	background-position: center;
	width: 235px;
	height: 199px;
	border: none;

	@media (min-width: 800px) {
		width: 351;
		height: 117;
		background-image: url('../../imagens/logo.png');
	}
`;

const ImageParticipant = styled.img.attrs({
	src: '/imagens/participante.png',
	alt: 'Participante com um presente na mão',
})`
	z-index: 1;
`;

const Header = () => {
	return (
		<HeaderPage>
			<ImageLogo aria-label='Logo do Sorteador' />
			<ImageParticipant />
		</HeaderPage>
	);
};

export default Header;
