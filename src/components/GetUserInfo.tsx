import { Auth } from 'aws-amplify';
import { useState, useEffect } from "react"

export const GetUserInfo = () => {
	const [jwttoken, setJwtToken] = useState<string>()

  const getUserInfo = async () => {
    const CurrentSession = await Auth.currentSession()
    return CurrentSession.getAccessToken()
	};

	useEffect(() => {
		getUserInfo().then((res) => {
			setJwtToken(res.getJwtToken())
		})
	}, [jwttoken])

	console.log(jwttoken)

  return (
			<div>
				<h2>CurrentUserInfo↓</h2>
				<p>{jwttoken}</p>
			</div>
    );
}
