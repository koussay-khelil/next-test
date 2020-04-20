import React from "react"


const Apply = ({data}) => {
    return(
    <>
<div className="apply" id="apply">
    <div className="md-grid application-container">
        <div className="md-cell md-cell--4 section-left text">
            <h2 className="day-at-gmc__title learning-method__title"><img className="day-at-gmc__arrow" src={process.env.API_URL + data.arrow.url} alt="arrow" />Inscrivez-vous pour nous rejoindre</h2>
            <p className="day-at-gmc__description"><strong>Réservez votre place dés aujourd'hui !</strong></p>
        </div>
 
    </div>
</div>

    </>
)
}
export default Apply