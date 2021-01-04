import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from "../components/Dashboard";
import NewEmployee from "../components/NewEmployee";
import viewEmployee from "../components/viewEmployee";
import EditEmployee from "../components/EditEmployee";
import Login from "../components/Login";
import Register from "../components/Register";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: viewEmployee
    },

  ]
})
