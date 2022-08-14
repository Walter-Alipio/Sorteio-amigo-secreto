import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

//encapsulamento do recoil
export const useErrorMessage = () => {
  const message = useRecoilValue(errorState);
  return message;
}