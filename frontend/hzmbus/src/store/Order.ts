import { defineStore } from "pinia";
import type TicketType  from "@/types/TicketType";
import axios from 'axios';
import { reactive } from "vue";
/**
 * A sample store for session.
 */
export const useOrderStore = defineStore('order',() => {
    
    const allTickets:TicketType[] = []
    return allTickets;
})