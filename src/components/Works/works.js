import React from 'react';
import './works.css';
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project2.png';
import Project3 from '../../assets/Project3.png';

const Works = () => {
  return (
    <section id='works'>
       <h2 className="worksTitle">My Projects</h2>
       <span className="WorkDesc">Lorem</span>
       <div className="worksImgs">
        <img src={Project1} alt="" className="worksImg" />
        <img src={Project2} alt="" className="worksImg" />
        <img src={Project3} alt="" className="worksImg" />
       </div>
       <button className="workBtn">See More</button>
    </section>
    );
}

export default Works;