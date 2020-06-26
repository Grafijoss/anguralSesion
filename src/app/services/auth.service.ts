import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() { }

	getAuth(infoUser) {
		localStorage.setItem("currentUser", infoUser.name);
		localStorage.setItem("accessToken", infoUser.token);
		return "guardado en Local Storage";
	}

	logOutUser() {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("currentUser");
		return "eliminado del Local Storage";
	}

	getToken() {
		return localStorage.getItem("accessToken");
	}

	getCurrentUser() {
		return localStorage.getItem("currentUser");
	}

}
