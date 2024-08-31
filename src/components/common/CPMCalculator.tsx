import React, { useEffect, useState} from "react";

const CPMCalculator: React.FC = () => {
    const [cost, setCost] = useState<number>(0);
    const [impressions, setImpressions] = useState<number>(0);
    const [cpm, setCpm] = useState<number | null>(0);

    useEffect(() => {
        calculateCPM();


    }, [cost, impressions]);

    const calculateCPM = () => {

        if (isNaN(cost)) return;
        if (isNaN(impressions)) return;


        if (!isNaN(cost) && !isNaN(impressions) && impressions !== 0){
            const cpmValue = (cost / impressions) * 1000;
            setCpm(cpmValue);
        } else {
            setCpm(0);
        }
    }
    
    return (
        <div className="max-w-md mx-auto p-2" id="cpm-calculator">
            <h2 className="text-2xl mb-4 font-semibold">What is Your CPM?</h2>
            <div className="flex">

            <div className="rounded-lg w-full md:max-w-md lg:max-w-2xl xl:max-w-4xl "><label htmlFor="cost" className="pl-2 mb-2">Campaign Cost ($)</label>
            <input type="number" id="cost" value={cost} onChange={(e) => setCost(parseFloat(e.target.value))} placeholder="What is your campaign cost?" className="pl-2 p-1 border shadow-xs border-gray-200 mt-0.5 dark:text-slate-700 rounded-sm ml-2 justify-end" />
            </div>
            <div className="rounded-lg w-full md:max-w-md lg:max-w-2xl xl:max-w-4xl ">
                <label htmlFor="impressions" id="impressions" className="pl-2">Number of Impressions</label>
                <input  type="number" value={impressions} onChange={(e) => setImpressions(parseFloat(e.target.value))} placeholder="How many impressions did you receive?"  className="border shadow-xs mt-0.5 border-gray-200 dark:text-slate-700 pl-2 p-1 rounded-sm "/>
            </div>
            </div>
            {cpm !== null && (
                <div className="mt-4 mb-4">
                    <h2>Your CPM is: ${cpm.toFixed(2)}</h2>
                </div>
            )}
        </div>
    )

}

export default CPMCalculator;
