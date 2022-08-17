import React from 'react';
import { makeADraft } from './makeADraft';

describe('Dado um sorteio de amigo secreto', () => {
	test('cada participante não sorteie o próprio nome', () => {
		const participants = [
			'Catia',
			'Flavia',
			'Sonia',
			'Sr.K',
			'Vinicius',
			'Leonidas',
		];

		const draft = makeADraft(participants);

		participants.forEach(participant => {
			const secretSanta = draft.get(participant);
			expect(secretSanta).not.toEqual(participant);
		});
	});
});
