import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { content } from './JsonObj';
import '../CSS/style.css'
import Reviews from './Reviews';
function DisplayMonument() {
  let { id } = useParams();
  console.log("id=" + id)
  // Assuming content is an array of monuments
  const monument = content[0].indian_monuments.find(monument => monument.id === parseInt(id));
  console.log(monument)
  if (!monument) {
    return <div>Monument not found.</div>;
  }

  return (
    <>
    
    <div>
    <Link className="btn btn-primary my-2 mx-3" aria-current="page" to="/monuments">
                                    Home
                                </Link>
      <div className="text-center">
      <h1 className='title-monument my-5'>{monument.name.toUpperCase()}</h1>
        <figure class="figure">
  <img src={monument.image} class="figure-img img-fluid rounded photo-size" alt="A generic square placeholder image with rounded corners in a figure."/>
  <figcaption class="figure-caption text-right"></figcaption>
</figure>
        <p className='my-5 description'>{monument.description}</p>
        <Link to={"/bookticket/"+id} className="btn btn-primary">
              Book Ticket
      </Link><br/><br/>
      </div>
      
    </div>
    
    </>
  );
}

export default DisplayMonument;
