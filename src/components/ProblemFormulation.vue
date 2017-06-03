<template lang="pug">
  .problem-formulation
    button(@click='reset') Reset

    h1 Risk Assessment Problem Formulation Worksheet Tool Squeeeeee
    p The purpose of this worksheet is to help the risk assessor identify the components of the risk assessment. Use this worksheet to think through all parts of the problem formulation (see the problem formulation training module). A filled-in version of this worksheet should be included in your Risk Assessment report.

    h2 Potential land uses of the site
    p In this section, briefly describe the past, current and planned future land use of the site. Several categories are provided because some sites may have had more than one land use. Having this background information will help identify the types of chemical hazards possibly present at the site, the potential receptors and the pathways linking the chemical hazards with the receptors.
    problem-group(:items='potential_uses')

    p * the land-use categories above correspond to the Risk Calculation tools presented later in the POPs Toolkit. For learning purposes, the POPs toolkit has been limited to these potential land uses. Other land-uses may also be possible such as commercial, indoor industrial, combined industrial etc. If necessary, the information sources presented in Module X-x (Standard Exposure Parameters) can be consulted to determine exposure scenarios and factors relevant to these land uses. 

    h2 Human receptors and pathways
    p Use this section to identify and describe the receptors (human and non-human) and pathways possibly present at the site.

    h3 Human receptor group
    problem-group(:items='receptors')

    h3 Human receptor ages
    problem-group(:items='ages')

    p * the receptor groups above correspond to the Risk Calculation tools presented later in the POPs Toolkit. For learning purposes, the POPs toolkit has been limited to these receptors. Other groups and age categories also be relevant, in particular an infant or toddler for certain residential scenarios. If necessary, the information sources presented in Module X-x (Receptors) and Module X-x (Standard Exposure Parameters) can be consulted to determine exposure scenarios and factors relevant to these receptor categories. 

    h3 Human exposure pathways
    problem-group(:items='pathways')

    p * the exposure pathways listed above correspond to the Risk Calculation tools presented later in the POPs Toolkit. For learning purposes, the Risk Calculations tools have been limited to these potential exposure pathways. Other exposure pathways may also be possible such as inhalation of indoor contaminant vapours, dermal contact with water, ingestion of other types of meat or game etc. If necessary, these pathways can also be listed here and the information sources presented in Module X-x (Standard Exposure Parameters)  can be consulted to determine exposure factors relevant to these pathways. 

    h3 Non-human Exposure Pathways
    problem-group(:items='nh_pathways')

    h3 Contaminant concentrations (highest measured concentrations)
    p To fill-in this section:
    ul 
      li replace the column header "Chemical A, Chemical B, Chemical C..etc.", with a chemical contaminant name.
      li enter the maximum concentration of that contaminant measured in the applicable row. Note that the concentration units of the concentration entered must match those shown in the first column.
      li For certain chemicals such as dioxins/furans or PCBs, use the TEF Calculator tool and enter the TEQ as the concentration value. 
      li The maximum contaminant concentration can then be compared to environmental quality guidelines. If the measured maximum concentration exceeds the guidelines, then the contaminant is a Contaminant of Concern.

    table
      tr
        th
        th(v-for='c,i in cols') 
          input(v-model='cols[i]', :value='c', @input='saveCols')
        th
          a(@click='addColumn') Add Column
      tr(v-for='r in rows')
        td {{r}}
        td(v-for='c in cols') 
          input(v-model='matrix[r][c]', @input='save')

    p (Print this worksheet)
</template>

<script>
  import ProblemGroup from './ProblemGroup'
  export default {
    data () {
      return {
        cols: ['Chemical A', 'Chemical B', 'Chemical C', 'Chemical D'],
        rows: [
          'Soil (mg/kg)',
          'Surface water (mg/L)',
          'Outdoor air - particulate (mg/m3)',
          'Fish (mg/kg wet weight',
          'Fruits (mg/kg wet weight)',
          'Vegetables (mg/kg wet weight)',
          'Beef (mg/kg wet weight)',
          'Other foods (mg/kg wet weight)'
        ],
        matrix: {},
        potential_uses: [
          'Agricultural/Farming',
          'Residential',
          'Parkland/Recreational',
          'Industrial - Outdoors',
          'Industrial – Construction',
          'Fishing',
          'Other*'
        ],
        receptors: [
          'General public/residents',
          'Workers',
          'Fishers',
          'Farmers',
          'Other'
        ],
        ages: [
          'Child',
          'Adult',
          'Other*'
        ],
        pathways: [
          'Accidental ingestion of soil',
          'Inhalation of soil particles',
          'Inhalation of outdoor contaminant vapours',
          'Dermal contact with soil',
          'Ingestion of drinking water',
          'Ingestion of fish',
          'Ingestion of produce',
          'Ingestion of beef',
          'Other*'
        ],
        nh_pathways: [
          'Aquatic organism exposed via water',
          'Aquatic organism exposed via food',
          'Aquatic organism exposed via sediments',
          'Terrestrial organism exposed via water',
          'Terrestrial organism exposed via food',
          'Terrestrial organism exposed via soil',
          'Plants exposed via surface water or groundwater',
          'Plants exposed via soils'
        ]
      }
    },
    created () {
      this.rows.forEach(r => {
        this.matrix[r] = {}
        this.cols.forEach(c => {
          this.matrix[r][c] = ''
        })
      })
    },
    mounted () {
      let cols = JSON.parse(window.localStorage.getItem('cols'))
      if (cols) {
        this.cols = cols
      }

      let matrix = JSON.parse(window.localStorage.getItem('matrix'))

      if (matrix) {
        this.matrix = matrix
      }
    },
    methods: {
      addColumn () {
        this.cols.push('Chemical X')
        this.saveCols()
      },
      save () {
        window.localStorage.setItem('matrix', JSON.stringify(this.matrix))
      },
      saveCols () {
        window.localStorage.setItem('cols', JSON.stringify(this.cols))
      },
      reset () {
        window.localStorage.clear()
      }
    },
    components: { ProblemGroup }
  }
</script>

<style lang="stylus">
  td.input
    width 100%
</style>
