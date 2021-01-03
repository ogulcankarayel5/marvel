


import React from 'react';
function WithLoading(Component:any) {
  return function WihLoadingComponent({ loading, ...props }:any) {

    console.log(loading)
    if(loading){
        return <p>deneme</p>
    }
    else{
        return <Component {...props}/>
    }
  };
}
export default WithLoading;