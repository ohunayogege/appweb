import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
      path: "/",
      alias: "/appointments",
      name: "appointments",
      component: () => import("../components/AppointmentList.vue")
    },
    {
      path: "/appointments/:id/",
      name: "appointment-details",
      component: () => import("../components/Appointment.vue")
    },
    {
      path: "/add-appointment/",
      name: "add",
      component: () => import("../components/CreateAppointment.vue")
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
