import { createStore } from 'vuex'
import axios from "axios";
import sweet from 'sweetalert';
import router from '@/router';
import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies()
import authenticateUser from '@/services/AuthenticateUser';


const dataUrl = "https://capstone-project-keeno-fourie-api.onrender.com/";


export default createStore({
  state: {
    // users
    users: null,
    // user
    user: null,
    // courses
    courses: null,
    // cart
    cart: [],
    // appointments
    appointments: null,
    // cookies
    token: null,
    // msg
    msg: null,
  },
  getters: {
  },
  mutations: {
    // add user
    addUser(state, user) {
      state.user = user
    },
    // add appointment
    addAppointment(state, newAppointment) {
      state.appointments.push(newAppointment);
    },
    // add course
    addCourse(state, newCourse) {
      state.courses.push(newCourse);
    },
    // add course
    addToCart(state, course) {
      state.cart.push(course);
    },
    // view more
    setCourse(state, course) {
      state.course = course;
    },
    // user
    setUser(state, user) {
      state.user = user
    },
    // courses
    setCourses(state, courses) {
      state.courses = courses
    },
    // cart
    setCart(state, course) {
      state.cart = course
    },
    // appointments
    setAppointments(state, appointments) {
      state.appointments = appointments
    },
    // users
    setUsers(state, users) {
      state.users = users
    },
    // delete button courses
    deleteCourse(state, courseID) {
      state.courses = state.courses.filter(course => course.courseID !== courseID);
    },
    // delete button appointments
    deleteAppointment(state, appointID) {
      state.appointments = state.appointments.filter(appointment => appointment.appointID !== appointID);
    },
    // delete button users
    deleteUser(state, userID) {
      state.users = state.users.filter(user => user.userID !== userID);
    },
    // cookies
    setToken(state, token) {
      state.token = token;
    },
    // setMsg
    setMsg(state, msg) {
      state.msg = msg
    },
  },
  actions: {
    // login
    async login(context, payload) {
      try {
        const { msg, token, result } = (await axios.post(`${dataUrl}login`, payload)).data
      if(result) {
        context.commit("setUser", {result, msg});
        cookies.set("RealUser", {token, msg, result})
        authenticateUser.applyToken(token)
        sweet({
          title: "✅",
          text: `Welcome back to Lift Off Life ${result?.firstName} ${result?.lastName}`,
          timer: 2500,
          buttons: false,
        })
        router.push({name: 'home'})
      } else {
        sweet({
          title: "Error",
          text: msg,
          icon: "error",
          timer: 2000
        })
      }
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
  // register
  async register(context, payload) {
    try {
      const {msg} = (await axios.post(`${dataUrl}register`, payload)).data
      if(msg) {
        sweet({
          title: "✅",
          text: msg,
          timer: 2000,
          buttons: false,
        })
        context.dispatch('fetchUsers')
        router.push({name: 'login'})
      } else {
        sweet({
          title: "Error",
          text: msg,
          icon: "error",
          timer: 2000
        })
      }
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
  // delete 
  async logOut(context) {
    context.commit("setUser")  // helps remove logout button
    cookies.remove('RealUser');  // removes cookie
  },
  // add appointment
  async addAppointment(context, appointmentdata) {
    try {
      await axios.post(`${dataUrl}appointment`, appointmentdata);
      context.commit("addAppointment", appointmentdata);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
  // add course
  async addCourse(context, coursedata) {
    try {
      await axios.post(`${dataUrl}course`, coursedata);
      context.commit("addCourse", coursedata);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
  // add to cart
  addToCart({ commit }, course) {
    commit('addToCart', course);
  },
  // courses
  async fetchCourses(context) {
    try {
      const { data } = await axios.get(`${dataUrl}courses`);
      context.commit("setCourses", data.results);
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
  // courses
  async fetchCarts(context) {
    try {
      const { data } = await axios.get(`${dataUrl}carts`);
      context.commit("setCart", data.results);
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
  // appointments
  async fetchAppointments(context) {
    try {
      const { data } = await axios.get(`${dataUrl}appointments`);
      context.commit("setAppointments", data.results);
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
  // users
  async fetchUsers(context) {
    try {
      const { data } = await axios.get(`${dataUrl}users`);
      context.commit("setUsers", data.results);
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
  // user
async fetchUser(context) {
  try {
    const { data } = (await axios.get(`${dataUrl}user`)).data
    context.commit("setUser", data.results);
  } catch (e) {
    context.commit("setMsg", "An error has occurred")
  }
},
  // delete button courses
  async deleteCourse(context, courseID) {
    try {
      await axios.delete(`${dataUrl}course/${courseID}`);
      context.commit("deleteCourse", courseID);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
  // delete button appointments
  async deleteAppointment(context, appointID) {
    try {
      await axios.delete(`${dataUrl}appointment/${appointID}`);
      context.commit("deleteAppointment", appointID);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
  // delete button users
  async deleteUser(context, userID) {
    try {
      await axios.delete(`${dataUrl}user/${userID}`);
      context.commit("deleteUser", userID);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
   // update course
   async updatedCourse(context, editedCourse) {
    try {
      const { data } = await axios.patch(
        `${dataUrl}course/${editedCourse.courseID}`,
        editedCourse
      );
      const { msg } = await data;
      if (msg) {
        context.commit("setMsg", msg);
      }
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
   // update appointment
   async updatedAppointment(context, editedAppointment) {
    try {
      const { data } = await axios.patch(
        `${dataUrl}appointment/${editedAppointment.appointID}`,
        editedAppointment
      );
      const { msg } = await data;
      if (msg) {
        context.commit("setMsg", msg);
      }
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
   // update appointment
   async updatedUser(context, editedUser) {
    try {
      const { data } = await axios.patch(
        `${dataUrl}user/${editedUser.userID}`,
        editedUser
      );
      const { msg } = await data;
      if (msg) {
        context.commit("setMsg", msg);
      }
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
  // view more
  async fetchCourse(context, courseID) {
    try {
      const { data } = await axios.get(`${dataUrl}course/${courseID}`);
      context.commit("setCourse", data.result);
    } catch (e) {
      context.commit("setMsg", "An error has occurred");
    }
  },
  },
  modules: {
  }
})
