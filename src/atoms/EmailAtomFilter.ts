import { Atom, atom } from "@mongez/react-atom";
import { useSearchParams } from "react-router-dom";

export const EmailFilterAtom: Atom = atom({
  key: "emailFilter",
  default: ""
})