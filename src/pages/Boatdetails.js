import Carousel from "react-bootstrap/Carousel";
import boatsinfo from "../data/boats.json";
import NavBar from "../components/navbar";
import NavBarBootstrap from "../components/BootstrapNav";
import Footer from "../components/footer";

export function BoatDetails({ bote }) {
  return (
    <>
      <NavBarBootstrap></NavBarBootstrap>
      <section className="details mt-5">
        <div className="container flex-start">
          <article className="features">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg1}
                  alt="1"
                  key="1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg2}
                  alt="2"
                  key="2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg3}
                  alt="3"
                  key="3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg4}
                  alt="4"
                  key="4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg5}
                  alt="5"
                  key="5"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bote.detailImg6}
                  alt="6"
                  key="6"
                />
              </Carousel.Item>
            </Carousel>
            <div className="pics-holder">
              <div className="pics-slider flex-between" id="pics-slider"></div>
            </div>
            <article className="boat-specific">
              <h3>{bote.tittle}</h3>
              <div className="Specifications">
                <div className="feat">
                  <span className="key">Marca:</span>
                  <span className="value">{bote.marca} </span>
                </div>
                <div className="feat">
                  <span className="key">Material Casco:</span>
                  <span className="value">{bote.materialCasco}</span>
                </div>
                <div className="feat">
                  <span className="key">Año:</span>
                  <span className="value">{bote.año}</span>
                </div>
                <div className="feat">
                  <span className="key">Modelo Motor:</span>
                  <span className="value">{bote.modeloMotor}</span>
                </div>
                <div className="feat">
                  <span className="key">Largo:</span>
                  <span className="value">{bote.largo}</span>
                </div>
                <div className="feat">
                  <span className="key">Vel Max:</span>
                  <span className="value">{bote.velMax}</span>
                </div>
                <div className="feat">
                  <span className="key">Length:</span>
                  <span className="value">{bote.length}</span>
                </div>

                <div className="feat">
                  <span className="key">Pasajeros:</span>
                  <span className="value">{bote.pasajeros}</span>
                </div>

                <div className="feat">
                  <span className="key">Tipo de combustible:</span>
                  <span className="value">Diesel</span>
                </div>
              </div>
              <div className="datails-nav">
                <ul className="nav flex-between">
                  <li className="OverView active">Descripción</li>
                  <li className="Features-Services">Features &amp; Services</li>
                  <li className="Reviews">Reviews</li>
                </ul>
              </div>
              <div>
                <div className="mt-4">
                  <p>{bote.descripcion}</p>
                </div>
                <div className="features-click item">
                  <ul className="features flex-between">
                    <li>{bote.caracteristicas.carac1}</li>
                    <li>{bote.caracteristicas.carac2}</li>
                    <li>{bote.caracteristicas.carac3}</li>
                    <li>{bote.caracteristicas.carac4}</li>
                    <li>{bote.caracteristicas.carac5}</li>
                    <li>{bote.caracteristicas.carac6}</li>
                    <li>{bote.caracteristicas.carac7}</li>
                    <li>{bote.caracteristicas.carac8}</li>
                  </ul>
                </div>
                <div className="reviews-click item">
                  <div className="review one">
                    <h4>Johannes Kepler</h4>
                    <span>24 Sep 2019</span>
                    <ul className="stars">
                      <li className="clicked">
                        <i className="fa-solid fa-star" />
                      </li>
                      <li className="clicked">
                        <i className="fa-solid fa-star" />
                      </li>
                      <li className="clicked">
                        <i className="fa-solid fa-star" />
                      </li>
                      <li className="clicked">
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                    </ul>
                    <p>
                      Duis ante magna, aliquet sit amet sagittis vitae,
                      tristique at lacus. Ut et accumsan turpis. Phasellus
                      ornare, tortor ut congue imperdiet, mauris magna
                      condimentum nulla, non malesuada mauris massa eu augue.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </article>
          <article className="seller-info">
            <div className="price">
              <div className="holder">
                <h2>{bote.tittle} </h2>
              </div>
              <div className="payment">
                <h3>{bote.value}</h3>
                <p>Included Taxes &amp; Checkup*</p>
              </div>
            </div>
            <div className="seller-data">
              <div className="name flex-between">
                <img src="../Imgs/yteam001.jpg" alt="Seller" />
                <div className="data">
                  <span className="seller-name">Carlos Calderón</span>
                  <span className="Membership">Dueño NauticaCalderon</span>
                </div>
              </div>
              <div className="number-social">
                <span className="contact">Número de contacto </span>
                <span>
                  <a href="tel:+1 (258) 403 7961" className="number">
                    1 (258) 403 7961
                  </a>
                </span>
                <div className="social">
                  <a href="#">
                    {" "}
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-seller">
              <h3>Mensaje al vendedor</h3>
              <form action="#">
                <input
                  type="text"
                  name="name"
                  id="client-name"
                  placeholder="Nombre"
                  required=""
                />
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  placeholder="Deja Tu Mensaje"
                  required=""
                  defaultValue={""}
                />
                <input
                  type="submit"
                  defaultValue="Send Message Now"
                  id="send-message"
                />
              </form>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}