import Main from './../components/pages/Main';
import Login from './../components/pages/Login';
import Profile from './../components/pages/Profile';

export const routes = [
  { path: '*', element: Main },
  { path: '/login', element: Login },
  { path: '/profile', element: Profile },
];
