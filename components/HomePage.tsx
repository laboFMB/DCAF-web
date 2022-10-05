import React from 'react'
import { NavBar } from 'components/NavBar'

export const HomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ maxWidth: '800px', display: 'block', marginLeft: '20px' }}>
        <h3>
          Identification of protein substrates of the Cullin-RING E3 ubiquitin
          ligase CRL4 through its substrate recognition factors DCAFs
        </h3>
        <i>
          Jennifer Raisch*, Marie-Line Dubois*, Marika Groleau, Dominique
          Lévesque, Carla-Marie Jurkovic, Alyson McKenna, Pierre-Etienne
          Jacques, François-Michel Boisvert
          <p />
          <span style={{ fontSize: 'small' }}>
            *Equal contribution of authors
          </span>
        </i>
        <h5>
          Cullin-RING finger ligases (CRLs) represent the largest family of
          ubiquitin ligases and are responsible for ubiquitination of ~20% of
          cellular proteins degraded through the proteasome, catalyzing the
          transfer of E2-loaded ubiquitin to a substrate. Seven Cullins were
          described in vertebrates and among them, CUL4 associates with DDB1 as
          adaptor to form the CUL4-DDB1 ubiquitin ligase complex, involved in
          protein ubiquitination and regulation of many cellular processes. The
          specificity of CUL4-DDB1 is mediated by substrate recognition adaptors
          named DDB1/CUL4 associated factors (DCAF), which are characterized by
          the presence of a short structural motif of approximately 40 amino
          acids terminating in a tryptophan (W)-aspartic acid (D) dipeptide, the
          WD40 domain. Moreover, the majority of WDR40 protein shown to interact
          with DDB1 present WDXR motif. Using different approaches
          (bioinformatics/structural analyses), independent studies identified
          at least 60 different WD40 containing proteins that could act as
          adaptors for the DDB1/CUL4 complex. The aim of the project is to
          identify the protein partners of each DCAF using affinity purification
          followed by mass spectrometry and confirm their association with
          DDB1-CUL4. The DDB1 interactome was defined by overexpressing DDB1-GFP
          and DDB1-BirA proteins and identification of interactors after
          GFP/biotin IPs. Each DCAFs were fused to BirA protein and proximity
          labeling of potential interactors was performed to identify individual
          DCAFs interactome. Because identification of protein substrates for
          E3-ubiquitin ligases is not always guaranteed by identifying protein
          interactions, we measured changes in protein stability or degradation
          to identify proteins targeted by each DCAFs. In conclusion, this work
          provides new insights into the roles of DCAFs in DDB1-CUL4 complex,
          protein targeting, and cellular process affected. link to the paper,
          etc.
        </h5>
        lABO Web site :{' '}
        <a href="http://fmboisvert.recherche.usherbrooke.ca/equipe/">
          http://fmboisvert.recherche.usherbrooke.ca/equipe/
        </a>
        <img
          alt="Visual Abstract"
          src={
            'https://raw.githubusercontent.com/laboFMB/DCAF-data/main/abstract.png'
          }
          height="400px"
        />
      </div>
    </div>
  )
}
