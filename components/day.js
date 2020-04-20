import React from "react"
import ReactMarkdown from "react-markdown";

const Day = ({data}) => {
    return(
    <>
<div className="day-at-gmc__section-container">
    <div className="day-at-gmc__section day-at-gmc__section-one">
        <div className="day-at-gmc__textual day-at-gmc__textual-margin" size="6">
            <h2 className="day-at-gmc__title"><img className="day-at-gmc__arrow" src={process.env.API_URL + data.arrow.url} alt="arrow" />{data.learn_section.section[0].title}</h2>
            <p className="day-at-gmc__description" dangerouslySetInnerHTML={{ __html: data.learn_section.section[0].description }}>
                
                </p>
            <div className="call-to-action day-at-gmc__button"><a className="scroll call-to-action__link" href="#apply">Nous rejoindre</a></div>
        </div>
        <div className="day-at-gmc__image" size="6"><img src={process.env.API_URL + data.learn_section.section[0].day_gmc.url} alt="day at gmc" /></div>
    </div>
</div>



    </>
)
}
export default Day