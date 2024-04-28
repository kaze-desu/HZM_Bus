/**
 * TODO: Get All Time line and convert to user friendly format.
 * For example: 00:00 - 06:14, 30minues per time.
 * get the time for right now and compute the next time.
 * if the time is 05:00, then the next time is 06:30, so return 06:30
 * if the time is 06:30, then the next time is 07:00, because larger than 06:14, so return -1.
 */

import type internal from "@/types/IntervalType";

export default function GetTime()
{
    //TODO: instead of database
    /**
     * return the waiting time for the next bus which depends on the from and target.
     * @param from from which location
     * @param target to which location
     * @returns Intervals
     */
    function interval(from:string,target:string):internal[]
    {
        let intervals:internal[] = [];
        if(from === "HongKong" && target === "Macao")
        {
            intervals.push({range_start:"00:00",range_end:"06:14",interval:30});
            intervals.push({range_start:"06:15",range_end:"08:59",interval:15});
            intervals.push({range_start:"09:00",range_end:"23:59",interval:10});
        }
        else if(from === "Macao" && target === "HongKong")
        {
            intervals.push({range_start:"00:00",range_end:"05:59",interval:30});
            intervals.push({range_start:"06:00",range_end:"07:59",interval:15});
            intervals.push({range_start:"08:00",range_end:"23:59",interval:10});
        }
        else if(from === "HongKong" && target === "ZhuHai")
        {
            intervals.push({range_start:"00:00",range_end:"06:59",interval:30});
            intervals.push({range_start:"07:00",range_end:"07:59",interval:15});
            intervals.push({range_start:"08:00",range_end:"23:59",interval:10});
        }
        else if(from === "ZhuHai" && target === "HongKong")
        {
            intervals.push({range_start:"00:00",range_end:"06:14",interval:30});
            intervals.push({range_start:"06:15",range_end:"07:59",interval:15});
            intervals.push({range_start:"08:00",range_end:"21:59",interval:10});
            intervals.push({range_start:"22:00",range_end:"23:59",interval:25});
        }
        return intervals;
    }

    //TODO: Fix the bug
    function getTime(from:string,target:string,hour:number,minus:number):number[]
    {
        let waitingList:number[] = [];
        let intervals = interval(from,target);
        intervals.forEach((interval) =>
        {
            let rangeStartHour:number = +interval.range_start.split(":",2)[0];
            let rangeStartMinus:number = +interval.range_start.split(":",2)[1];
            let rangeEndHour:number = +interval.range_end.split(":",2)[0];
            let rangeEndMinus:number = +interval.range_end.split(":",2)[1];

            if(hour >= rangeStartHour && hour <= rangeEndHour)
            {
                if(minus == rangeStartMinus)
                {
                    waitingList.push(0);
                }
                //TODO: The bug is here, keeping output 10, you have to figure out how to get the first time then move to next one.
                //Also, need to know why keeping output 10 and 25.
                if(minus <= rangeEndMinus)
                {
                    waitingList.push(waitingTime(minus,interval));
                }
            }
            //Include next 2 hours bus
            else if (hour >= rangeStartHour && 2+hour <rangeEndHour)
            {
                waitingList.push(minus+waitingTime(minus,interval));
            }
        }
        );
        return waitingList
    }
    function waitingTime(minus:number,interval:internal):number
    {
        let currentRuns:number = minus/interval.interval;
        let waitingTime:number = (currentRuns+1)*interval.interval-minus;
        return waitingTime;
    }
    return {getTime};
}