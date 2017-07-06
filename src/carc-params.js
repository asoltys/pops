export default {
  CDIsi: { value: null, units: 'mg/kg-d', desc: 'soil ingestion dose' },
  CDIinhal: { value: null, units: 'mg/kg-d', desc: 'particulate inhalation dose' },
  CDIderm: { value: null, units: 'mg/kg-d', desc: 'dermal contact with contaminated soil dose' },
  CDIwater: { value: null, units: 'mg/kg-d', desc: 'water ingestion dose' },
  CDIfish: { value: null, units: 'mg/kg-d', desc: 'fish ingestion dose' },
  CDIprod: { value: null, units: 'mg/kg-d', desc: 'produce ingestion dose' },
  CDIbeef: { value: null, units: 'mg/kg-d', desc: 'beef ingestion dose' },
  IFsoil: { value: null, units: 'mg/kg', desc: 'age/weight adjusted soil intake rate (lifetime)' },
  IFderm: { value: null, units: 'mg/kg', desc: 'soil dermal contact factor - age-adjusted' },
  IFwater: { value: null, units: 'L/kg', desc: 'age/weight adjusted water intake rate (lifetime)' },
  IFfish: { value: null, units: 'mg/kg', desc: 'age/weight adjusted fish intake rate (lifetime)' },
  IFprod: { value: null, units: 'mg/kg', desc: 'age/weight adjusted produce intake rate (lifetime)' },
  IFbeef: { value: null, units: 'mg/kg', desc: 'age/weight adjusted beef intake rate (lifetime)' },
  EF: { value: null, units: 'days/year', desc: 'exposure frequency' },
  ET: { value: null, units: 'fraction of day (hours exposed/24)', desc: 'exposure time' },
  ED: { value: null, units: 'years', desc: 'exposure duration' },
  AT: { value: null, units: 'days', desc: 'averaging time (365 days*ED)' },
  BW: { value: null, units: 'kg', desc: 'body weight' },
  SA: { value: null, units: 'cm2/day', desc: 'surface area' },
  AF: { value: null, units: 'mg/cm2', desc: 'soil adherence factor' },
  LT: { value: null, units: 'days/year', desc: 'exposure frequency' },
  IRs: { value: null, units: 'mg/day', desc: 'ingestion rate soil' },
  IRwater: { value: null, units: 'L/day', desc: 'intake rate of water' },
  IRfish: { value: null, units: 'mg/day', desc: 'intake rate of fish' },
  IRprod: { value: null, units: 'mg/day', desc: 'intake rate of produce' },
  IRbeef: { value: null, units: 'mg/day', desc: 'intake rate of beef' },
  Csoil: { value: 0.0000634, units: 'mg/kg', desc: 'concentration in soil (dry weight)' },
  Cwater: { value: 0.000000599, units: 'ug/L', desc: 'water concentration (total)' },
  Cfish: { value: 0.000000000032, units: 'mg/kg fresh weight', desc: 'fish tissue concentrations' },
  Cprod: { value: 0.00000000326, units: 'mg/kg fresh weight', desc: 'concentration in produce' },
  Cbeef: { value: 0.00000000612, units: 'mg/kg fresh weight', desc: 'concentration in beef' },
  VF: { value: 1960000, units: 'm3/kg', desc: 'volatilization factor' },
  PEF: { value: 1360000000, units: 'm3/kg', desc: 'particulate emission factor' },
  ABSd: { value: 0.03, units: 'proportion', desc: 'dermal absorption' },
  RBA: { value: 1, units: 'unitless', desc: 'relative bioavailability factor for soil' },
  CFfish: { value: 1, units: 'proportion', desc: 'contaminated fraction of fish' },
  CFprod: { value: 1, units: 'proportion', desc: 'contaminated fraction of produce' },
  CFbeef: { value: 1, units: 'proportion', desc: 'contaminated fraction of beef' },
  SFO: { value: 130000, units: '', desc: 'Slope factor oral' },
  IUR: { value: 38, units: '', desc: 'Inhalation unit risk' },
  ILCRsi: { value: null, units: 'mg/kg-d', desc: 'soil ingestion dose' },
  ILCRinhal: { value: null, units: 'mg/kg-d', desc: 'particulate inhalation dose' },
  ILCRderm: { value: null, units: 'mg/kg-d', desc: 'dermal contact with contaminated soil dose' },
  ILCRwater: { value: null, units: 'mg/kg-d', desc: 'water ingestion dose' },
  ILCRfish: { value: null, units: 'mg/kg-d', desc: 'fish ingestion dose' },
  ILCRprod: { value: null, units: 'mg/kg-d', desc: 'produce ingestion dose' },
  ILCRbeef: { value: null, units: 'mg/kg-d', desc: 'beef ingestion dose' },
  data: {
    EF: [350, 350, 225, 250, 75, 75],
    ED: [6, 26, 25, 1, 6, 26],
    ET: [1, 1, 0.33, 0.33, 0.0416, 0.0416],
    AT: [2190, 9490, 9125, 350, 2190, 9490],
    BW: [15, 80, 80, 80, 15, 80],
    IRs: [200, 100, 100, 330, 200, 100],
    SA: [2337, 6032, 3527, 3527, 2337, 6032],
    AF: [0.2, 0.07, 0.12, 0.3, 0.2, 0.07],
    LT: [70, 70, 70, 70, 70, 70],
    IFsoil: [36750, 36750, 7031.3, 1031.3, 7875, 7875],
    IFderm: [103390, 103390, 29759, 3307, 22155, 22155],
    IFwater: [328.0, 328.0, 176, 7.8, 3.0, 3.0],
    IFfish: [7455000, 7455000],
    IFprod: [60368875, 60368875],
    IFbeef: [32091500, 32091500],
    IRfish: [19500, 54000],
    IRprod: [109800, 302500],
    IRbeef: [40100, 178000]
  }
}
