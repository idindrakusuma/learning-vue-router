// import component will show
import User from './components/user/User'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import Home from './components/Home'

// then, export routes and set the path and component
export const routes = [
  { path: '', component: Home },
  { path: '/user', component: User, children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail},
      { path: ':id/edit', component: UserEdit}
    ]}
];
