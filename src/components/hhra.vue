<template lang="pug">
  .container
    link(href='https://unpkg.com/animate.css@3.5.1/animate.min.css', rel='stylesheet', type='text/css')
    .row
      .col-md-12
        .page-header
          h1 Human Health Risk Assessment
      .col-md-12.bodytext
        p The Persistent Organic Pollutants (POPs) Toolkit provides training modules and interactive tools that enable officials to use risk-based approaches to prioritize and manage POP and other hazardous substance contaminated sites.  (more about the toolkit; summary of contents)
        p Information provided by risk assessments is needed before appropriate risk management measures can be selected and implemented.
        p Risk assessments start off very simple, using a minimum of data, making simple assumptions and using simple calculations. At this initial stage, all assumptions should err on the side of caution. If the earliest iterations of the risk assessment predicts elevated risk, it doesn&apos;t necessarily mean that there is elevated risk, but additional work needs to be done to refine the risk assessment. In Canada, the earliest iteration is called a Preliminary Quantitative Risk Assessment (PQRA) (Health Canada 2004). Subsequent refinements are often called Detailed Site-Specific Risk Assessments.
        p Use this tool to calculate the Hazard Quotient (HQ) for a threshold contaminant (#[a(href='/riskassessment/module/exposure+and+toxicity+analysis/toxicity/threshold+contaminants.aspx') see training material for more information])
        p If a Hazard Quotient greater than 0.2 is calculated, a risk to human health potentially exists.
        #example-3
          button(@click='show = !show')  Toggle render
          transition(name='custom-classes-transition', enter-active-class='animated tada', leave-active-class='animated bounceOutRight')
            p(v-if='show')
              svg(width='580', height='400', xmlns='http://www.w3.org/2000/svg')
                g
                  title background
                  rect#canvas_background(fill='#fff', height='402', width='582', y='-1', x='-1')
                  g#canvasGrid(display='none', overflow='visible', y='0', x='0', height='100%', width='100%')
                    rect(fill='url(#gridpattern)', stroke-width='0', y='0', x='0', height='100%', width='100%')
                g
                  title Layer 1
                  path#svg_8(fill-opacity='null', stroke-opacity='null', stroke-width='1.5', stroke='#000', fill='none')
                  path#svg_9(d='m320.5 295.5 162.5 51.5c.5.5 32.5 7.5 29.5-20.5-3-28-166-44-166.5-44.5.5.5 9.5-9.5 8.5-9.5-1 0-51 3-51.5 2.5.5.5-.5 35.5-1 35 .5.5 17.5-20.5 18.5-14.5z', stroke-opacity='null', stroke-width='1.5', stroke='#000', fill='#CFCA6D')
                  path#svg_10(d='m25.847504 339.542502 0-84.937498 0 0c0-36.48531 20.95867-66.062505 46.812504-66.062505l0 0 0 0c12.415444 0 24.322387 6.960138 33.101443 19.349259 8.779049 12.389121 13.711057 29.192379 13.711057 46.713246l0 9.437501 13.37499 0-26.749984 38.750016-26.75001-38.750016 13.375001 0 0-9.437501c0-15.636559-8.982291-28.312494-20.062494-28.312494l0 0 0 0c-11.080217 0-20.062501 12.675935-20.062501 28.312494l0 84.937498-26.750006 0z', stroke-opacity='null', stroke-width='1.5', stroke='#000', fill='#CC7C65')
                  path#svg_12(d='m334.348866 56.567764 0-6.136925-86.576687 19.008137 86.576687 19.008304 0-6.585027c23.493061-.004178 64.736784.759276 64.736784 6.170112 0 7.560194-43.074213 11.593332-43.074213 11.593332l0 5.796601c0 0 96.76073 1.257211 96.76073-26.713608 0-21.975-82.871942-22.800761-118.423301-22.140925z', stroke-opacity='null', stroke-width='1.5', stroke='#000', fill='#4291e5')
        svg(width='172', height='129', xmlns='http://www.w3.org/2000/svg')
          g
            title background
            rect#canvas_background(fill='#fff', height='131', width='174', y='-1', x='-1')
            g#canvasGrid(display='none', overflow='visible', y='0', x='0', height='100%', width='100%')
              rect(fill='url(#gridpattern)', stroke-width='0', y='0', x='0', height='100%', width='100%')
          g
            title Layer 1
            path#svg_3(transform='rotate(27 87.1244049072265,79.87999725341797) ', d='m172.124388 86.080532c0-15.862999-76.111608-28.722519-169.999998-28.722519l0-22.978014 0 0c93.88839 0 169.999998 12.859507 169.999998 28.722519l0 22.978014c0 13.097421-52.441862 24.536106-127.5 27.810461l0 11.489009-42.499998-22.065957 42.499998-23.890072 0 11.489009 0 0c50.612273-2.207919 92.398728-8.227083 113.307595-16.321452', stroke-opacity='null', stroke-width='1.5', stroke='#000', fill='#7AD6CA')
        h2#SoilCalc_Title
          |  Accidental Soil Ingestion Dose Calculation
        button#start(@click='startTour')
          | Start tour
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
                  msub#ddays
                    mi D
                    mi Days 
                  mo &times; 
                  msub#dweeks
                    mi D
                    mi Weeks 
                  mo &times; 
                  msub#dyears
                    mi D
                    mi Years
                  mo )
                mrow
                  mi#bw BW
                  mo &times; 
                  mn 16 
                  mo &times; 
                  mn 365 
                  mo &times; 
                  mi#le LE
            mo =
            semantics
              annotation-xml(encoding='application/xhtml+xml')
                input(xmlns='http://www.w3.org/1999/xhtml', style='text-align:right', type='number', size='10')
        input(v-model='dose')
        table
          tr#csrow
            td
              | C
              sub s
              |  = 
            td
              input#SoilCs(type='number', ref='csinput', @keyup='calculate', v-model='cs')
            td mg/kg
          tr#irrow
            td
              | IR
              sub s 
              |  = 
            td
              input#SoilIRS(type='number', @keyup='calculate', v-model='ir')
            td kg/day
          tr
            td
              | AF
              sub GIT
              |  =
            td
              input#SoilAFGIT(type='number', @keyup='calculate', v-model='af')
            td (unitless)
          tr
            td
              | D
              sub Hours
              |  =
            td
              input#SoilDHours(type='number', @keyup='calculate', v-model='dh')
            td # of hours
          tr
            td
              | D
              sub Days
              |  =
            td
              input#SoilD1(type='number', @keyup='calculate', v-model='dd')
            td # of days in a week
          tr
            td
              | D
              sub Weeks
              |  =
            td
              input#SoilD2(type='number', @keyup='calculate', v-model='dw')
            td # of weeks in a year
          tr
            td
              | D
              sub Years
              |  =
            td
              input#SoilD2(type='number', disabled='disabled', v-model='dy')
            td n/a
          tr
            td
              | BW =
            td
              input#SoilBW(type='number', @keyup='calculate', v-model='bw')
            td kg
          tr
            td
              | LE =
            td
              input#SoilBW(type='number', disabled='disabled', v-model='le')
            td n/a
        p#warning.alert-warning
          |  Note: dusts can be trapped by the nose and later ingested, soils can also be ingested from hands if hands are not regulary washed or if dusts deposit on foods eaten at the site.
