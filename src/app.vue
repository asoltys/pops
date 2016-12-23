<template>
    <div class="container-fluid" id="content" tabindex="-1">
      <header class="container">
        <div class="row">
          <div class="col-md-6">
            <router-link to="/home">
              <img src="/static/logo.png" width="200px" style="margin-bottom: 15px" />
            </router-link>
          </div>
          <div class="col-md-6 text-right USAIDLogo">
            <a href="https://www.usaid.gov" class=""><img src="https://www.usaid.gov/sites/all/themes/usaid/logo.png" alt="U.S. Agency for International Development"></a>
          </div>
        </div>
      </header>
      <div class="row">
        <div class="col-md-12 topnav">
          <topnav></topnav>
        </div>
      </div>
      <div class="row">
        <router-view></router-view>
      </div>
      <footer>
        <div class="row">
          <div class="col-md-12 footerbar">
          </div>
        </div>	
        <div class="row">
          <div class="col-md-12 footerlinks">
            <div class="container">
              <div class="row">
                <div class="col-md-4 ">
                  <div class="footerlinkgroup">
                    <a class="heading" href="#"><i class="glyphicon glyphicon-home"></i> Home</a> 
                  </div>
                  <div class="footerlinkgroup">
                    <a class="heading" href="#">About POPs</a> 
                  </div>
                  <div class="footerlinkgroup">
                    <a class="heading" href="#">Site Prioritization for Risk Assessment</a> 
                  </div>
                </div>
                <div class="col-md-4 ">
                  <div class="footerlinkgroup">
                    <a class="heading" href="#">Field Sampling Procedures</a> 
                  </div>
                  <div class="footerlinkgroup">
                    <a class="heading" href="#">Human Health Risk Assessment</a> 
                  </div>
                  <div class="footerlinkgroup">
                    <a class="heading" href="#">Risk Management</a> 
                  </div>
                </div>
                <div class="col-md-4 ">
                  <div class="footermeta">
                    <p>The information provided on this Web site is not official U.S. Government information and does not represent the views or positions of the U.S. Agency for International Development or the U.S. Government.</p>
                    <p><a href="#">Privacy Policy</a></p>
                  </div>
                </div>
              </div>				
            </div>
          </div>
        </div>	
      </footer>
    </div>
</template>

<script>
import home from './components/home'
import topnav from './components/topnav'

export default {
  name: 'app',
  components: {
    home,
    topnav
  }
}
</script>

<style>
  h1.logo {
    font-size: 36px;
    font-weight: bold;	
  }

  .USAIDLogo { padding: 20px; }

  .topnav {
        background: #336799;
      border-bottom: 6px solid #61a4e5;
      clear: both;
      height: 76px;
      position: relative;
      z-index: 3;
    
  }

  .bodytext { font-size: 18px; line-height: 1.7em; }

  .bodytext a { text-decoration: underline; }

  div.nav { font-size: 15px; }
  div.nav a { display: block; color: white; margin-top: 20px; }

  footer { padding-top: 40px; }
  .footerbar { 
    min-height: 55px;
    background: #336799;
    border-bottom: 6px solid #61a4e5;
  }

  .footerlinks { padding-top: 10px; }

  .footerlinkgroup { padding-top: 10px; }
  .footerlinkgroup a.heading { font-weight: bold;}

  html, body {
      height: 100%;
      margin: 0;
      overflow: visible;
      -webkit-text-size-adjust: 100%;
  }

  body, div, table, input {
      font-family: "Open Sans",Helvetica,Arial,sans-serif;
      font-size: 16px;
  }

  a {
      color: #777;
      cursor: pointer;
      background: none;
      border: none;
      outline: none;
      text-decoration: none;
  }
  a:hover {
      color: #ccc;
      transition: 300ms;
  }

  h1, h2, h3, h4, h5 {
      margin: 5px;
  }
  h1 { font-size: 50px; }
  h2 { font-size: 34px; }
  h3 { font-size: 24px; }
  h4 { font-size: 18px; }
  h5 { font-size: 12px; }

  div, input, button {
      -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
          -ms-box-sizing: border-box;
           -o-box-sizing: border-box;
              box-sizing: border-box;
  }
  input, button {
      padding: 5px 10px;
      border: none;
      outline: none;
      vertical-align: top;
  }
  button {
      font-size: 16px;
      background: #9d936d;
      color: #222;
      cursor: pointer;
  }
  button:hover {
      background: #ccc;
      transition: 300ms;
  }
  .intro-button {
      width: 250px;
      padding: 15px 10px;
  }


  table.users {
      width: 100%;
      border-collapse: collapse;
  }
  table.users tr:nth-child(odd)  { background: rgba(0,0,0,.2); }
  table.users tr:nth-child(even) { background: rgba(0,0,0,.3); }
  table.users tr:hover           { background: rgba(255,255,255,.1); }
</style>
