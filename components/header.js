import React from "react"


const Header = ({data}) => {
    return(
    <>
          
          <div className="game-part-time summer-academy">
  <div className="game-part-time__header" style={{backgroundImage: "url" +"(" + process.env.API_URL + data.image.url+")"}}>
    <div className="game-part-time__header-top special-header-top">
      <div className="game-part-time__illustration application-form-header">
       
      </div>
      <h2 className="game-part-time__title">
       {data.title} <span className="game-part-time__important-text">{data.red_title}</span>
      </h2>
      <p className="game-part-time__description">
          {data.description}
        <br />
        <br />
      </p>
      <div className="call-to-action game-part-time__button">
        <a className="scroll call-to-action__link" href="#apply">Rejoindre</a>
      </div>
      <div className="content-form application-form-header-responsive">
        <div className="header-form-header">Inscrivez-vous pour nous rejoindre</div>
        <div className="header-form-header-body">
          <div id='applyForm3'></div>
        </div>
    </div>
  </div>

  </div>
</div>


    </>
)
}
export default Header