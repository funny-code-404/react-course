import { Component } from 'react'
import { TITLE_CARD_1, TITLE_CARD_2, TITLE_CARD_3 } from './const'
import './Main.css'

function sum(a, b) {
  return a + b
}

class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="container container_main">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>0{sum(0, 1)}</h2>
                <h3>{TITLE_CARD_1}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore?
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>0{sum(1, 1)}</h2>
                <h3>{TITLE_CARD_2}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore?
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>0{sum(2, 1)}</h2>
                <h3>{TITLE_CARD_3}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, totam velit? Iure nemo labore inventore?
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export { Main }
