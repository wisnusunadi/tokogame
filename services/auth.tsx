import axios from "axios";
import callAPI from "../config/api";
import { SignInTypes } from "./data-types";
const ROOT_API = process.env.NEXT_PUBLIC_API;
export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/api/auth/signup`;
  return callAPI({
    url,
    method: 'POST',
    data
  })
}

export async function setSignIn(data: SignInTypes) {
  const url = `${ROOT_API}/api/auth/signin`;
  return callAPI({
    url,
    method: 'POST',
    data
  })
}