

/* Initialization of datatable */




$(document).ready(function() {
  $('.sideMenuToggler').on('click', function() {
    $('.wrapper').toggleClass('active');
  });

  var adjustSidebar = function() {
    $('.sidebar').slimScroll({
      height: document.documentElement.clientHeight - $('.navbar').outerHeight()
    });
  };

  adjustSidebar();
  $(window).resize(function() {
    adjustSidebar();
  });
});

function displayIframe(){
  
  document.getElementById("divI").innerHTML=' <iframe class="responsive-iframe" src="tables2.html" frameborder="0"  style="overflow:hidden;height:600px;width:100%; margin: 50px auto 0 auto; padding: 1rem; background:white" height="100%" width="100%"></iframe>';
}


function displayIframe1(){
  document.getElementById("user").style.display="none";
  document.getElementById("doctor").style.display="none";
  document.getElementById("admin").style.display="none";
  document.getElementById("register").style.display="none";
  document.getElementById("divI").style.display="unset";

  
}

function editProfile(){

  var new_try=document.querySelectorAll('.container1');
  document.getElementById("register").style.display="unset";
  document.getElementById("divI").style.display="none";
  document.getElementById("admin").style.display="none";
  document.getElementById("doctor").style.display="none";
  document.getElementById("user").style.display="none";
  
  var dat=`<section>
  <div class="container">
    
    
    
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-8 col-xl-6">
        <div class="row">
          <div class="col text-center">
            <h1>Edit your details</h1>
            
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col mt-4">
            <input type="text" class="form-control" placeholder="Name">
          </div>
        </div>
        <div class="row align-items-center mt-4">
          <div class="col">
            <input type="email" class="form-control" placeholder="Email">
          </div>
        </div>
        <div class="row align-items-center mt-4">
          <div class="col">
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <div class="col">
            <input type="password" class="form-control" placeholder="Confirm Password">
          </div>
        </div>
        <div class="row justify-content-start mt-4">
          <div class="col">
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                I Read and Accept <a href="https://www.froala.com">Terms and Conditions</a>
              </label>
            </div>

            <button class="btn btn-primary mt-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`

      new_try[0].innerHTML=dat
  }



  function addAdmin(){

    var new_try=document.querySelectorAll('.container2');
    document.getElementById("admin").style.display="unset";
    document.getElementById("register").style.display="none";
    document.getElementById("divI").style.display="none";
    document.getElementById("doctor").style.display="none";
    document.getElementById("user").style.display="none";
    var dat=`<section>
  <div class="container">
    
    
    
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-8 col-xl-6">
        <div class="row">
          <div class="col text-center">
            <h1>Add admin</h1>
            
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col mt-4">
            <input type="text" class="form-control" placeholder="Name">
          </div>
        </div>
        <div class="row align-items-center mt-4">
          <div class="col">
            <input type="email" class="form-control" placeholder="Email">
          </div>
        </div>
        
        <div class="row align-items-center mt-4">
          <div class="col">
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <div class="col">
            <input type="password" class="form-control" placeholder="Confirm Password">
          </div>
        </div>
        <div class="row justify-content-start mt-4">
          <div class="col">
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                I Read and Accept <a href="https://www.froala.com">Terms and Conditions</a>
              </label>
            </div>

            <button class="btn btn-primary mt-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`

      new_try[0].innerHTML=dat
  }


  function addDoctor(){

    var new_try=document.querySelectorAll('.container3');
    document.getElementById("doctor").style.display="unset";
    document.getElementById("register").style.display="none";
    document.getElementById("divI").style.display="none";
    document.getElementById("admin").style.display="none";
    document.getElementById("user").style.display="none";
    var dat=`<section>
  <div class="container">
    
    
    
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-8 col-xl-6">
        <div class="row">
          <div class="col text-center">
            <h1>Add doctor</h1>
            
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col mt-4">
            <input type="text" class="form-control" placeholder="Name">
          </div>
        </div>
        <div class="row align-items-center mt-4">
          <div class="col">
            <input type="email" class="form-control" placeholder="Email">
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col mt-4">
            <input type="text" class="form-control" placeholder="Specialization">
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col mt-4">
            <input type="number" class="form-control" placeholder="fees">
          </div>
        </div>
        
        <div class="row align-items-center mt-4">
          <div class="col">
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <div class="col">
            <input type="password" class="form-control" placeholder="Confirm Password">
          </div>
        </div>
        <div class="row justify-content-start mt-4">
          <div class="col">
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                I Read and Accept <a href="https://www.froala.com">Terms and Conditions</a>
              </label>
            </div>

            <button class="btn btn-primary mt-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`

      new_try[0].innerHTML=dat
  }


  function seeProfile(){

    var new_try=document.querySelectorAll('.container4');
    document.getElementById("user").style.display="unset";
    document.getElementById("register").style.display="none";
    document.getElementById("divI").style.display="none";
    document.getElementById("admin").style.display="none";
    document.getElementById("doctor").style.display="none";
    var dat=` `

      new_try[0].innerHTML=dat
  }