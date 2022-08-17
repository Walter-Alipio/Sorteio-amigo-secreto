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
	width: 11.625rem;
	height: 12.4375rem;
	border: none;

	@media (min-width: 800px) {
		width: 21.9375rem;
		height: 7.3125rem;
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
