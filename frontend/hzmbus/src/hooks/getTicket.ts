import axios from 'axios'
import { Snackbar } from '@varlet/ui';
import type TicketType from '@/types/TicketType';
export default await function Ticket()
{
    async function getRawTicket(user: string):Promise<TicketType[]>
    {
        const response = await axios.get('http://localhost:8000/api/ticket', {
                params: {user: user}
                });
        return response.data;
    }
    function getTicket(user: string,type:string):TicketType[]
    {
        let allTicket:TicketType[] = [];
        let ticket:TicketType[] = [];
        try{
            const raw = getRawTicket(user);
            raw.then((data:any) => {
                let temp:[] = data['products']
                temp.forEach((element:any) => {
                    allTicket.push({
                        from:element['from'],
                        target:element['target'],
                        date:element['date'],
                        time:element['time'],
                        amount:element['amount'],
                        token:element['token'],
                        status:element['status']
                    });
                });
            });
        }catch(e)
        {
            Snackbar.error(e as string);
            return [];
        }
        if(type == 'Ticket')
        {
            allTicket.forEach((element) => {
                if(element.status == true)
                {
                    ticket.push(element);
                }
            });
        }
        else
        {
            ticket = allTicket;
        }

        return ticket;
    }
    function getTicketSimulate(user: string,type:string):TicketType[]
    {
        let allTicket:TicketType[] = [];
        let ticket:TicketType[] = [];
        allTicket.push({
            from:'A',
            target:'B',
            date:'2021-10-10',
            time:'00:00:20',
            amount:1,
            token:'123456',
            status:true
        });
        allTicket.push({
            from:'C',
            target:'D',
            date:'2021-10-10',
            time:'00:00:20',
            amount:1,
            token:'123456',
            status:true
        });
        allTicket.push({
            from:'E',
            target:'F',
            date:'2021-10-10',
            time:'00:00:20',
            amount:1,
            token:'123456',
            status:false
        });
        if(type == 'Ticket')
            {
                allTicket.forEach((element) => {
                    if(element.status == true)
                    {
                        ticket.push(element);
                    }
                });
            }
        else
        {
            ticket = allTicket;
        }
        return ticket;
    }

    return { getTicket,getTicketSimulate };
}