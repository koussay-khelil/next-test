import React from "react"


const LearningMethod = ({data}) => {
    return(
    <>
<div className="learning-method day-at-gmc__section">
        <div className="learning-method__textual">
            <h2 className="day-at-gmc__title learning-method__title"><img className="day-at-gmc__arrow" src={process.env.API_URL + data.arrow.url} alt="arrow" />{data.learn_section.section[3].title}</h2>
            <p className="day-at-gmc__description learning-method__description" dangerouslySetInnerHTML={{ __html: data.learn_section.section[3].description }}>
                </p>
        </div>
        <div className="learning-method__image"><img src={process.env.API_URL + data.learn_section.section[3].day_gmc.url} alt="learn" /></div>
    </div>

    </>
)
}
export default LearningMethod