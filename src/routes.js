// import component will show
import Home from './components/Home'
import Header from './components/Header'

// make it lightweight
// this model import well generate if this component needed
const User = resolve => {
  require.ensure(['./components/user/User'], () =>{
    resolve(require('./components/user/User'))
  }, 'user')
};
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit'], () =>{
    resolve(require('./components/user/UserEdit'))
  }, 'user')
};
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart'], () =>{
    resolve(require('./components/user/UserStart'))
  }, 'user')
};
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail'], () =>{
    resolve(require('./components/user/UserDetail'))
  }, 'user')
};


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
