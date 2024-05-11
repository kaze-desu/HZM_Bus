/**
 * TODO: Get All Time line and convert to user friendly format.
 * For example: 00:00 - 06:14, 30minues per time.
 * get the time for right now and compute the next time.
 * if the time is 05:00, then the next time is 06:30, so return 06:30
 * if the time is 06:30, then the next time is 07:00, because larger than 06:14, so return -1.
 */

import type internal from "@/types/IntervalType";

export default function getTime()
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
    function getTime(from:string,target:string,hour:number,minus:number):number[]
    {
        let waitingList:number[] = [];
        let intervals = interval(from,target);

        intervals.forEach((interval) =>
        {
            let runTime:number = minusConvert(interval.range_start);
            //let cTime = 360;自定义时间测试
            let cTime = hour*60+minus;
            
            while (runTime<=minusConvert(interval.range_end)){
                if (runTime >= cTime && runTime-cTime<=120){
                    waitingList.push(runTime-cTime);
                }
                runTime+=interval.interval;
            }
        }
        );
        return waitingList
    }
    function minusConvert(time:string):number{
        let hour:number = +time.split(":",2)[0];
        let minus:number = +time.split(":",2)[1];
        let minusTime = hour*60+minus;
        return minusTime
    }
    return {getTime};
}