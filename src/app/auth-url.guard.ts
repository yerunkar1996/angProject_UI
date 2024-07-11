import { CanActivateFn } from '@angular/router';

export const authUrlGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("Admin") != ""){
    return true; 
  }
  else if(localStorage.getItem("Student") != ""){
    return false; 
  }
  else{
    return false
  }
};
