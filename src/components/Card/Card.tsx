import React from 'react';
import styled from 'styled-components';

const CardComponent = styled.div`
	background-color: #fff9eb;
	border: 2px solid #000;
	box-sizing: border-box;
	border-radius: 4rem 4rem 0px 0px;
	padding: 5rem 1rem;
	display: flex;
	justify-content: center;
	flex: 1;
	margin-top: -2rem;

	@media (min-width: 800px) {
		padding: 5rem;
	}
`;

const Card: React.FC = ({ children }) => {
	return <CardComponent>{children}</CardComponent>;
};

export default Card;
