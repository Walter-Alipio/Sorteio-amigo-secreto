import styled from 'styled-components';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';
import ParticipantsList from '../components/ParticipantsList/ParticipantsList';

const Container = styled.section`
	width: 100%;
	text-align: center;
	max-width: 900px;
`;

export const Title = styled.h2`
	color: rgba(75, 105, 253, 0.99);
	font-weight: 600;
	font-size: 1.25rem;
	padding-bottom: 4rem;
	text-align: center;

	@media (min-width: 800px) {
		font-size: 2rem;
	}
`;

const Configuration = () => {
	return (
		<Card>
			<Container>
				<Title>Vamos começar!</Title>
				<Form />
				<ParticipantsList />
				<Footer />
			</Container>
		</Card>
	);
};

export default Configuration;
