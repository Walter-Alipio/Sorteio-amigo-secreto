import styled from 'styled-components';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';

const List = styled.li`
	font-size: 1.125rem;
	font-weight: 300;
	margin: 0.5rem 0;
`;

const ParticipantsList = () => {
	const participants: string[] = useParticipantsList();

	return (
		<ul>
			{participants.map(participant => (
				<List key={participant}>{participant}</List>
			))}
		</ul>
	);
};

export default ParticipantsList;
