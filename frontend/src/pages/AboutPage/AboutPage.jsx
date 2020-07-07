import React from "react";
import "./AboutPage.scss";


const AboutPage = () => {
    return (
        <div className="aboutPage">
            <div className="aboutPage__headline">
                <h1>Who are we and why are we doing this?</h1>    
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error inventore assumenda cumque similique explicabo praesentium asperiores delectus placeat enim? Sunt ad veritatis totam magnam mollitia. Saepe repellendus ab porro blanditiis.</h4>
            </div>

            <div className="aboutPage__first">
                <img className="aboutPage__img" src={require("../../img/dry.jpg")} alt="dryNature"/>
                <p className="aboutPage__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque molestiae, iste aut eius quo blanditiis et, delectus, consequuntur nulla qui! Sequi molestiae deleniti, placeat et reprehenderit distinctio impedit quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, accusantium ullam, laboriosam maxime, optio cupiditate laborum vel ipsam quidem reiciendis impedit magni minima consequuntur labore tempore placeat earum voluptatibus delectus?</p>
            </div>

            <div className="aboutPage__second">
                <p className="aboutPage__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolores ipsa a in excepturi neque hic, officiis, aperiam beatae sit iste repudiandae voluptates id aut vel quaerat nesciunt eos autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo, illum ratione sit voluptatem rerum dolorem earum quasi repudiandae, vel nesciunt impedit ipsam beatae ex facere placeat alias id dolore!
                </p>
                <img className="aboutPage__img" src={require("../../img/green.jpg")} alt="greenNature"/>
            </div>
        </div>
    );

};

export default AboutPage;