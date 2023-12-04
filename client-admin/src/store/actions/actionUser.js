import { actionType_login } from "./actionType";
const BASE_URL = "https://server-p3-gc1.raisondetre.xyz"


export function handleLogin(payload) {
    return async function (dispatch) {
        try {
            const jsonserver = await fetch
                (
                    BASE_URL + "/admin/login",
                    {
                        method: "POST",
                        body: JSON.stringify(payload),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    },
                )
            const data = await jsonserver.json()
            console.log(data);
            if (!jsonserver.ok) {
                throw data
            }
            localStorage.setItem("access_token", data.access_token)
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}