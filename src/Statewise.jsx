import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Statewise = () => {
    const [data, setdata] = useState([]);

    const getData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actData = await res.json();
        console.log(actData);
        setdata(actData.statewise);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className="mb-5 text-muted text-center" ><span className="fw-bolder" style={{ color: 'black' }}>INDIA</span> Statewise Covid-19 Dashboard</div>
                <div className="table-responsive">
                    <table className="table table-dark table-striped">
                        <thead className='thead-dark'>
                            <tr style={{fontSize:'18px',fontFamily:'sans-serif'}}>
                                <th>State</th>
                                <th className='green'>Confirmed</th>
                                <th className='red' >Deaths</th>
                                <th className='lightgreen'>Recovered</th>
                                <th className='yellow'>Active</th>
                                <th className='green'>Delta Confirmed</th>
                                <th className='red' >Delta Deaths</th>
                                <th className='lightgreen'>Delta Recovered</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curr, ind) => {
                                    return (
                                        <tr key = {ind}>
                                            <td>{curr.state}</td>
                                            <td className='green'>{curr.confirmed}</td>
                                            <td className='red'>{curr.deaths}</td>
                                            <td className='lightgreen' >{curr.recovered}</td>
                                            <td className='yellow'>{curr.active}</td>
                                            <td className='green'>{curr.deltaconfirmed}</td>
                                            <td className='red' >{curr.deltadeaths}</td>
                                            <td className='lightgreen'>{curr.deltarecovered}</td>
                                            <td>{curr.lastupdatedtime}</td>
                                        </tr>
                                    );
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}
export default Statewise;