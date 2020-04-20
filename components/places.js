

import React from "react"


const Places = ({data}) => {
    return(
    <>
<div className="where-it-happens-container">
 <div className="where-it-happens">
     <div className="where-it-happens__header">
         <h2 className="day-at-gmc__title where-it-happens__title-one"><img className="day-at-gmc__arrow" src={process.env.API_URL + data.arrow.url} alt="arrow" />{data.hackerspace.title}</h2>
         <p className="day-at-gmc__description where-it-happens__description" dangerouslySetInnerHTML={{ __html: data.hackerspace.description }}>
             </p>
     </div>
     <div className="where-it-happens__images-container">
         <div className="where-it-happens__tunis where-it-happens__image">
             <div className="where-it-happens__button"><a href="https://goo.gl/maps/Ay91HYfTNqH2" target="_blank"><span className="xkit-button"><button type="button" className="md-btn md-btn--flat md-btn--text md-pointer--hover md-text md-inline-block filled location-button" ><div className="md-ink-container"></div> Itinéraire </button></span></a></div><img src={process.env.API_URL + data.hackerspace.hackerspace_one.url} alt="Tunis" /></div>
         <div className="where-it-happens__sousse where-it-happens__image">
             <div className="where-it-happens__button"><a href="https://goo.gl/maps/EuiGZJtZ1fz" target="_blank"><span className="xkit-button"><button type="button" className="md-btn md-btn--flat md-btn--text md-pointer--hover md-text md-inline-block filled location-button" ><div className="md-ink-container"></div> Itinéraire </button></span></a></div><img src={process.env.API_URL + data.hackerspace.hackerspace_two.url} alt="Sousse" /></div>
         <div className="where-it-happens__sfax where-it-happens__image">
             <div className="where-it-happens__button last"><a href="https://goo.gl/maps/3zqw7UcUkGL2" target="_blank"><span className="xkit-button"><button type="button" className="md-btn md-btn--flat md-btn--text md-pointer--hover md-text md-inline-block filled location-button" ><div className="md-ink-container"></div> Itinéraire </button></span></a></div><img src={process.env.API_URL + data.hackerspace.hackerspace_three.url} alt="Sfax" /></div>
     </div>
 </div>
</div>
    </>
)
}
export default Places





 