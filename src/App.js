

function App() {
  return (
    <>
      <div class="wrapper">
        <div class="row">
          <div class="col-md-4 sidebar">
            <div class="d-inline-block d-md-flex align-items-center step">
                <h5>1</h5>
                <div>
                    <h6>Step 1</h6>
                    <p>
                        Your info
                    </p>
                </div>
            </div>
            <div class="d-inline-block d-md-flex align-items-center step">
              <h5>2</h5>
              <div>
                  <h6>Step 2</h6>
                  <p>
                      Select plan
                  </p>
              </div>
            </div>
            <div class="d-inline-block d-md-flex align-items-center step">
              <h5>3</h5>
              <div>
                  <h6>Step 3</h6>
                  <p>
                      ADD-ONS
                  </p>
              </div>
            </div>
            <div class="d-inline-block d-md-flex align-items-center step">
              <h5>4</h5>
              <div>
                  <h6>Step 4</h6>
                  <p>
                      Summary
                  </p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="container">

              <div id="display-content">
              
              </div>
              
              
              <div class="navigation">
                <div class="d-flex justify-content-between">
                  <div>
                    <button class="prev-btn" id="prev-btn">Go back</button>
                  </div>
                  <div>
                    <button class="next-btn" id="next-btn">Next step</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
      <div class="text-center p-3">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/modupimaphoto">modupimaphoto</a>.
      </div>
    </>
  );
}

export default App;
