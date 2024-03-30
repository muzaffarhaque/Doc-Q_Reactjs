import React, { useEffect, useState } from 'react';
import { data } from './data';
import './find_a_doctor.css';
import { useLocation } from 'react-router-dom';

const FindADoctor = () => {
  const location=useLocation()
  const param=new URLSearchParams(location.search)
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const searchTerm=(param.get('search')??'');
  useEffect(() => {
    const filtered = data.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [searchTerm]);

  const renderStars = (rating) => {
    const yellowStars = rating;
    const greyStars = 5 - rating;
    const stars = [];

    for (let i = 0; i < yellowStars; i++) {
      stars.push(<img key={i} src="src/assets/images/doctor_imgs/yellow_star.png" alt="Yellow Star" />);
    }

    for (let j = 0; j < greyStars; j++) {
      stars.push(<img key={j + yellowStars} src="src/assets/images/doctor_imgs/grey_star.png" alt="Grey Star" />);
    }

    return stars;
  };

  return (
    <>
      <div className="doctors-container">
        <div className="heading">
          <p>Top Specialist In Neurology</p>
        </div>
        <div className="scroll-x">
          <div className="titles-container">
            <div className="headings">
              <p className='mle-20'>Doctors Name</p>
              <p className='mre-5'>Ratings</p>
              <p className='mre-3'>Service</p>
            </div>
            <div className="doctor-list">
              {filteredDoctors.map((doctor, index) => (
                <div key={index} className='single-doctor'>
                  <div className="img-container">
                    <img src={doctor.img} alt="" />
                  </div>
                  <div className="details">
                    <p className='name'>{doctor.name}</p>
                  </div>
                  <div className="stars">
                    {renderStars(doctor.ratings)}
                  </div>
                  <div className="exp">
                    <p>Experience: <span>{doctor.experience}</span> years</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindADoctor;
