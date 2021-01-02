import React from "react";
import { Route } from "react-router-dom";




type AppRouteTypes = {
  component: React.ComponentType<any>
  layout:  React.ComponentType<any>
};

export const AppRoute = ({
  component: Component ,
  layout: Layout,
  ...rest
}: AppRouteTypes) => {
    if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) => (
       
            <Component {...rest} {...props}/>
        
      )}
    />
  );
};


