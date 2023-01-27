import axios from "axios";
import React, { useEffect, useState } from "react";

const PortfolioData = () => {

const [tableData, setTableData] = useState();

const handleDataUpdate = () => {
    axios.get('http://localhost:8000/api/protfolioData').then((res) => {
        console.log('DATA ===>',res.data);
        setTableData(res.data)
    }).catch((error) => console.log("Error Msg", error))
}

// console.log("Table", tableData)

useEffect(() => {
    handleDataUpdate();
  }, [])

return (
    <div>
       {tableData && tableData.map((data, index) => {
        return (
            <ul key={index}>
                <li>{data.Scrip}</li>
                <li>{data.Unrealized_P_L}</li>
                <li>{data.Return}</li>
                <li>{data.Quantity}</li>
                <li>{data.Price}</li>
                <li>{data.Portfolio_Value}</li>
                <li>{data.Invested_Amount}</li>
                <li>{data.Avg_Cost}</li>
            </ul>
        )
       })}
    </div>
)
}

export default PortfolioData;