import { useRecoilValue } from "recoil";
import { resultSecretSanta } from "../atom";

export const useDraftResults = ()=> {
  return useRecoilValue(resultSecretSanta);
};