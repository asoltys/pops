<template lang="pug">
  .container
    .row
      .col-md-12
        .page-header
          h1 Human Health Risk Assessment Overview
    .row
      .col-md-12
        ol.breadcrumb
          li
            a(href='#') Home
          li
            a(href='#') Human Health Risk Assessment
          li.active Human Health Risk Assessment Overview
    .row
      .col-md-12.bodytext
        p
          | Risk assessment is an iterative process leading to the quantification of potential risk. For the POPs tookit, the emphasis is on assessing health risks to humans resulting from exposure to persistent organic chemicals (although other hazardous chemicals can be analyzed in a similar fashion). The assessment looks at multiple exposure scenarios and calculates the incremental risks associated with each scenario, as well as the overall risk attributable to all the scenarios combined.
        iframe(width='100%', height='400', marginheight='0', marginwidth='0', frameborder='0', src='/static/slides.html')
        p
          | Information provided by risk assessments is needed before appropriate risk management measures can be selected and implemented.
        p
          | Risk assessments start off very simple, using a minimum of data, making simple assumptions and using simple calculations. At this initial stage, all assumptions should err on the side of caution. If the earliest iterations of the risk assessment predicts elevated risk, it doesn&apos;t necessarily mean that there is elevated risk, but additional work needs to be done to refine the risk assessment. In Canada, the earliest iteration is called a Preliminary Quantitative Risk Assessment (PQRA) (Health Canada 2004). Subsequent refinements are often called Detailed Site-Specific Risk Assessments.
</template>

<script>
export default {
  name: 'home'
}
</script>
