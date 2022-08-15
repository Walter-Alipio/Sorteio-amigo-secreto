import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Configuration from './Configuration';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
	return {
		useNavigate: () => mockNavigate,
	};
});

describe('A página de configuração', () => {
	test('Deve ser renderizada corretamente', () => {
		const { container } = render(
			<RecoilRoot>
				<Configuration />
			</RecoilRoot>
		);

		//quando o teste é executado a primeira vez, cria uma imagem base do html que servira para comparação
		expect(container).toMatchSnapshot();
	});
});
