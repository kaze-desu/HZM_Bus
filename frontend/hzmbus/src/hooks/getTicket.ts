import axios, { type AxiosResponse } from 'axios'
import { Snackbar } from '@varlet/ui';
import type TicketType from '@/types/TicketType';
export default await function Ticket()
{
    async function getTicket(user: string,type:string)
    {
        const response = await axios.get('https://dummyjson.com/products/1', {
                params: {user: user}
                })
        console.log(response.data)
    }
    async function getTicketSimulate(user: string,type:string)
    {
        const response = await axios.get('https://dummyjson.com/products/1', {})
        console.log(response.data)
    }


    return { getTicket,getTicketSimulate };
}