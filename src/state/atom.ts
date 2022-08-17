import { atom } from "recoil";

export const participantListState = atom<string[]>({
  key: 'participantList',
  default: []
});

export const resultSecretSanta = atom<Map<string, string>>({
  key: 'resultSecretSanta',
  default: new Map(),
});

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})
