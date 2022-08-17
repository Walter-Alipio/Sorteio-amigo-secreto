import styled from 'styled-components';

const HeaderPage = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 3.7rem;

	@media (min-width: 800px) {
		padding-top: 7rem;
		flex-direction: row;
		justify-content: space-around;
	}
`;

const ImageLogo = styled.div`
	background-image: url('../../imagens/logo-pequeno.png');
	background-repeat: no-repeat;
	background-size: contain;
	object-fit: fill;
	background-position: center;
	width: 11.625rem;
	height: 9.85rem;
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
	height: 9.875rem;
	width: 20.5rme;
	box-sizing: border-box;
	margin-bottom: 0.75rem;

	@media (min-width: 800px) {
		width: 28.125rem;
		height: 17.3125rem;
		margin: 0;
	}
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
