<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  <title>reAUSTIN</title>

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="assets/css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="assets/css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>
  <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">re<i class="fa fa-recycle" aria-hidden="true"></i>USTIN</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#" class="binButton">Bins</a></li>
        <li><a href="#" class="contributeButton">Contribute</a></li>
        <li><a href="#" class="signUpButton">Sign Up</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><a href="#binSection" class="binButton">Bins</a></li>
        <li><a href="index.html" class="contributeButton">Contribute</a></li>
        <li><a href="index.html" class="signUpButton">Sign Up</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>

  <div id="index-banner" class="parallax-container binHide">
    <div class="section no-pad-bot">
      <div class="container white-bg">
        <br><br>
        <h1 class="header center green-text text-darken-2">re<i class="fa fa-recycle" aria-hidden="true"></i>USTIN
        <div class="row center">
          <h5 class="header col s12 green-text light text-darken-2">r e d u c e  .  r e u s e  .  r e c y c l e</h5>
        </div>
        </h1>
        <div class="row center">
          <a href="#" class="btn-large waves-effect waves-light green binButton">Search for Bins</a>
        </div>
        <br><br>

      </div>
    </div>
    <div class="parallax"><img src="assets/img/background1.jpg" alt="Unsplashed background img 1"></div>
  </div>

  <div class="fluid-container" id="binSection" data-sec="index-banner">

      <!--  map will appear hear when search bins or bins is pressed   -->
    <div id="map"></div>
    <div class="row">
  <div  id='sideBarComments' class="col s12 push-s9 push-m11 hoverable circle valign-wrapper right">
  <div class="xbuttonIcon"><i class="fa fa-times fa-2x xbi"></i></div>
  <i class="material-icons small valign bbuttonIcon">view_list</i>
      <ul class="collapsible popout" data-collapsible="accordion">
        <li>
          <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
          <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
          <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
          <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
      </ul>
        
  </div>
  </div>
  </div>

      <!--  contribute will appear hear when contribute is pressed   -->
  <div class="parallax-container valign-wrapper binHide" id="contributeSection" data-sec="index-banner">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
          <h5 class="header col s12 light">The EPA estimates that 75% of the American waste stream is recyclable, but we only recycle about 30% of it.</h5>
        </div>
      </div>
    </div>
    <div class="parallax"><img src="assets/img/background2.jpg" alt="Unsplashed background img 2"></div>
  </div>

    <!--  contribute will appear hear when contribute is pressed   -->

  <div class="fluid-container binHide" id="signUpSection" data-sec="index-banner">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Sign Up</h4>
          <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>

    </div>
 


  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
        </div>
      </div>
    </div>
    <div class="parallax"><img src="assets/img/background3.jpg" alt="Unsplashed background img 3"></div>
  </div>
</div>

  <footer class="page-footer green">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac.</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Created by <a class="white-text" href="https://www.linkedin.com/in/mgnking
">Megan King</a>, <a class="white-text" href="https://www.linkedin.com/in/rjuner
">Rhea Rivera</a>, and <a class="white-text" href="https://www.linkedin.com/in/lisa-marie-watkins-3874a847
">Lisa Marie Watkins</a>
      </div>

  </footer>

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script   src="https://code.jquery.com/ui/1.12.0-rc.2/jquery-ui.min.js"   integrity="sha256-55Jz3pBCF8z9jBO1qQ7cIf0L+neuPTD1u7Ytzrp2dqo="   crossorigin="anonymous"></script>  
  <script src="assets/js/materialize.js"></script>
  <script src="assets/js/init.js"></script>
     <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAt7Yg8V-bdLFFOROU7my_lj1NjwqwXSt4">
    </script>

  <script src="assets/js/app.js"></script>
  <script src="https://use.fontawesome.com/57467f478c.js"></script>


  </body>
</html>
