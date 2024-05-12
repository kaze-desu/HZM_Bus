import { Snackbar } from '@varlet/ui';
import axios from 'axios';
import {useSessionStore} from '@/store/Session'
import type BuyInfoType from '@/types/BuyInfoType';
export default function()
{
    /**
     * Send the buy information to the database.
     * @param infos the buy information
     * @return close the pop window or not. Reminding: the true and false is opposite.
     */
    function sendBuyInfo(infos:BuyInfoType):boolean
    {
        var closeWindow = false;
        if(useSessionStore().status)
        {
            if(infos.from!=''&&infos.target!=''&&infos.date!=''&&infos.time!=''&&infos.amount>0)
            {
                console.log(infos);
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