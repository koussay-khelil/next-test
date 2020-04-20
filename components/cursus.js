import React from "react"


const Cursus = ({data}) => {
    return(
    <>
      <div className="game-part-time__main">
  <div className="curriculum" id="curriculum">
    <div className="md-grid curriculum-container">
      <div className="md-cell md-cell--12-phone md-cell--6-desktop section-left">
        <h2 className="day-at-gmc__title"><img className="day-at-gmc__arrow" src={process.env.API_URL +  data.arrow.url} alt="arrow" />Notre
          cursus</h2>
        <p className="day-at-gmc__description"> bla bla bla 
          <br/>
          <br/> bla bla bla </p>

      </div>
      <div className="md-cell md-cell--12-phone md-cell--6-desktop section-right text">
        <div className="curriculum-section">
          <div className="md-grid curriculum-header">
            <div className="cell-container" desktopsize="4" phonesize="1" onclick="openTabs(event, 'tab-content-1')">
              <div className="cell nav-link active"><span className="circle">●<span className="tech">Technologies</span></span>
              </div>
            </div>
            <div className="cell-container" desktopsize="4" phonesize="1" onclick="openTabs(event, 'tab-content-2')">
              <div className="cell nav-link "><span className="circle"> ●</span> Compétences</div>
            </div>
            <div className="cell-container" desktopsize="4" phonesize="1" onclick="openTabs(event, 'tab-content-3')">
              <div className="cell nav-link "><span className="circle"> ●</span> Pour Qui</div>
            </div>
          </div>
          <div className="curriculum-content">
            <div id="tab-content-1" className="tabcontent">
              <div className="title">Au cours de ce parcours, vous allez apprendre plusieurs technologies qui vous aideront
                à créer votre propre </div>

              <div className="md-grid technologies">
                {/* <%  (technologiesList || []).map(technology => { %>
                <div className="md-cell md-cell--2-phone md-cell--4-desktop technologies__image-container">
                  <div className="technology">
                    <div className="md-grid">
                      <div className="md-cell md-cell--2-desktop-offset"><img src=<%=  technology.img %> alt="logo"
                          width="64"></div>
                    </div>
                    <div className="technology-description"><%= technology.title %></div>
                    <div className="technology-price"></div>
                  </div>
                </div>
                <% }) %> */} 
              </div>
            </div>

            {/* <div id="tab-content-2" className="tabcontent">
              <%- include(skill,

            {
                collapseContent:collapseContent
            }

          ) %>
            </div>

            <div id="tab-content-3" className="tabcontent">
              <%- include(forWho,

           {
              collapseContent:collapseContentForWho
           }

        )   %>

            </div> */}

          </div>

        </div>
      </div>
    </div>
  </div>
</div>
    </>
)
}
export default Cursus