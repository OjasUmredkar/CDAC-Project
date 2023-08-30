import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
function AddMonuments() {
    const [monument, setMonument] = useState({
        name: "",
        description: "",
        city: "",
        state: "",
        historicalPeriod: ""
    
      });
      
      const [errors, setErrors] = useState({});
    
      const history = useHistory();
    
      const handleAddMonument = async (e) => {
        const url = `http://localhost:8080/monument`;
        e.preventDefault();
        
        const validationErrors = {};
    
        if (!monument.name) {
          validationErrors.firstName = "Name is required";
        }
        if (!monument.description) {
          validationErrors.lastName = "Description is required";
        }
        if (!monument.city) {
          validationErrors.firstName = "City is required";
        }
        if (!monument.state) {
          validationErrors.lastName = "State is required";
        }
        if (!monument.historicalPeriod) {
          validationErrors.lastName = "HistoricalPeriod is required";
        }
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          
          return;
        }

            const mon = await axios.post(url, monument).then(history.push('/adminOperations')).catch(console.error(errors));
            console.log(mon.data);
         
            
          
    
       
    
      }
  return (
    <>
    <div className="container" >
          <h1><center>Add New Monument</center></h1><br />
          <form onSubmit={handleAddMonument} >
            <div className="form-row ">
              <div className="form-group col-md-8 ">
                <b >Name:</b>
                <input type="text" className="form-control" value={monument.name} onChange={(e) =>setMonument( {...monument, name : e.target.value})} />
              </div><br />
              <div className="form-group col-md-8 ">
                <b >Description:</b>
                <input type="text" className="form-control" value={monument.description} onChange={(e) => setMonument({ ...monument, description : e.target.value })} />
              </div><br />
              <div className="form-group col-md-8">
                <b >City:</b>
                <input type="text" className="form-control" value={monument.city} onChange={(e) => setMonument({ ...monument, city: e.target.value })} />
              </div>
            </div><br />
            <div className="form-group col-md-8" >
              <b >State:</b>
              <input type="text" className="form-control" value={monument.state} onChange={(e) => setMonument({ ...monument, state: e.target.value })} />
            </div><br />

            <div className="form-group col-md-8" >
              <b >Historical Period:</b>
              <input type="text" className="form-control" value={monument.historicalPeriod} onChange={(e) => setMonument({ ...monument, historicalPeriod: e.target.value })} />
            </div><br />

            <button type="submit" className="btn btn-primary ">Add</button><br /><br />

          </form>
        </div>
    </>
  )
}

export default AddMonuments