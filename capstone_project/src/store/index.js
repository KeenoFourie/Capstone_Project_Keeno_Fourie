import { createStore } from 'vuex'
import axios from "axios";

const dataUrl = "stuff";


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    // add appointment
    addAppointment(state, newAppointment) {
      state.appointments.push(newAppointment);
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
  },
  modules: {
  }
})
