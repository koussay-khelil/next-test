import React from "react"


const Community = ({data}) => {
    return(
    <>
<div className="day-at-gmc__section-container">
        <div className="day-at-gmc__section day-at-gmc__section-two">
            <div className="day-at-gmc__community-photo" size="5"><img src={process.env.API_URL + data.learn_section.section[1].day_gmc.url} alt="community" /></div>
            <div className="day-at-gmc__community-textual" size="7">
                <h2 className="day-at-gmc__title"><img className="day-at-gmc__arrow" src={process.env.API_URL + data.arrow.url} alt="arrow" />{data.learn_section.section[1].title}</h2>
                <p className="day-at-gmc__description" dangerouslySetInnerHTML={{ __html: data.learn_section.section[1].description }}>
                </p>
                <div className="call-to-action day-at-gmc__button"><a className="scroll call-to-action__link" href="#apply">Nous rejoindre</a></div>
            </div>
        </div>
    </div>

    </>
)
}
export default Community