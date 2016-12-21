<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './components/home'

export default {
  name: 'app',
  components: {
    home
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
