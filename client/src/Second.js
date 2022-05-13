import React from 'react'
import Button from '@mui/material/Button';
import haircut from './haircut.jpg'

const Second = ({setPage}) => {
    
    const [prices, setPrices] = React.useState([])
    /*React.useEffect(() => {
        setPrices(fetch(`/prices`)
            .then(res => res.json())
        )
    },[])*/
    
    return (
        <div>
            <div style={{textAlign: "left"}}>
            <Button variant="outlined" onClick={() => setPage(1)}>Back</Button>
            </div>
            <div>
                <p>page 2</p>

                <p>Choose a what you want:</p> 
                
                <select name="cars" id="cars" multiple>
                <option value="haircut $20">haircut</option>
                <option value="beard $10">beard $10</option>
                <option value="line up $5">line up $5</option> 
                </select>
                <br></br>
                <img src={haircut} alt="Italian Trulli" width="800px"/>
                 <br></br>
                <input type="submit" value="Submit"></input>
            </div>
        </div>
    )
}

export default Second
