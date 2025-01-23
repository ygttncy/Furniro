import { useSearchParams } from "react-router-dom"
import AuthScreen from "../../components/AuthScreen"

const AuthPage = () => {
  const [searchParams] = useSearchParams()
  const type = searchParams.get("type")

  return (
    <>
      {type === "login" ? (
        <AuthScreen type={"login"} />
      ) : (
        <AuthScreen type={"register"} />
      )}
    </>
  )
}
export default AuthPage
