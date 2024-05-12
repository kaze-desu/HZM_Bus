import { Snackbar } from '@varlet/ui';
import axios from 'axios';
import type TripCardType from '@/types/TripType';
export default function()
{
    /**
     * Get the Raw data of Trip Card information from the database.
     * @returns TripCardType(Promise type)
     */
    async function getRawTripCard():Promise<TripCardType[]>
    {
        const response = await axios.get('http://localhost:8000/api/trip');
        return response.data;
    }
    /**
     * Get the Trip Card information from the database.
     * @returns TripCard list
     */
    function getTripCard():TripCardType[]
    {
        let trips:TripCardType[] = [];
        try{
            const raw = getRawTripCard();
            raw.then((data:any) => {
                let temp:[] = data['products']
                temp.forEach((element:any) => {
                    trips.push({
                        title:element['title'],
                        subtitle:element['subtitle'],
                        description:element['description'],
                        details:element['details'],
                    });
                });
            });
        }catch(e)
        {
            Snackbar.error(e as string);
            return [];
        }

        return trips;
    }
    /**
     * Get the Trip Card information from the simulate database.
     * @returns TripCard list
     */
    function getTripCardSimulate():TripCardType[]
    {
        let trips:TripCardType[] = [];
        trips.push({
            title:"From HongKong",
            subtitle:"To ZhuHai",
            description:"*One Way only",
            details:""
        });
        trips.push({
            title:"From ZhuHai",
            subtitle:"To HongKong",
            description:"^One Way only",
            details:""
        });
        trips.push({
            title:"From HongKong",
            subtitle:"To Macao",
            description:"*One Way only",
            details:""
        });
        trips.push({
            title:"From Macao",
            subtitle:"To HongKong",
            description:"^One Way only",
            details:""
        });
        return trips;
    }
        return {getTripCard, getTripCardSimulate};
}