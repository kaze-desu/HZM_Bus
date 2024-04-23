import { defineStore } from "pinia";

export const  useBuyInfoStore = defineStore('buying',{
state() {
    return {
        from: '',
        target: '',
        date: '',
        time: '',
        amount: 0,
        }
    }
});