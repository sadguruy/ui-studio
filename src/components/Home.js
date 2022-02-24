const Home=()=>{
  return(
    <div className="wrapper homeslider" id="home">
      <div id="slider" className="carousel carousel-fade slide" data-interval="5000" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active" style={{backgroundImage: "url(images/slide1.jpg)"}}></div>
        </div>
      </div>
      <div className="banner_text">
        <h1 className="wrapper">
          We accelerate your <br />Business with
          <span className="textScroll">
            <div id="textScroll" className="carousel carousel-fade slide" data-interval="5000"
              data-ride="carousel">
              <div className="carousel-inner">
                <div className="item active first">
                  <div>Passion</div>
                </div>
                <div className="item second">
                  <div>Precision</div>
                </div>
                <div className="item third">
                  <div>Perfection</div>
                </div>
              </div>
            </div>
          </span>
        </h1>
      </div>
    </div>
  )
}
export default Home;