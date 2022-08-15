import { useRecoilValue } from "recoil"
import { participantListState } from "../atom"

export const useParticipantsList = () => {
  return useRecoilValue(participantListState);
}