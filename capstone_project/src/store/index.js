import { createStore } from 'vuex'
import axios from "axios";

const dataUrl = "https://capstone-project-keeno-fourie-api.onrender.com/";


export default createStore({
  state: {
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
