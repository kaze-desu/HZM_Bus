//TODO: get the direction of the bus, then return the bus ticket information.

export default function()
{
    function sendBuyInfo(from:string,target:string,date:string,time:string,amount:number)
    {
        console.log(`You are buying a ticket from ${from} to ${target} on ${date} at ${time} for ${amount} people.`);
    }
    return {sendBuyInfo};
}