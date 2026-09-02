const REACTIONS = {
  sn1: {
    title:'SN1 Reaction', subtitle:'Unimolecular nucleophilic substitution', rateLaw:'Rate = k[substrate]',
    concepts:['The slow step is C–Br ionization.','A tertiary carbocation intermediate forms.','Polar protic solvent stabilizes ions.'],
    steps:[
      {title:'Reactants',text:'tert-Butyl bromide is mixed with water.',mechanism:'The substrate contains a tertiary carbon bonded to bromine. Water is present as a polar protic solvent and nucleophile.',why:'A tertiary substrate can form a comparatively stable tertiary carbocation, making an SN1 pathway feasible.',type:'reactants'},
      {title:'Ionization',text:'The C–Br bond breaks heterolytically.',mechanism:'The bonding electron pair moves onto bromine. This is the rate-determining step and produces a tertiary carbocation plus bromide ion.',why:'Both electrons go to bromine because the leaving group departs as Br⁻. Carbocation formation is energetically demanding.',type:'ionization'},
      {title:'Nucleophilic attack',text:'Water attacks the planar carbocation.',mechanism:'A lone pair on oxygen forms a new C–O bond to the electron-deficient carbocation, giving a protonated alcohol intermediate.',why:'The carbocation has an empty p orbital and is strongly electrophilic. Water donates a lone pair to carbon.',type:'attack'},
      {title:'Deprotonation',text:'A second water molecule removes the extra proton.',mechanism:'Proton transfer gives neutral tert-butanol and hydronium in the aqueous medium.',why:'Acid–base proton transfer restores a neutral alcohol. In water, another water molecule can act as the base.',type:'product'}
    ]
  },
  sn2: {
    title:'SN2 Reaction', subtitle:'Bimolecular nucleophilic substitution', rateLaw:'Rate = k[substrate][nucleophile]',
    concepts:['SN2 is a one-step concerted process.','Backside attack occurs at the electrophilic carbon.','Bond making and bond breaking occur together.'],
    steps:[
      {title:'Reactants',text:'Bromoethane meets hydroxide ion.',mechanism:'Hydroxide is a strong nucleophile and approaches the carbon attached to bromine.',why:'The carbon bonded to bromine is electrophilic because bromine withdraws electron density.',type:'reactants'},
      {title:'Backside attack',text:'OH⁻ approaches opposite the leaving group.',mechanism:'The nucleophile approaches from the backside while the C–Br bond begins to weaken.',why:'Backside approach gives the nucleophile access to the antibonding orbital and produces inversion at a stereocenter.',type:'attack'},
      {title:'Transition state',text:'Bond formation and cleavage occur simultaneously.',mechanism:'The C–O bond is forming while the C–Br bond is breaking. No carbocation intermediate is formed.',why:'SN2 is concerted, so there is one transition state rather than separate ionization and attack steps.',type:'transition'},
      {title:'Product',text:'Ethanol and bromide are formed.',mechanism:'The new C–O bond is complete and bromide has left.',why:'The substitution is complete in a single molecular event.',type:'product'}
    ]
  }
};
