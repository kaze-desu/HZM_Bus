//TODO: get the direction of the bus, then return the bus ticket information.
import { Snackbar } from '@varlet/ui'
import axios from 'axios'
export default await function()
{
    function sendBuyInfo(from:string,target:string,date:string,time:string,amount:number):boolean
    {
        if(from!=''&&target!=''&&date!=''&&time!=''&&amount>0)
        {
            axios.post('http://localhost:3000/api/buy',{
                from:from,
                target:target,
                date:date,
                time:time,
                amount:amount
            })
            console.log(`You are buying tickets from ${from} to ${target} on ${date} at ${time} for ${amount} people.`);
            return false;
        }
        else
        {
            Snackbar["error"]("Please fill in all the information before buying the tickets.");
            return true;
        }

    }
    return {sendBuyInfo};
}