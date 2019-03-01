import React, { Component } from "react";
import { Link } from "react-router-dom";

class Intro extends Component {
  render() {
    return (
      <div>
        <section
          style={{ backgroundColor: "#72CC72"}}
          class="hero is-success is-fullheight"
        >
          <div class="hero-body container">
            <div class="container center" style={{ textAlign: "center"}}>
              <img
                src="https://i.imgur.com/wwvf3x0.png"
                alt="logo"
                width="300px"
                style={{ marginBottom: "20px"}}
              />
              <h1 class="subtitle">"Stash now...Use later"</h1>

              <div>
                <img
                  src="https://i.imgur.com/bu8hfPT.png"
                  alt="logo"
                  width="250px"
                />
                <br />
                <img
                  src="https://i.imgur.com/HcA3R82.png"
                  alt="logo"
                  width="250px"
                />
                <br />
                <Link to="/sign-up">Don't have an account?</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Intro;
