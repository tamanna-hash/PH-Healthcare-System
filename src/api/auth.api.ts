import apiClient from '@/lib/api.client'

export function userLogin(payload: { email: string, password: string }) {
  return (
   apiClient("/auth/login", {method: "POST", body: payload})
  )
}
