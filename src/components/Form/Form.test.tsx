import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Form from './Form';

//jest
//Esse padrão de organização do teste é conhecido como AAA (Arrange, Act and Assert em inglês).
describe('O comportamento do Form.tsx', () => {
	test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
		render(
			<RecoilRoot>
				<Form />
			</RecoilRoot>
		);
		//encontrar no DOM o input
		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes'
		);
		//encontrar o botão
		const button = screen.getByRole('button');

		//garantir que o input esteja no documento
		expect(input).toBeInTheDocument();
		//garantir que o botão esteja desabilitado
		expect(button).toBeDisabled();
	});

	test('Como adicionar um participante caso exista um nome preenchido', () => {
		render(
			<RecoilRoot>
				<Form />
			</RecoilRoot>
		);
		//encontrar no DOM o input
		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes'
		);
		//encontrar o botão
		const button = screen.getByRole('button');

		//inserir um valor no input
		fireEvent.change(input, {
			target: {
				value: 'Catia Flávia',
			},
		});

		//clicar no botão de submeter
		fireEvent.click(button);

		//garantir que o input esteja com o foco ativo
		expect(input).toHaveFocus();

		//garantir que o input não tenha um valor
		expect(input).toHaveValue('');
	});

	test('Nomes duplicados não podem ser adicionados na lista', () => {
		render(
			<RecoilRoot>
				<Form />
			</RecoilRoot>
		);

		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes'
		);
		const button = screen.getByRole('button');

		fireEvent.change(input, {
			target: {
				value: 'Catia Flávia',
			},
		});
		fireEvent.click(button);
		fireEvent.change(input, {
			target: {
				value: 'Catia Flávia',
			},
		});
		fireEvent.click(button);

		const errorMessage = screen.getByRole('alert');

		expect(errorMessage.textContent).toBe(
			'Nomes duplicados não são permitidos'
		);
	});

	test('A mensagem de erro deve sumir após os timers', () => {
		jest.useFakeTimers();
		render(
			<RecoilRoot>
				<Form />
			</RecoilRoot>
		);

		const input = screen.getByPlaceholderText(
			'Insira os nomes dos participantes'
		);
		const button = screen.getByRole('button');

		fireEvent.change(input, {
			target: {
				value: 'Catia Flávia',
			},
		});
		fireEvent.click(button);
		fireEvent.change(input, {
			target: {
				value: 'Catia Flávia',
			},
		});
		fireEvent.click(button);

		let errorMessage = screen.queryByRole('alert');

		expect(errorMessage).toBeInTheDocument();

		act(() => {
			/* fire events that update state */
			jest.runAllTimers();
		});

		//esperar n segundos
		errorMessage = screen.queryByRole('alert');
		expect(errorMessage).toBeNull();
	});
});
