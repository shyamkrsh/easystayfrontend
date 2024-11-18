import React, { useEffect, useState } from 'react'

function Reports() {
    const [time, setTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000)
    }, [])

    return (
        <>
            <div className='w-full h-[4rem] bg-slate-200 flex items-center justify-between px-5 md:px-10' style={{backgroundColor: '#201f4d'}}>
                <h1 className='text-xl font-semibold text-white'>𝙎𝙚𝙚 𝙘𝙡𝙞𝙚𝙣𝙩'𝙨 𝙧𝙚𝙥𝙤𝙧𝙩𝙨</h1>
                <p className='text-sm text-white'>{time}</p>
            </div>
            <div className='h-[100%] overflow-y-auto'>
                <table className='w-full min-w-[700px]' border="1">
                    <tr className='text-center bg-red-600 text-white h-[2rem]'>
                        <th className='ps-3 w-[7%]'>S. No.</th>
                        <th className='w-[20%]'>Email</th>
                        <th className='w-[15%]'>Phone</th>
                        <th className='w-[25%]'>Issues</th>
                    </tr>
                    <tr className='bg-slate-400 h-[2rem]  hover:bg-slate-300 cursor-pointer'>
                        <td className='text-center'>1.</td>
                        <td className='w-[20%] text-center'>sharmashyamkumar717@gmail.com</td>
                        <td className='text-center'>+91 8200732962</td>
                        <td className='text-center'>Payment Gateway is not working</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Reports