import _ from 'lodash';

/* export default function ({store, redirect, route}) {
    const userIsLoggedIn = !!store.state.auth.authUser
    const urlRequiresAuth = /^\/admin(\/|$)/.test(route.fullPath)
    const urlRequiresNonAuth = /^\/login(\/|$)/.test(route.fullPath)
    if (!userIsLoggedIn && urlRequiresAuth) {
      return redirect('/login')
    }
    if (userIsLoggedIn && urlRequiresNonAuth) {
      return redirect('/admin')
    }
    return Promise.resolve()
  }*/

export default async({ store, redirect }) => {
    if (_.isEmpty(store.state.auth.authLogin)) {
        return redirect('/login');
    }
    return Promise.resolve()
}