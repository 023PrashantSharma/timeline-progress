import logo from './logo.svg';
import './scss/app.scss';
import StepFirst from './img/step-1.png';
import StepSecond from './img/step-2.png';
import StepThird from './img/step-3.png';
import StepForth from './img/step-4.png';

function App() {
  function firstStep() {
    var first = document.getElementById("first");
    first.classList.add("first");
    var second = document.getElementById("second");
    second.classList.add("half-circle");
    document.getElementById("FirstStepIllustration").style.display = "flex";

  }
  function secondStep() {
    var first = document.getElementById("second-line-2");
    first.classList.add("second-line-2");
    var second = document.getElementById("second-curve");
    second.classList.add("second-curve");
    document.getElementById("first-complete").style.display = "block";
    document.getElementById("FirstStepIllustration").style.opacity = "0.2";
    document.getElementById("SecondStepIllustration").style.display = "flex";

  }
  function thirdStep() {
    var first = document.getElementById("right-child");
    first.classList.add("right-child");
    var second = document.getElementById("third-circle");
    second.classList.add("third-circle");
    document.getElementById("second-complete").style.display = "flex";
    document.getElementById("SecondStepIllustration").style.opacity = "0.2";
    document.getElementById("ThirdStepIllustration").style.display = "flex";

  }

  function forthStep() {
    var first = document.getElementById("forth-upper");
    first.classList.add("forth-upper");
    var second = document.getElementById("forth-curve-child");
    second.classList.add("forth-curve-child");
    document.getElementById("third-complete").style.display = "flex";
    document.getElementById("forth-complete").style.display = "flex";
    document.getElementById("ThirdStepIllustration").style.opacity = "0.2";
    document.getElementById("ForthStepIllustration").style.display = "flex";

  }

  return (
    <>
      <div className='main-body'>
        <div className='aside'>
          <button onClick={firstStep}>Step-1</button>
          <button onClick={secondStep}>Step-2</button>
          <button onClick={thirdStep}>Step-3</button>
          <button onClick={forthStep}>Step-4</button>
        </div>
        <div className='bside'>
          <div className='center-container'>
            <div className='child-container-upper'>
              <p style={{color:"white", fontWeight:"bold"}}> Timeline Step Progress</p>

              <div className='first-step'>
                <div className='upper'>
                  <div id="first">
                  </div>
                  <div className='second-upper-line'>
                    <div id="second-curve">
                    </div>
                    <div id="second-line-2">
                    </div>
                    <p id="first-complete" style={{ display: "none", margin: "20px -280px 20px 20px", color: "white", fontWeight: "bold" }}>Completed first Step</p>
                  </div>
                </div>
                <div className="second">
                  <div id='second'></div>
                </div>
              </div>
              <div className='second-step'>
                <div className='third-step'>
                  <div className='third-child-left'>
                    <p id="second-complete" style={{ display: "none", marginBottom: "50px", marginRight: "100px", justifyContent: "end", color: "white", fontWeight: "bold" }}>Completed second Step</p>
                    <div className='forth-parent'>
                      <div className='forth-curve'>
                        <div id='forth-curve-child'>

                        </div>

                      </div>
                      <div className='forth-step'>
                        <div id='forth-upper'>

                        </div>
                        <div className='forth-bottom'>
                          <p id="forth-complete" style={{ display: "none", margin: "50px 50px 0px 50px", color: "white", fontWeight: "bold" }}>Completed</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className='third-child-right'>
                    <div id='right-child'>
                    </div>
                    <p id="third-complete" style={{ display: "none", alignItems: "center", justifyContent: "center", margin: "56px 0px 0px 0px", color: "white", fontWeight: "bold" }}>Completed third Step</p>

                  </div>
                  <div className='third-child-end'>
                    <div id='third-circle'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='child-container-bottom'>
              <div className='bottom-illustation'>
                <div className='illustration-step'>
                  <img src={StepFirst} id='FirstStepIllustration' style={{ display: "none" }} />
                </div>
                <div className='illustration-step' >
                  <img src={StepSecond} id='SecondStepIllustration' style={{ display: "none" }} />
                </div>
                <div className='illustration-step'>
                  <img src={StepThird} id='ThirdStepIllustration' style={{ display: "none" }} />
                </div>
                <div className='illustration-step'>
                  <img src={StepForth} id='ForthStepIllustration' style={{ display: "none" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
