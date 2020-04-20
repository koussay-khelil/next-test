import React from "react"


const Plateform = ({data}) => {
    return(
    <>
          
          <div className="day-at-gmc__section-container">
    <div className="day-at-gmc__section day-at-gmc__section-three">
        <div className="day-at-gmc__community-textual" size="6">
            <h2 className="day-at-gmc__title"><img className="day-at-gmc__arrow" src={process.env.API_URL + data.arrow.url} alt="arrow" />{data.learn_section.section[2].title}</h2>
            <p className="day-at-gmc__description" dangerouslySetInnerHTML={{ __html: data.learn_section.section[2].description }}>
                </p>
            <div className="call-to-action day-at-gmc__button"><a className="call-to-action__link" href="/notre-plateforme">Visiter ADA</a></div>
        </div>
        <div className="day-at-gmc__ADA-photo" size="6"><img src={process.env.API_URL + data.learn_section.section[2].day_gmc.url} alt="ada" /></div>
    </div>
</div>


    </>
)
}
export default Plateform