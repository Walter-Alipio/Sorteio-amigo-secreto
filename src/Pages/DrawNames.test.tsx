import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useDraftResults } from '../state/hooks/useDraftResults';
import { useParticipantsList } from '../state/hooks/useParticipantsList';
import DrawNames from './DrawNames';

//fingindo(dublando) um comportamento
jest.mock('../state/hooks/useParticipantsList', () => {
	return {
		useParticipantsList: jest.fn(),
	};
});

jest.mock('../state/hooks/useDraftResults', () => {
	return {
		useDraftResults: jest.fn(),
	};
});

describe('A página de sorteio', () => {
	const participants = ['Catia', 'Flavia', 'Sonia', 'Glimi'];

	const results = new Map([
		['Catia', 'Sonia'],
		['Flavia', 'Glimi'],
	]);

	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue(participants);
		(useDraftResults as jest.Mock).mockReturnValue(results);
	});
	test('Todos os participantes podem exibir o seu amigo secreto', () => {
		render(
			<RecoilRoot>
				<DrawNames />
			</RecoilRoot>
		);

		const options = screen.queryAllByRole('option');
		expect(options).toHaveLength(participants.length + 1); //porque já vem uma option por padrão
	});

	test('o amigo secreto é exibido quando é solicitado', () => {
		render(
			<RecoilRoot>
				<DrawNames />
			</RecoilRoot>
		);

		const select = screen.getByPlaceholderText('Selecione o seu nome');
		fireEvent.change(select, {
			target: {
				value: participants[0],
			},
		});

		const buttonForm = screen.getByRole('button');

		fireEvent.click(buttonForm);

		const secretSanta = screen.getByRole('alert');

		expect(secretSanta).toBeInTheDocument();
	});

	test('o amigo secreto some após o timer', async () => {
		//necessário para rodar os timers
		jest.useFakeTimers();
		render(
			<RecoilRoot>
				<DrawNames />
			</RecoilRoot>
		);

		const select = screen.getByPlaceholderText('Selecione o seu nome');
		fireEvent.change(select, {
			target: {
				value: participants[1],
			},
		});

		const buttonForm = screen.getByRole('button');

		fireEvent.click(buttonForm);
		/* fire events that update state */
		act(() => {
			jest.runAllTimers();
		});

		const secretSanta = screen.queryByRole('alert');
		expect(secretSanta).not.toBeInTheDocument();
	});
});
