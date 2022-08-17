import shuffle from "just-shuffle";
import { useSetRecoilState } from "recoil";
import { resultSecretSanta } from "../atom";
import { makeADraft } from "../helpers/makeADraft";
import { useParticipantsList } from "./useParticipantsList"

export const useDraft = ()=>{
  const participants = useParticipantsList();
  const setResult = useSetRecoilState(resultSecretSanta)

  return ()=>{
    const result = makeADraft(participants);
    setResult(result);
  }
}