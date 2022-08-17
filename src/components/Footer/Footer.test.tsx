import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';
import Footer from './Footer';

//fingindo(dublando) um comportamento
jest.mock('../../state/hooks/useParticipantsList', () => {
	return {
		useParticipantsList: jest.fn(),
	};
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
	return {
		useNavigate: () => mockNavigate,
	};
});

const mockDraft = jest.fn();

jest.mock('../../state/hooks/useDraft', () => {
	return {
		useDraft: () => mockDraft,
	};
});

describe('Onde não existem participantes suficientes', () => {
	//antes de cada teste, executar o mock
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue([]);
	});

	test('A brincadeira não pode ser iniciada', () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>
		);
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
	});
});

describe('Quando existem participantes suficientes', () => {
	//antes de cada teste, executar o mock
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue([
			'Catia',
			'Flavia',
			'Josefina',
		]);
	});

	test('A brincadeira pode ser iniciada', () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>
		);
		const button = screen.getByRole('button');
		expect(button).not.toBeDisabled();
	});

	test('A brincadeira foi iniciada', () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>
		);
		const button = screen.getByRole('button');
		fireEvent.click(button);

		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
		expect(mockDraft).toHaveBeenCalledTimes(1);
	});
});
