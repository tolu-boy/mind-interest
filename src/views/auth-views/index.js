import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="page"/>}>
      <Switch>
        <Route path={`${AUTH_PREFIX_PATH}/login`} component={lazy(() => import(`./authentication/login/index.js`))} />
        <Route path={`${AUTH_PREFIX_PATH}/login-1`} component={lazy(() => import(`./authentication/login-1`))} />
        <Route path={`${AUTH_PREFIX_PATH}/login-2`} component={lazy(() => import(`./authentication/login-2`))} />
        <Route path={`${AUTH_PREFIX_PATH}/register-1`} component={lazy(() => import(`./authentication/register-1`))} />
        <Route path={`${AUTH_PREFIX_PATH}/register-2`} component={lazy(() => import(`./authentication/register-2`))} />
        <Route path={`${AUTH_PREFIX_PATH}/forgot-password`} component={lazy(() => import(`./authentication/forgot-password/Password`))} />
        <Route path={`${AUTH_PREFIX_PATH}/NewPassword/:token`} component={lazy(() => import(`./authentication/forgot-password/NewPassword`))} />
        <Route path={`${AUTH_PREFIX_PATH}/Mail`} component={lazy(() => import(`./authentication/forgot-password/Mail`))} />
        <Route path={`${AUTH_PREFIX_PATH}/Reset`} component={lazy(() => import(`./authentication/forgot-password/Reset`))} />
        <Route path={`${AUTH_PREFIX_PATH}/error-1`} component={lazy(() => import(`./errors/error-page-1`))} />
        <Route path={`${AUTH_PREFIX_PATH}/error-2`} component={lazy(() => import(`./errors/error-page-2`))} />
        <Route path={`${AUTH_PREFIX_PATH}/Logout`} component={lazy(() => import(`./authentication/logout/logout`))} />
        <Redirect from={`${AUTH_PREFIX_PATH}`} to={`${AUTH_PREFIX_PATH}/login`} />
        
      </Switch>
    </Suspense>
    
  )
}

export default AppViews;

