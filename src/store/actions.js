// action - customization reducer
import health from "api/health";

export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';

export const loginAction = (profileData) => async (dispatch, getStates) => {
	const { email, password, role } = profileData;
	let storeMsg = {
		id: "",
		errMsg: null,
		accessToken: "",
		email: "",
		refreshToken: "",
		role: ""
	};
	try {
		//const data = await signInWithEmailAndPassword(auth, email, password);
		const url = role == "doc" ? "/doctor/login" : "/patient/login";
		let response = await health.post(url, {
			email, password
		})
		response = await response.data
		if (response.status == "success") {
			console.log(response)
			storeMsg.email = email;
			storeMsg.accessToken = response.accessToken;
			storeMsg.refreshToken = response.refreshToken;
			storeMsg.id = role == "doc" ? response.did : response.pid;
			storeMsg.role = role;
		} else {
			storeMsg.errMsg = "Invalid email and password!";
		}
	} catch (error) {
		storeMsg.errMsg = "Invalid email and password!";
	}
	dispatch({ type: "LOGIN_USER", payload: storeMsg });
};

export const logoutAction = () => {
	let storeMsg = {
		id: "",
		errMsg: null,
		accessToken: "",
		email: "",
		refreshToken: "",
		role: ""
	};
	return { type: "LOGIN_USER", payload: storeMsg }
}