import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(
		private dataAuth: AuthService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	getUser(): void {
		const infoUser = {
			name: "Ricardo",
			token: '7687687687gvjhgu76876876876'
		}
		const loginUserService = this.dataAuth.getAuth(infoUser);
		if (!!loginUserService.length) {
			console.log(loginUserService);
			this.router.navigate(['/welcome']);
		}
	}

}
