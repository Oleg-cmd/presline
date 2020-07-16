const Slider = () => (
    <div className="container-fluid slider">
    <div id="PreslineSlider" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#PreslineSlider" data-slide-to="0" className="active"></li>
        <li data-target="#PreslineSlider" data-slide-to="1"></li>
        <li data-target="#PreslineSlider" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">

        <div className="carousel-item active img-div">
          <img className="d-block img-fluid img-s" src="../static/img/1.webp" alt=""/>
        </div>

        <div className="carousel-item img-div">
          <img className="d-block img-fluid img-s" src="../static/img/2.webp" alt=""/>
        </div>

        <div className="carousel-item img-div">
          <img className="d-block img-fluid img-s" src="../static/img/3.webp" alt=""/>
        </div>
      </div>
      <a className="carousel-control-next" href="#PreslineSlider" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <a className="carousel-control-prev" href="#PreslineSlider" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
     </div>
    </div>
)
export default Slider