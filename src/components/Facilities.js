import * as React from 'react'; 
import './fac.css'; 
import { useNavigate } from 'react-router-dom'
const College = () => {
  const navigate = useNavigate(); 
  
  const handleClick1 = () => {
    navigate("/FoodCourt");
  }
    const handleClick2 = () => {
        navigate("/Gym");
    }
        const handleClick3 = () => {
            navigate("/Library");
  }
        const handleClick4 = () => {
            navigate("/IndoorStadium");
  }
        const handleClick5 = () => {
            navigate("Lab");
  }
        const handleClick6 = () => {
            navigate("Hostel");
  }
        const handleClick7= () => {
            navigate("Mess");
  }
        const handleClick8 = () => {
            navigate("Transport");
  }

  return (
    <div className="gallery-container">
        
        <div className="fd" id='1'>
        <img className="artwork-image" src='https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' alt='im1'></img>
        <div className="exhibit-details">
           <br></br>
          <p className="artist-name">Food Court</p>
          <br></br> <br></br>
          <button onClick={handleClick1} className="Go-button">View</button>
        </div>
      </div>
      <div className="fd" id='2'>
        <img className="artwork-image" src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww' alt='im2'></img>
        <div className="exhibit-details">
        <br></br>
          <p className="artist-name">Gym</p>
          <br></br><br></br>
         
          <button onClick={handleClick2} className="Go-button">view</button>
        </div>
      </div>
      <div className="fd" id='3'>
        <img className="artwork-image" src='https://static.vecteezy.com/system/resources/thumbnails/024/620/270/small/aisle-of-textbooks-in-a-modern-library-illuminated-for-studying-generated-by-ai-photo.jpg' alt='im3'></img>
        <div className="exhibit-details">
        <br></br>
          <p className="artist-name">Library</p>
          <br></br><br></br>
          <button onClick={handleClick3} className="Go-button">view</button>
        </div>
        
      </div>

      <div className="fd" id='4'>
        <img className="artwork-image" src='https://www.monolithic.org/vault/img/2011/05/10/4dc92b85c29e068473000b49/large/crn01.jpg' alt='im1'></img>
        <div className="exhibit-details">
        <br></br>
          <p className="artist-name">Indoor Stadium</p>
          <br></br><br></br>
          <button onClick={handleClick4} className="Go-button">View</button>
          </div>
          </div>

      <div className="fd" id='5'>
        <img className="artwork-image" src='https://wallpaperaccess.com/full/1483960.jpg' alt='im1'></img>
        <div className="exhibit-details">
        <br></br>
          <p className="artist-name">Laboratory</p>
          <br></br><br></br>
          
         
          <button onClick={handleClick5} className="Go-button">View</button>
        </div>
        </div>

      <div className="fd" id='6'>
        <img className="artwork-image" src='https://milgrasp.com/img/sections/features/hostel_management1.jpg' alt='im1'></img>
        <div className="exhibit-details">
        <br></br>
          <p className="artist-name">Hostel</p>
          <br></br><br></br>
          
         
          <button onClick={handleClick6} className="Go-button">View</button>
        </div>
      </div>
      <div className="fd" id='7'>
        <img className="artwork-image" src='https://www.olivegreens.co.in/images/Olive_Greens_Mess_1.jpg' alt='im1'></img>
        <div className="exhibit-details">
        <br></br>
          <p className="artist-name">Mess</p>
          <br></br><br></br>
          
         
          <button onClick={handleClick7} className="Go-button">View</button>
        </div>
      </div>
      <div className="fd" id='8'>
        <img className="artwork-image" src='https://kvmpharmacycollege.in/wp-content/uploads/2019/11/Bus.jpg' alt='im1'></img>
        <div className="exhibit-details">
        <br></br>
          <p className="artist-name">Transport</p>
          <br></br><br></br>
          
         
          <button onClick={handleClick8} className="Go-button">View</button>
        </div>
      </div>
    </div>
  )
}

export default College