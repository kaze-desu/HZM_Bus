import { defineStore } from "pinia";

export const useSessionStore = defineStore('session',{
    state()
    {
        return {
            username:'',
            password:'',
            status:true
        }
    }
})