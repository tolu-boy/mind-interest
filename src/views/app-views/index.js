import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
      <Route path={`${APP_PREFIX_PATH}/dashboard`} component={lazy(() => import(`./dashboard/dashboard`))} />
      <Route path={`${APP_PREFIX_PATH}/therapists/Overview`} component={lazy(() => import(`./therapists/Overview`))} />
      <Route path={`${APP_PREFIX_PATH}/therapists/WaitingList`} component={lazy(() => import(`./therapists/WaitingList`))} />
      <Route path={`${APP_PREFIX_PATH}/therapists/Approved`} component={lazy(() => import(`./therapists/Approved`))} />
      <Route path={`${APP_PREFIX_PATH}/therapists/Suspended`} component={lazy(() => import(`./therapists/Suspended`))} />
      <Route path={`${APP_PREFIX_PATH}/therapists/ProfileApproved`} component={lazy(() => import(`./therapists/ProfileApproved`))} />
      <Route path={`${APP_PREFIX_PATH}/therapists/ProfileWaiting`} component={lazy(() => import(`./therapists/ProfileWaiting`))} />
      <Route path={`${APP_PREFIX_PATH}/therapists/ProfileSuspended`} component={lazy(() => import(`./therapists/ProfileSuspended`))} />


        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/dashboard`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);