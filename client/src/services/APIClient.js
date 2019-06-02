import axios from 'axios';

const endpoints = {
    CLASSES: 'classes',
    STUDENTS: 'students',
    EVENTS: 'calendar/events',
};

const APIClient = {
    BASE_URL: '/api',

    async getClasses(config = {}) {
        let finalURL = `${this.BASE_URL}/${endpoints.CLASSES}`;
        return axios.get(finalURL, config);
    },

    async getClassesPerPage(pageNo, pageSize, config = {}) {
        let finalURL = `${this.BASE_URL}/${endpoints.CLASSES}?pageNo=${pageNo}&size=${pageSize}`;
        return axios.get(finalURL, config);
    },

    async getStudentsByClassId(classId, config = {}) {
        let finalURL = `${this.BASE_URL}/${endpoints.CLASSES}/${classId}`;
        return axios.get(finalURL, config);
    },
    async getEvents(config = {}) {
        let finalURL = `${this.BASE_URL}/${endpoints.EVENTS}`;
        return axios.get(finalURL, config);
    },
};
export { APIClient, endpoints };
