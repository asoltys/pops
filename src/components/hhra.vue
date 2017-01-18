<template lang="pug">
  .container
    .row
      .col-md-12
        .page-header
          h1 Human Health Risk Assessment
      .col-md-12.bodytext
        p
          | The Persistent Organic Pollutants (POPs) Toolkit provides training modules and interactive tools that enable officials to use risk-based approaches to prioritize and manage POP and other hazardous substance contaminated sites.  (more about the toolkit; summary of contents)
        p
          | Information provided by risk assessments is needed before appropriate risk management measures can be selected and implemented.
        p
          | Risk assessments start off very simple, using a minimum of data, making simple assumptions and using simple calculations. At this initial stage, all assumptions should err on the side of caution. If the earliest iterations of the risk assessment predicts elevated risk, it doesn&apos;t necessarily mean that there is elevated risk, but additional work needs to be done to refine the risk assessment. In Canada, the earliest iteration is called a Preliminary Quantitative Risk Assessment (PQRA) (Health Canada 2004). Subsequent refinements are often called Detailed Site-Specific Risk Assessments.
        p
          |  Use this tool to calculate the Hazard Quotient (HQ) for a threshold contaminant (
          a(href='/riskassessment/module/exposure+and+toxicity+analysis/toxicity/threshold+contaminants.aspx') see training material for more information
          | ).
          br
          |  If a Hazard Quotient greater than 0.2 is calculated, a risk to human health potentially exists.
        h2#SoilCalc_Title
          |  Accidental Soil Ingestion Dose Calculation
        button(@click='tour')
          | Start tour
        | When 
        script(type="math/mml")
          math(xmlns='http://www.w3.org/1998/Math/MathML', display='block')
            msub 
              mi Dose
              mi SoilIngestion
            mo =
            mrow
              mfrac
                mrow
                  mo (
                  msub#cs
                    mi C
                    mi s
                  mo &times; 
                  msub#ir
                    mi IR
                    mi s
                  mo &times; 
                  msub#af
                    mi AF
                    mi GIT
                  mo &times; 
                  msub#dhours
                    mi D
                    mi Hours
                  mo &times; 
                  msub
                    mi D
                    mi Day 
                  mo &times; 
                  msub
                    mi D
                    mi Weeks 
                  mo &times; 
                  msub
                    mi D
                    mi Years
                  mo )
                mrow#row
                  mi BW 
                  mo &times; 
                  mn 16 
                  mo &times; 
                  mn 365 
                  mo &times; 
                  mi LE
            mo =
            semantics
              annotation-xml(encoding='application/xhtml+xml')
                input(xmlns='http://www.w3.org/1999/xhtml', style='text-align:right', type='text', size='10', name='n')

        div
          | C
          sub s
          |  = 
          input#SoilCs(type='text', maxlength='15', size='4', onkeyup='calc();')
          span &nbsp;mg/kg
        div
          | IR
          sub s 
          |  = 
          input#SoilIRS(type='text', maxlength='15', size='4', onkeyup='calc();')
          span &nbsp;kg/day
        div
          | AF
          sub GIT
          |  =
          input#SoilAFGIT(type='text', maxlength='15', size='4', onkeyup='calc();')
          span (unitless)
        div
          | D
          sub Hours
          |  =
          input#SoilDHours(type='text', maxlength='15', size='4', onkeyup='calc();')
          span # of hours
        div
          | D
          sub Days
          |  =
          input#SoilD1(type='text', maxlength='15', size='4', onkeyup='calc();')
          span  # of days in a week
        div
          | D
          sub Weeks
          |  =
          input#SoilD2(type='text', maxlength='15', size='4', onkeyup='calc();')
          span  # of weeks in a year
        div
          | D
          sub Years
          |  =
          input#SoilD2(type='text', maxlength='15', size='4', onkeyup='calc();')
          span # years
        div
          | BW =
          input#SoilBW(type='text', maxlength='15', size='4', onkeyup='calc();')
          span kg
          | Body Weight of Receptor (see Table: 
          | )
        p.alert-warning
          |  Note: dusts can be trapped by the nose and later ingested, soils can also be ingested from hands if hands are not regulary washed or if dusts deposit on foods eaten at the site.
</template>

<script>
export default {
  methods: {
    tour () {
      console.log('yes')
      this.$parent.$emit('tour')
    }
  }
}
</script>
