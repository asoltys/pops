<template>
  <div class="container">
    <div class="row">
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="page-header">
          <h1>About POPs</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ol class="breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li class="active">About POPs</li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 bodytext">
        <div id="carousel" v-on:load="carousel" style="width: 600px; float: right; margin-left: 50px; margin-bottom: 50px;">
          <img src="../assets/photo_1.jpg" style="width: 600px; height: 400px">
          <img src="../assets/photo_2.jpg" style="width: 600px; height: 400px">
        </div>
        <p>Over the past 50 years the chemical revolution has benefited the human population in countless ways but has also resulted in great harm. Chemicals have raised farming yields by killing crop pests and have allowed for the development of useful products including plastics. Our lives have been made more productive and comfortable because of chemicals but when stored, used or disposed of improperly, some chemicals can cause toxic reactions, persist in the environment for years, travel thousands of kilometers from where they originate, threaten long-term health, and have ecological and human health consequences that were never anticipated or intended.</p>
        <p>One class of chemicals called persistent organic pollutants (POPs) has aroused a lot of concern. Many POPs pose such a significant threat to health and the environment that in 2001, the world’s governments met in Sweden and adopted the Stockholm Convention created to restrict and ultimately eliminate the production, use, release and storage of POPs.</p>
      </div>
    </div>		
  </div>
</template>

<script>
  export default {
    name: 'about',
    methods: {
      carousel: function (event) {
        console.log('loaded')
        this.slick({
          autoplay: true,
          arrows: false,
          variableWidth: true
        })
      }
    }
  }
</script>
