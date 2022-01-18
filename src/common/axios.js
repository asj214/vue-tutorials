import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/'
})

Vue.use(VueAxios, api)
