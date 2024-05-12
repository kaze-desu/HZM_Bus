import { defineStore } from "pinia";
/**
 * A sample store for session.
 */
export const useSessionStore = defineStore('session',{
    state()
    {
        return {
            username:'',
            password:'',
            status:false
        }
    }
})