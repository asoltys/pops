<template>
  <div class="container">
    <div class="row">
      <nav class="navbar" role="navigation">
        <button type="button" class="btn btn-primary navbar-toggle" data-toggle="collapse" data-target="#nav">
          <span class="pull-right glyphicon glyphicon-list"></span>
          <span id="connection" class="pull-right glyphicon glyphicon-exclamation-sign"></span>
        </button>
        <div id="nav" class="collapse navbar-collapse no-transition">
          <div class="navbar">
            <ul class="nav navbar-nav">
              <li><router-link to="about">About POPs</router-link></li>
              <li><router-link to="prioritization">Site Prioritization for Risk Assessment</router-link></li>
              <li><router-link to="sampling">Field Sampling Procedures</router-link></li>
              <li><router-link to="hhra">Human Health Risk Assessment</router-link></li>
              <li><router-link to="risk">Risk Management</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topnav'
}
</script>

<style>
  nav { font-size: 15px; }
  nav a { display: block; color: white; height: 68px; margin-bottom: 10px; }
  ul.nav { height: 76px; }
  .nav>li>a:focus, .nav>li>a:hover { background: #002F6C; color: white; }

  footer { padding-top: 40px; }
</style>
