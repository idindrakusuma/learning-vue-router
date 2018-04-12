// import component will show
import User from './components/user/User'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import Home from './components/Home'
import Header from './components/Header'

// then, export routes and set the path and component
export const routes = [
  { path: '', component: Home, name: 'home', components: {
      default: Home,
      'header-top': Header
    } },
  { path: '/user', components: {
      default: User,
      'header-bottom': Header
    }, children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail, name: 'userDetail', beforeEnter: (to, from, next) =>{
          console.log('inside route setup..');
          next();
         }},
      { path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]},
  // redirect path to specific path
  { path: '/redirect-me', redirect: { name: 'home' } },
  // this for make redirect if the route not found
  { path: '*', redirect: '/' },
];
