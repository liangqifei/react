
import Home from '../pages/Home/Home';
import User from '../pages/User/User';
    import UserList from '../pages/User/UserList/UserList';
    import UserAdd from '../pages/User/UserAdd/UserAdd';
    import UserEdit from '../pages/User/UserEdit/UserEdit';
import Shop from '../pages/Shop/Shop';
import News from '../pages/News/News';
import HotMoment from '../pages/HotMoment/HotMoment';

let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    // {
    //   path: "/shop",
    //   component: Shop
    // },
    // {
    //   path: "/user",
    //   component: User,  
    //   routes:[   /*嵌套路由*/
    //     {
    //       path: "/user/",
    //       component: UserList
    //     },
    //     {
    //       path: "/user/add",
    //       component: UserAdd
    //     },
    //     {
    //       path: "/user/edit",
    //       component: UserEdit
    //     }
    //   ]
    // },
    // {
    //   path: "/news",
    //   component: News
    // },
    {
      path: "/hotmoment",
      component: HotMoment
    }
    
];

export default routes;