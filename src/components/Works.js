const Works=()=>{
  return(
    <div className="wrapper works" id="works">
      <h2 className="wrapper">Our Works</h2>
      <h3 className="wrapper">
          With a full range of services, all in one place, we help you reach the right audience at the right time thereby increase your customer base and long term profits.
      </h3>
      <ul className="wrapper">
        <li ontouchstart="this.classList.toggle('hover');">
            <div className="front" style={{backgroundImage: "url(images/slide1.jpg)"}}></div>
            <div className="back">
                <h5 className="wrapper">Mindgraph</h5>
                <p>
                    Create intelligent digital journeys with data driven actions in combination of Human and AI power.
                </p>
                <a>See More</a>
            </div>
        </li>
        <li ontouchstart="this.classList.toggle('hover');">
            <div className="front"></div>
            <div className="back">
                <h5 className="wrapper">Janataflix</h5>
                <p>
                    Janata Flix is the Unique & leading provider of online Internet video delivery solutions in connecting Rural & Semi Urban Areas.
                </p>
                <a>See
                    More</a>
            </div>
        </li>
        <li ontouchstart="this.classList.toggle('hover');">
            <div className="front"></div>
            <div className="back">
                <h5 className="wrapper">Momtech Services</h5>
                <p>
                    A digital marketing Agency to construct and acquire your marketing strategies based on your desires
                </p>
                <a>More</a>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Works;