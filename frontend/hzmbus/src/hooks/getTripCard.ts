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
            title:"A",
            subtitle:"B",
            description:"C",
            details:"D"
        });
        trips.push({
            title:"E",
            subtitle:"F",
            description:"G",
            details:"H"
        });
        trips.push({
            title:"I",
            subtitle:"J",
            description:"K",
            details:"L"
        });
        return trips;
    }
        return {getTripCard, getTripCardSimulate};
}