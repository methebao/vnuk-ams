import axios from "axios";

const endpoints = {
  CLASSES: "classes",
  STUDENTS: "students",
  USERS: "users",
  EVENTS: "events"
};
const APIClient = {
  BASE_URL: "/api",

  async getClasses() {
    let finalURL = `${this.BASE_URL}/${endpoints.CLASSES}`;
    return axios.get(finalURL);
  },

  async getClassesPerPage(pageNo, pageSize) {
    let finalURL = `${this.BASE_URL}/${endpoints.CLASSES}?pageNo=${pageNo}&size=${pageSize}`;
    return axios.get(finalURL);
  },
  async getClassById(classId) {
    let finalURL = `${this.BASE_URL}/${endpoints.CLASSES}/${classId}`;
    return axios.get(finalURL);
  },

  async getStudentsByClassId(classId) {
    let finalURL = `${this.BASE_URL}/${endpoints.CLASSES}/${classId}/${endpoints.STUDENTS}`;
    return axios.get(finalURL);
  },
  async getEventsByClassId(classId) {
    let finalURL = `${this.BASE_URL}/${endpoints.CLASSES}/${classId}/${endpoints.EVENTS}`;
    return axios.get(finalURL);
  },

  async getEvents() {
    let finalURL = `${this.BASE_URL}/${endpoints.EVENTS}`;
    return axios.get(finalURL);
  },
  async getEvent(eventId) {
    let finalURL = `${this.BASE_URL}/${endpoints.EVENTS}/${eventId}`;
    return axios.get(finalURL);
  },
  async updateEvent(newEvent) {
    let finalURL = `${this.BASE_URL}/${endpoints.EVENTS}/${newEvent._id}`;
    return axios.put(finalURL, newEvent);
  },

  async toogleStudent(eventId, userId) {
    let finalURL = `${this.BASE_URL}/${endpoints.EVENTS}/${eventId}/${endpoints.USERS}/${userId}/toggle`;
    return axios.get(finalURL);
  }
};
export { APIClient, endpoints };
