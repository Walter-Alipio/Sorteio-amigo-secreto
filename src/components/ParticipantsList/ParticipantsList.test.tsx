import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';
import ParticipantsList from './ParticipantsList';

//fingindo(dublando) um comportamento
jest.mock('../../state/hooks/useParticipantsList', () => {
	return {
		useParticipantsList: jest.fn(),
	};
});

describe('Uma lista vazia de participantes', () => {
	//antes de cada teste, executar o mock
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue([]);
	});
	test('Uma lista de participantes vazia deve ser renderizada sem elementos', () => {
		render(
			<RecoilRoot>
				<ParticipantsList />
			</RecoilRoot>
		);

		const items = screen.queryAllByRole('listitem');
		expect(items).toHaveLength(0);
	});
});

describe('Uma lista preenchida de participantes', () => {
	const participants = ['Catia', 'Flávia'];
	//antes de cada teste, executar o mock
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue(participants);
	});
	test('Uma lista de participantes vazia deve ser renderizada contendo elementos', () => {
		render(
			<RecoilRoot>
				<ParticipantsList />
			</RecoilRoot>
		);

		const items = screen.queryAllByRole('listitem');
		expect(items).toHaveLength(participants.length);
	});
});
