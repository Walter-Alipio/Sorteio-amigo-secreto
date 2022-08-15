import { screen, render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Ao renderizar a página', () => {
	test('As imagens devem ser renderizadas', () => {
		render(<Header />);

		const allImg = screen.getAllByRole('img');

		allImg.forEach(img => {
			expect(img).toBeInTheDocument();
		});
	});
});
