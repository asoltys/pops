<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 text-center nav"><router-link to="about">About POPs</router-link></div>
      <div class="col-md-2 text-center nav"><router-link to="prioritization">Site Prioritization for Risk Assessment</router-link></div>
      <div class="col-md-2 text-center nav"><router-link to="sampling">Field Sampling Procedures</router-link></div>
      <div class="col-md-2 text-center nav"><router-link to="hhra">Human Health Risk Assessment</router-link></div>
      <div class="col-md-2 text-center nav"><router-link to="risk">Risk Management</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topnav'
}
</script>
