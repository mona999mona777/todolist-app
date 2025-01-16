import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const nodeGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router);

  // you havenot token
if(typeof localStorage!=='undefined'){
if( localStorage.getItem("NodeToken") == null){
 return true;
}            
else{
    // navigate to node
 _Router.navigate(['/node'])
 return false;
}
}
else{
return false;
}
};
