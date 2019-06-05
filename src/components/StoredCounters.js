import React from "react";

const StoredCounters = (props) =>{
    return (
        <div id="stored-counters" className="stored-counters">
            <hr/>
            <strong> Stored Counters : </strong>
            <br/>
            <ul>
            {
                props.values.map((value,key)=>{
                return (
                    <li key={key}>
                        {value}  
                    </li>
                    )  
                })
            }
            </ul>
        </div>
    )
}

export default StoredCounters;