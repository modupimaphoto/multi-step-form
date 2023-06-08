import { useState, useEffect } from 'react';

import YourInfo from './yourInfo';
import SelectPlan from './selectPlan';
import AddOns from './addOns';
import Summary from './summary';
import ThankYou from './thankYou';

const Steps = ({ step }) => {
  
  
  if(step === 1){

    return <YourInfo />;
  }else if(step === 2){

    return <SelectPlan />;
  }else if(step === 3){

    return <AddOns />;
  }else if(step === 4){

    return <Summary />;
  }else{

    return <ThankYou />;
  }
}

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }
  const prevStep = () => {
    setStep(step - 1);
  }

  useEffect(() => {
    const navigation = document.querySelector(".navigation");
    if(step === 5){
      navigation.style.display = 'none';
    }

    const step1 = document.querySelector("#step-1");
    const step2 = document.querySelector("#step-2");
    const step3 = document.querySelector("#step-3");
    const step4 = document.querySelector("#step-4");

    if(step === 1){
      step1.classList.add('active-step');
      step2.classList.remove('active-step');
    }else if(step === 2){
      step1.classList.remove('active-step');
      step2.classList.add('active-step');
      step3.classList.remove('active-step');
    }else if(step === 3){
      step2.classList.remove('active-step');
      step3.classList.add('active-step');
      step4.classList.remove('active-step');
    }else{
      step3.classList.remove('active-step');
      step4.classList.add('active-step');
    }
  },[step])

  return (
    <>
      <div className="wrapper">
        <div className="row">
          <div className="col-md-4 sidebar">
            <div className="d-inline-block d-md-flex align-items-center step">
                <h5 id="step-1" className="">1</h5>
                <div>
                    <h6>Step 1</h6>
                    <p>
                        Your info
                    </p>
                </div>
            </div>
            <div className="d-inline-block d-md-flex align-items-center step">
              <h5 id="step-2" className="">2</h5>
              <div>
                  <h6>Step 2</h6>
                  <p>
                      Select plan
                  </p>
              </div>
            </div>
            <div className="d-inline-block d-md-flex align-items-center step">
              <h5 id="step-3" className="">3</h5>
              <div>
                  <h6>Step 3</h6>
                  <p>
                      ADD-ONS
                  </p>
              </div>
            </div>
            <div className="d-inline-block d-md-flex align-items-center step">
              <h5 id="step-4" className="">4</h5>
              <div>
                  <h6>Step 4</h6>
                  <p>
                      Summary
                  </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 main-content">
            <div className="container">

              <div id="display-content">
              
                <Steps step={ step } />

              </div>
              
              <div className="navigation">
                <div >
                  <div className="d-flex justify-content-between">
                    <div>
                      { (step === 1) ? '' : <button className="prev-btn" onClick={ prevStep }>Go back</button> }
                    </div>
                    <div>
                      <button className="next-btn" onClick={ nextStep }>Next step</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/modupimaphoto">modupimaphoto</a>.
      </div>
    </>
  );
}

export default App;
