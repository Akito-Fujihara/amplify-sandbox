import { Auth } from 'aws-amplify';
import { useState, useEffect } from "react"

// Cognitoで作成したユーザー情報
type User = {
	id: string,
	username: string,
	attributes: {
		email: string
		sub: string // いわゆるUID的なもの（一意の識別子）
	}
}

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
