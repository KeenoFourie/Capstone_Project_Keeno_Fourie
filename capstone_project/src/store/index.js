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
    // cookies
    token: null,
    // msg
    msg: null,
  },
  getters: {
  },
  mutations: {
    // users
    setUsers(state, users) {
      state.users = users
    },
    // users
    addUser(state, user) {
      state.user = user
    },
    // user
    setUser(state, user) {
      state.user = user
    },
    // courses
    setCourses(state, courses) {
      state.courses = courses
    },
    // delete button courses
    deleteCourse(state, courseID) {
      state.courses = state.courses.filter(course => course.courseID !== courseID);
    },
    // view more
    setCourse(state, course) {
      state.course = course;
    },
    // add appointment
    addAppointment(state, newAppointment) {
      state.appointments.push(newAppointment);
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
    // users
  async fetchUsers(context) {
    try {
      const { data } = (await axios.get(`${dataUrl}user`)).data
      context.commit("setUsers", data.results);
    } catch (e) {
      context.commit("setMsg", "An error has occurred")
    }
  },
    // login
  async login(context, payload) {
    try {
      const { msg, token, result } = (await axios.post(`${dataUrl}login`, payload)).data
      if(result) {
        context.commit("setUser", {result, msg});
        cookies.set("RealUser", {token, msg, result})
        authenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Welcome back ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 2000
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
          title: "Registration",
          text: msg,
          icon: "success",
          timer: 2000
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
  // courses
  async fetchCourses(context) {
    try {
      const { data } = await axios.get(`${dataUrl}courses`);
      context.commit("setCourses", data.results);
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
