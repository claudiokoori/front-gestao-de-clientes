import { inject } from "@angular/core"
import { LoginService } from "../services/login.service"
import { Router } from "@angular/router"

export const AuthGuard = () => {
  const loginService = inject(LoginService)
  const router = inject(Router)

  if(loginService.isAuthenticated()){   
    return true;
  } else {
    router.navigate(['']);
    return false;
  }

}

export const Logado = () => {
  const loginService = inject(LoginService)
  const router = inject(Router)

  if(loginService.isAuthenticated()){
    router.navigate(['/lista'])
    return false;
  } else {
    return true;
  }
}