</template>

<script>
import MathJax from 'MathJax'
window.MathJax = MathJax

import Tour from 'Tour'
window.Tour = Tour

export default {
  data () {
    return {
      show: true,
      dose: '',
      cs: '',
      ir: '',
      af: '',
      dh: '',
      dd: '',
      dw: '',
      dy: 1,
      bw: '',
      le: 1,
      tour: null
    }
  },
  methods: {
    startTour () {
      console.log(this.tour)
      this.tour.restart()
      this.tour.goTo(1)
    },
    calculate () {
      var dose = (this.cs * this.ir * this.af * this.dh * this.dd * this.dw * this.dy) / (this.bw * 16 * 365 * this.le)
      if (!isNaN(dose) && isFinite(dose)) {
        this.dose = dose
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub])
//      var dose = new Vue('<div>yes</div>')
    })

    this.tour = new Tour({
      steps: [
        {
          backdrop: true,
          backdropPadding: 15,
          element: '#start',
          title: 'Start Tour',
          content: 'If you want to start this tour again, click this here handy button'
        },
        {
          element: '#cs',
          title: 'Concentration of contaminant in soils',
          content: 'Usually 90th percentile or maximum'
        },
        {
          element: '#ir',
          title: 'Ingestion Rate',
          content: 'Accidental soil ingestion rate for adult (see Table: Receptor Characteristics)'
        },
        {
          element: '#af',
          title: 'Absorption Factor',
          content: 'Absorption Factor for the gastrointestinal tract. Use a value of 1 for a preliminary risk assessment (as recommended by Health Canada, 2004)'
        },
        {
          element: '#dhours',
          title: 'D<sub>Hours</sub>',
          content: 'Hours per-day with exposure (0 - 16) (16 is the maximum assumed awake hours per day)'
        },
        {
          element: '#ddays',
          title: 'D<sub>Days</sub>',
          content: 'Days in a week with exposure (0 - 7)'
        },
        {
          element: '#dweeks',
          title: 'D<sub>Weeks</sub>',
          content: 'Weeks in a year with exposure (0 - 52)'
        },
        {
          element: '#dyears',
          title: 'D<sub>Years</sub>',
          content: 'Number of years of exposure (not used for non-carcinogens)'
        },
        {
          element: '#bw',
          title: 'Body Weight of Receptor',
          content: 'Body Weight of Receptor (see Table: Receptor Characteristics)'
        },
        {
          element: '#le',
          title: 'Life expectancy',
          content: 'The number of year that the person is likely to live. Not used for non-carcinogens.'
        },
        {
          backdrop: true,
          backdropPadding: 15,
          element: '#csrow',
          title: 'Get Started',
          content: 'You can start filling in values here to calculate the Dose'
        },
        {
          element: '#warning',
          title: 'Important Message',
          content: 'And don\'t forget to take note of this important message!'
        }
      ],
      storage: window.localStorage,
      onEnd: () => {
        this.$refs.csinput.focus()
      }
    })
    this.tour.init()
    this.tour.start()
  }
}
</script>

<style lang="stylus">
  input[type=number]
    width 66px
    margin-right 5px
    padding-left 5px

  .fade-enter-active, .fade-leave-active 
    transition opacity .5s
  .fade-enter, .fade-leave-to 
    opacity 0
</style>
