import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router);

  // you havenot token
if(typeof localStorage!=='undefined'){
if( localStorage.getItem("NodeToken") !== null){
 return true;
}            
else{
    // navigate to login
 _Router.navigate(['/login'])
 return false;
}
}
else{
return false;
}

};
