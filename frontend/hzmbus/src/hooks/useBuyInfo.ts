import type TicketType from '@/types/TicketType';
import { Snackbar } from '@varlet/ui';
import axios from 'axios';
import {useSessionStore} from '@/store/session'
export default await function useBuyInfo()
{
    function sendBuyInfo(infos:TicketType):boolean
    {
        var closeWindow = false;
        if(useSessionStore().status)
        {
            if(infos.from!=''&&infos.target!=''&&infos.date!=''&&infos.time!=''&&infos.amount>0)
            {
                axios.post('http://localhost:3000/api/buy',{
                    from:infos.from,
                    target:infos.target,
                    date:infos.date,
                    time:infos.time,
                    amount:infos.amount
                })
                return closeWindow;
            }
            else
            {
                Snackbar["error"]("Please fill in all the information before buying the tickets.");
                closeWindow = true;
                return closeWindow;
            }
        }
        else
        {
            Snackbar["error"]("Please log in before buying the tickets.");
            closeWindow = true;
            return closeWindow;
        }

    }
    return {sendBuyInfo};
}