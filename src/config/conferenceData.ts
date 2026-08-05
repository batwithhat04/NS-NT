import { Track, CommitteeMember, Speaker, ImportantDate, Announcement, PricingTier, FAQItem } from '../types';

export const CONFERENCE_INFO = {
  acronym: 'NS&NT 2026',
  fullTitle: '1st International Conference on Nanoscience and Advanced Nanotechnology',
  theme: 'Pioneering Molecular Innovations for Sustainable Global Future',
  dates: {
    start: 'December 10, 2026',
    end: 'December 12, 2026',
    display: 'December 10 - 12, 2026',
    targetDateISO: '2026-12-10T09:00:00+05:30',
  },
  venue: {
    name: 'National Institute of Technology (NIT) Delhi Campus',
    address: 'Plot No. FA1, Zone P1, GT Karnal Road, Narela, Delhi - 110040, India',
    mapEmbedUrl: 'https://maps.google.com/maps?q=National+Institute+of+Technology+Delhi,+Narela&t=&z=15&ie=UTF8&iwloc=&output=embed',
    city: 'New Delhi',
    country: 'India',
  },
  organizer: {
    primary: 'National Institute of Technology (NIT) Delhi',
    collaborators: [
      { name: 'Khalsa College of Engineering and Technology (KCET), Amritsar', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=150&auto=format&fit=crop&q=80' },
      { name: 'National Institute of Technology (NIT) Uttarakhand', logo: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=150&auto=format&fit=crop&q=80' },
      { name: 'CSIR - National Physical Laboratory (CSIR-NPL), New Delhi', logo: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=150&auto=format&fit=crop&q=80' }
    ],
    logoNitDelhi: 'https://nitdelhi.ac.in/logo.svg',
    logoNitDelhiHighRes: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/NIT_Delhi_Logo.png/220px-NIT_Delhi_Logo.png',
    campusFrontGate: 'https://nitdelhi.ac.in/nit_front_gate.png',
  },
  links: {
    googleFormRegister: 'https://docs.google.com/forms/d/e/1FAIpQLSc-Placeholder-NSNT2026-NITDelhi/viewform',
    brochurePdf: 'https://drive.google.com/file/d/17eEaNMcQlg0l1d_4SHyFuWIc9-BCd5YO/view?usp=drive_link',
    schedulePdf: '/docs/NSNT_2026_Schedule.pdf',
    templateDoc: '/docs/NSNT_2026_Abstract_Template.docx',
    contactEmail: 'nsnt2026@nitdelhi.ac.in',
    phoneSupport: '+91 11 3386 1000 / +91 98765 43210',
    whatsappNumber: '919876543210',
  },
  bankDetails: {
    accountName: 'NIT Delhi Conference Account (NSNT 2026)',
    accountNumber: '409810293847',
    bankName: 'State Bank of India (SBI)',
    branch: 'NIT Delhi Campus Branch, Narela',
    ifscCode: 'SBIN0064000',
    swiftCode: 'SBININBB102',
    upiId: 'nitdelhi.nsnt2026@sbi',
  }
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Abstract Submission Deadline Extended to September 30, 2026!',
    date: 'July 25, 2026',
    isImportant: true,
  },
  {
    id: 'ann-2',
    title: 'Selected High-Quality Papers will be Published in Scopus & WoS Indexed SCI Journals.',
    date: 'July 15, 2026',
    isImportant: true,
  },
  {
    id: 'ann-3',
    title: 'Official Conference Brochure Released! Click Download Brochure to view Google Drive Document.',
    date: 'July 05, 2026',
    isImportant: true,
  },
  {
    id: 'ann-4',
    title: 'Early Bird Registration is Now Open with 15% Discount on Fee.',
    date: 'June 01, 2026',
    isImportant: false,
  }
];

export const IMPORTANT_DATES: ImportantDate[] = [
  { title: 'Call for Abstracts Open', date: 'May 01, 2026', status: 'passed' },
  { title: 'Abstract Submission Deadline', date: 'September 30, 2026', status: 'active', note: 'Extended!' },
  { title: 'Notification of Acceptance', date: 'October 20, 2026', status: 'upcoming' },
  { title: 'Early Bird Registration Closes', date: 'November 10, 2026', status: 'upcoming' },
  { title: 'Full Paper Submission (For Proceedings)', date: 'November 25, 2026', status: 'upcoming' },
  { title: 'Conference Inauguration', date: 'December 10, 2026', status: 'upcoming' }
];

export const TRACKS: Track[] = [
  {
    id: 1,
    trackNumber: 'Track 01',
    title: 'Nanomaterials and Functional Materials',
    iconName: 'Atom',
    colorGrad: 'from-blue-600 to-indigo-800',
    summary: 'Design, synthesis, characterization, and applications of advanced 2D materials, quantum dots, nanocomposites, and meta-materials.',
    topics: [
      {
        title: 'Synthesis & Characterization of 2D Materials',
        description: 'Graphene, MXenes, Transition Metal Dichalcogenides (TMDs), and boron nitride nanostructures.',
        subtopics: ['Chemical Vapor Deposition (CVD)', 'Atomic Layer Deposition (ALD)', 'Spectroscopic Analysis', 'Surface Morphology']
      },
      {
        title: 'Smart & Functional Nanocomposites',
        description: 'Self-healing nanostructured matrices, shape memory alloys, and polymer-nanoparticle hybrid networks.',
        subtopics: ['Polymer Nanocomposites', 'High-Entropy Alloys', 'Piezoelectric Materials', 'Thermoelectric Nanomaterials']
      },
      {
        title: 'Quantum Dots & Nanocrystals',
        description: 'Colloidal semiconductor quantum dots, perovskite nanocrystals, and optical bandgap engineering.',
        subtopics: ['Core-Shell Nanoparticles', 'Upconversion Nanoparticles', 'Photoluminescence Tuning', 'Quantum Yield Enhancement']
      }
    ]
  },
  {
    id: 2,
    trackNumber: 'Track 02',
    title: 'Nanoelectronics and Nanophotonics',
    iconName: 'Cpu',
    colorGrad: 'from-cyan-600 to-blue-800',
    summary: 'Next-generation semiconductor devices, plasmonics, quantum computing architectures, and optoelectronic circuits.',
    topics: [
      {
        title: 'Sub-5nm Semiconductor Devices',
        description: 'FinFETs, GAA-FETs, carbon nanotube transistors, and neuromorphic memristive devices.',
        subtopics: ['Tunnel FETs (TFETs)', 'Memristor Architectures', 'Low-Power Logic Gates', 'Ballistic Transport']
      },
      {
        title: 'Plasmonics & Photonic Integrated Circuits',
        description: 'Surface plasmon resonance, metamaterial absorbers, integrated nanophotonic lasers, and waveguides.',
        subtopics: ['Surface Plasmon Resonance (SPR)', 'Silicon Photonics', 'Quantum Optics', 'Optical Interconnects']
      },
      {
        title: 'Spintronics & Quantum Electronics',
        description: 'Spin-orbit torque, magnetic tunnel junctions, topological insulators, and qubit physical implementations.',
        subtopics: ['Spin Transfer Torque (STT-MRAM)', 'Skyrmion Devices', 'Quantum Hall Effect', 'Single-Electron Transistors']
      }
    ]
  },
  {
    id: 3,
    trackNumber: 'Track 03',
    title: 'Nanofluidics and Transport Phenomena',
    iconName: 'Waves',
    colorGrad: 'from-teal-600 to-cyan-900',
    summary: 'Mass, momentum, and heat transfer at the nanoscale, nano-heat exchangers, and nanofluidic channels.',
    topics: [
      {
        title: 'Nanofluidic Thermal Management',
        description: 'Cooling systems using hybrid nanofluids in electronic microprocessors and high-heat flux systems.',
        subtopics: ['Hybrid Nanofluids', 'Thermal Conductivity Enhancement', 'Critical Heat Flux (CHF)', 'Microchannel Heat Sinks']
      },
      {
        title: 'Molecular Transport & Nanopores',
        description: 'Single-molecule transport across biological and synthetic nanopores, ionic selectivity, and electro-osmotic flow.',
        subtopics: ['Nanopore Sequencing Physics', 'Desalination Membranes', 'Electro-osmotic Pumps', 'Capillary Flow in Nanotubes']
      }
    ]
  },
  {
    id: 4,
    trackNumber: 'Track 04',
    title: 'Nanobiotechnology and Drug Delivery',
    iconName: 'Dna',
    colorGrad: 'from-emerald-600 to-teal-800',
    summary: 'Targeted therapeutics, lipid nanoparticles, biosensors, tissue engineering scaffolds, and nanomedicine toxicity.',
    topics: [
      {
        title: 'Targeted Nanocarriers & Nanomedicine',
        description: 'Liposomes, polymeric nanoparticles, and exosomes for targeted oncology and gene therapy delivery.',
        subtopics: ['mRNA Lipid Nanoparticles', 'Tumor Microenvironment Targeting', 'Controlled Release Kinetics', 'Biocompatibility']
      },
      {
        title: 'Point-of-Care Nanobiosensors',
        description: 'Lab-on-a-chip diagnostic devices, electrochemical immune sensors, and optical pathogen detectors.',
        subtopics: ['Graphene Biosensors', 'Microfluidic Diagnostics', 'SERS-Based Detection', 'Wearable Health Sensors']
      },
      {
        title: 'Tissue Scaffolds & Regenerative Medicine',
        description: 'Electrospun nanofibrous matrices, hydrogels, and nanostructure-guided cellular proliferation.',
        subtopics: ['3D Bioprinting Nanopaste', 'Stem Cell Differentiation Scaffolds', 'Bone Regeneration Nanoceramics']
      }
    ]
  },
  {
    id: 5,
    trackNumber: 'Track 05',
    title: 'Energy, Environment and Sustainability',
    iconName: 'Zap',
    colorGrad: 'from-amber-600 to-orange-800',
    summary: 'Solar cells, green hydrogen generation, supercapacitors, lithium/sodium battery anodes, and photocatalytic remediation.',
    topics: [
      {
        title: 'Next-Gen Solar Cells & Photovoltaics',
        description: 'Perovskite-silicon tandem cells, dye-sensitized solar cells, and organic photovoltaics efficiency optimization.',
        subtopics: ['Tandem Photovoltaics', 'Passivated Contacts', 'Quantum Dot Solar Cells', 'Degradation Mitigation']
      },
      {
        title: 'Nanomaterials for Energy Storage',
        description: 'Solid-state batteries, sodium-ion battery electrodes, graphene supercapacitors, and electrocatalysis.',
        subtopics: ['Silicon-Carbon Anodes', 'Solid Electrolyte Interfaces', 'Supercapacitor Micropores', 'Li-Sulfur Systems']
      },
      {
        title: 'Photocatalysis & Green Hydrogen',
        description: 'Water splitting photo-electrodes, CO2 reduction nano-catalysts, and environmental pollutant degradation.',
        subtopics: ['Solar Water Splitting', 'Zero-Emission Fuel Catalysts', 'Heavy Metal Removal', 'Membrane Filtration']
      }
    ]
  },
  {
    id: 6,
    trackNumber: 'Track 06',
    title: 'Computational and Theoretical Nanoscience',
    iconName: 'Network',
    colorGrad: 'from-purple-600 to-indigo-900',
    summary: 'Density Functional Theory (DFT), Molecular Dynamics (MD) simulations, and Machine Learning for nano-discovery.',
    topics: [
      {
        title: 'Ab-Initio & Density Functional Theory (DFT)',
        description: 'Electronic band structure calculations, phonon dispersion, and surface adsorption kinetics.',
        subtopics: ['Quantum ESPRESSO / VASP', 'GW Approximations', 'Exciton Binding Energy', 'Phonon Dynamics']
      },
      {
        title: 'Molecular Dynamics (MD) Simulations',
        description: 'Coarse-grained MD, reactive force fields (ReaxFF), and thermal/mechanical stress simulation at atomic scale.',
        subtopics: ['LAMMPS Simulation', 'Thermal Transport MD', 'Nanoparticle Aggregation', 'Fluid-Solid Interfaces']
      },
      {
        title: 'AI & Machine Learning in Materials Discovery',
        description: 'High-throughput virtual screening, neural network interatomic potentials, and generative inverse design.',
        subtopics: ['Graph Neural Networks (GNNs)', 'Crystal Structure Generation', 'Property Prediction Models']
      }
    ]
  },
  {
    id: 7,
    trackNumber: 'Track 07',
    title: 'Advanced Manufacturing and Nanofabrication',
    iconName: 'Layers',
    colorGrad: 'from-sky-600 to-blue-900',
    summary: 'Electron-beam lithography, nano-imprint lithography, precision metrology, and scalable nano-manufacturing.',
    topics: [
      {
        title: 'Sub-Micron Lithography & Patterning',
        description: 'E-beam lithography (EBL), extreme ultraviolet (EUV) resists, and maskless photolithography.',
        subtopics: ['EUV Photoresists', 'Nanoimprint Lithography (NIL)', 'Focused Ion Beam (FIB) Milling', 'Etch Selectivity']
      },
      {
        title: 'Scalable Industrial Nano-Manufacturing',
        description: 'Roll-to-roll printing of flexible electronics, industrial aerosol deposition, and metrology standards.',
        subtopics: ['Roll-to-Roll Printing', 'Atomic Precision Manufacturing', 'In-Line Metrology', 'Cleanroom Protocols']
      }
    ]
  },
  {
    id: 8,
    trackNumber: 'Track 08',
    title: 'Emerging Trends and Interdisciplinary Applications',
    iconName: 'Sparkles',
    colorGrad: 'from-rose-600 to-red-800',
    summary: 'Nano-ethic, regulatory frameworks, agri-nanotechnology, space-grade nano-coatings, and hybrid quantum technologies.',
    topics: [
      {
        title: 'Agri-Nanotechnology & Smart Farming',
        description: 'Nano-fertilizers, nano-pesticides encapsulation, and soil quality monitoring nanosensors.',
        subtopics: ['Controlled Release Fertilizers', 'Nano-Pesticide Safety', 'Crop Protection Biosensors']
      },
      {
        title: 'Extreme Environment Nano-Coatings',
        description: 'Thermal barrier coatings for aerospace, anti-corrosion superhydrophobic nanostructured surfaces.',
        subtopics: ['Superhydrophobic Surfaces', 'Aerospace Nanostructured Coatings', 'Space Radiation Shielding']
      }
    ]
  }
];

export const ORGANIZERS: CommitteeMember[] = [
  // Patrons
  {
    id: 'pat-1',
    name: 'Prof. (Dr.) Ajay K. Sharma',
    designation: 'Hon’ble Director',
    institution: 'National Institute of Technology (NIT) Delhi',
    department: 'Directorate',
    role: 'patron',
    image: '/images/director_Ajay_NITDelhi.webp',
    email: 'director@nitdelhi.ac.in',
    bio: 'Distinguished Director of NIT Delhi with over 30 years of research leadership in optical communications, photonics, and nanotechnology.',
    linkedIn: 'https://linkedin.com',
    scholar: 'https://scholar.google.com'
  },
  {
    id: 'pat-2',
    name: 'Prof. (Dr.) Lalit Kumar Awasthi',
    designation: 'Director',
    institution: 'National Institute of Technology (NIT) Uttarakhand',
    role: 'patron',
    image: null,
    email: 'director@nituk.ac.in',
    bio: 'Prominent researcher and administrator fostering collaborative technical education across premier institutions.'
  },
  {
    id: 'pat-3',
    name: 'Prof. (Dr.) Venu Gopal Achanta',
    designation: 'Director',
    institution: 'CSIR - National Physical Laboratory (CSIR-NPL), New Delhi',
    role: 'patron',
    image: null,
    email: 'director@nplindia.org',
    bio: 'Lead scientist in metamaterials, nanophotonics, and precision quantum metrology standards.'
  },
  {
    id: 'pat-4',
    name: 'Dr. R. S. Bawa',
    designation: 'Director General',
    institution: 'Khalsa College of Engineering & Technology (KCET), Amritsar',
    role: 'patron',
    image: null,
    email: 'dg@kcet.ac.in',
    bio: 'Eminent educational strategist instrumental in establishing inter-institutional research partnerships.'
  },

  // Organizing Chairpersons
  {
    id: 'chair-1',
    name: 'Dr. Geeta Sikka',
    designation: 'Dean (Academics) & Professor',
    institution: 'National Institute of Technology (NIT) Delhi',
    department: 'Department of Computer Science & Engineering',
    role: 'chair',
    image: '/images/prof_geeta_sikka_3c8bbc.webp',
    email: 'geetasikka@nitdelhi.ac.in',
    bio: 'Dean (Academics) at NIT Delhi leading academic excellence and computational engineering research.'
  },
  {
    id: 'chair-2',
    name: 'Dr. Jyoteesh Malhotra',
    designation: 'Dean (Research & Consultancy)',
    institution: 'National Institute of Technology (NIT) Delhi',
    department: 'Department of Electronics & Communication',
    role: 'chair',
    image: '/images/prof_jyoteesh_malhotra_af803a.webp',
    email: 'jyoteesh@nitdelhi.ac.in',
    bio: 'Dean (R&C) at NIT Delhi spearheading sponsored research projects and industrial nanotech consultancy.'
  },
  {
    id: 'chair-3',
    name: 'Dr. Manoj Kumar',
    designation: 'Dean (Faculty Welfare)',
    institution: 'National Institute of Technology (NIT) Delhi',
    department: 'Department of Electrical Engineering',
    role: 'chair',
    image: '/images/prof_manoj_kumar_taleja_3c8ba5.webp',
    email: 'manojkumar@nitdelhi.ac.in',
    bio: 'Dean (Faculty Welfare) at NIT Delhi focusing on faculty growth and advanced laboratory development.'
  },

  // Organizing Secretaries & Conveners
  {
    id: 'sec-1',
    name: 'Dr. Rikmantra Basu',
    designation: 'Associate Professor & Head',
    institution: 'National Institute of Technology (NIT) Delhi',
    department: 'Department of Electronics & Communication Engineering',
    role: 'secretary',
    image: '/images/dr_rikmantra_basu_3c8c71.webp',
    email: 'rikbasu@nitdelhi.ac.in',
    bio: 'Head of ECE Department at NIT Delhi specializing in semiconductor optoelectronic devices, heterostructures, and nanophotonic sensors.'
  },
  {
    id: 'sec-2',
    name: 'Dr. Prashant Kumar',
    designation: 'Associate Professor',
    institution: 'National Institute of Technology (NIT) Delhi',
    department: 'Department of Applied Sciences (Physics)',
    role: 'secretary',
    image: '/images/dr_prashant_kumar_af8149.webp',
    email: 'prashantkumar@nitdelhi.ac.in',
    bio: 'Leading investigator at NIT Delhi in nanomaterials for energy storage, supercapacitors, and green hydrogen.'
  },
  {
    id: 'conv-1',
    name: 'Dr. Anupama Sharma',
    designation: 'Assistant Professor',
    institution: 'National Institute of Technology (NIT) Delhi',
    department: 'Department of Applied Sciences (Chemistry)',
    role: 'convener',
    image: null,
    email: 'anupamasharma@nitdelhi.ac.in',
    bio: 'Researcher at NIT Delhi focused on functional nano-catalysts, green chemistry, and polymer nanocomposites.'
  },
  {
    id: 'conv-2',
    name: 'Dr. Ripudaman Singh',
    designation: 'Head of Department (Physics)',
    institution: 'KCET Amritsar',
    role: 'convener',
    image: null,
    email: 'ripudaman@kcet.ac.in',
    bio: 'Expert in thin film synthesis and solar cell nanostructures.'
  },

  // Advisory Committee
  {
    id: 'adv-1',
    name: 'Prof. (Dr.) Ashutosh Sharma',
    designation: 'Former Secretary DST & Professor',
    institution: 'IIT Kanpur',
    role: 'advisory',
    image: null,
    bio: 'SS Bhatnagar laureate and world authority on soft nano-patterning and self-assembly.'
  },
  {
    id: 'adv-2',
    name: 'Prof. (Dr.) Chennupati Jagadish',
    designation: 'President',
    institution: 'Australian Academy of Science & ANU Canberra',
    role: 'advisory',
    image: null,
    bio: 'Global pioneer in semiconductor nanowires and optoelectronic device fabrication.'
  },
  {
    id: 'adv-3',
    name: 'Prof. (Dr.) Pulickel M. Ajayan',
    designation: 'Chair, Department of Materials Science & NanoEngineering',
    institution: 'Rice University, USA',
    role: 'advisory',
    image: null,
    bio: 'Co-inventor of carbon nanotube synthesis techniques and 2D materials pioneer.'
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: 'spk-1',
    name: 'Prof. (Dr.) Mildred Dresselhaus Memorial Address',
    title: 'Keynote Speaker',
    institution: 'Massachusetts Institute of Technology (MIT), USA',
    country: 'United States',
    category: 'keynote',
    researchArea: 'Carbon Nanotubes, Graphene & Thermoelectric Nanostructures',
    bio: 'International pioneer in the physics of low-dimensional carbon nanostructures and quantum thermal transport.',
    image: null,
    publicationsUrl: 'https://scholar.google.com',
    websiteUrl: 'https://mit.edu'
  },
  {
    id: 'spk-2',
    name: 'Prof. (Dr.) C.N.R. Rao Lecture',
    title: 'Plenary Keynote',
    institution: 'JNCASR, Bengaluru, India',
    country: 'India',
    category: 'keynote',
    researchArea: 'Solid State Chemistry, Transition Metal Oxides & 2D Nanomaterials',
    bio: 'Bharat Ratna recipient and world-renowned chemist known for foundational contributions to novel nanostructures.',
    image: null,
    publicationsUrl: 'https://scholar.google.com'
  },
  {
    id: 'spk-3',
    name: 'Dr. Sanjay R. Dhakate',
    title: 'Chief Scientist & Head',
    institution: 'CSIR - National Physical Laboratory (CSIR-NPL), New Delhi',
    country: 'India',
    category: 'invited',
    researchArea: 'Advanced Carbon Products, Carbon Nanofibers & Composites',
    bio: 'Specialist in high-performance carbon-carbon composites and EMI shielding nanomaterials.',
    image: null,
    publicationsUrl: 'https://nplindia.org'
  },
  {
    id: 'spk-4',
    name: 'Prof. (Dr.) Yoichi Ando',
    title: 'Professor of Physics',
    institution: 'University of Cologne, Germany',
    country: 'Germany',
    category: 'invited',
    researchArea: 'Topological Insulators & Quantum Spintronics',
    bio: 'Leading experimentalist in topological superconductor synthesis and quantum electronic devices.',
    image: null,
    websiteUrl: 'https://uni-koeln.de'
  },
  {
    id: 'spk-5',
    name: 'Prof. (Dr.) Neeraj Khare',
    title: 'Professor, Department of Physics',
    institution: 'Indian Institute of Technology (IIT) Delhi',
    country: 'India',
    category: 'featured',
    researchArea: 'Nanostructured Solar Cells & Piezoelectric Energy Harvesting',
    bio: 'Renowned authority on nano-piezoelectric nanogenerators and functional magnetic oxide thin films.',
    image: null,
    publicationsUrl: 'https://iitd.ac.in'
  },
  {
    id: 'spk-6',
    name: 'Dr. Min-Feng Yu',
    title: 'Professor of Mechanical Engineering',
    institution: 'University of Illinois Urbana-Champaign, USA',
    country: 'United States',
    category: 'featured',
    researchArea: 'Nanomechanics, Atomic Force Microscopy & Carbon Nanotube Mechanics',
    bio: 'Pioneered direct mechanical testing of single carbon nanotubes and nanowires.',
    image: null,
    websiteUrl: 'https://illinois.edu'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    category: 'Faculty / Academicians',
    inrPrice: '₹5,000 + 18% GST',
    usdPrice: '$118 USD',
    recommended: true,
    features: [
      'Access to all Oral & Poster Technical Sessions',
      'Conference Delegate Kit & Hardcopy Certificate',
      'Lunch, High Tea & Gala Dinner Networking',
      'Opportunity to publish in Scopus/WoS proceedings',
      'NIT Delhi Campus Tour'
    ],
    notes: 'Base fee: ₹5,000 | Total with GST: ₹5,900'
  },
  {
    category: 'PhD Scholars / Postdocs',
    inrPrice: '₹4,000 + 18% GST',
    usdPrice: '$95 USD',
    features: [
      'Full Access to all 8 Technical Tracks',
      'Certificate of Oral/Poster Presentation',
      'Conference Kit & Daily Working Lunch',
      'Eligibility for Best Paper Presentation Award',
      'Mentorship Session with Keynote Speakers'
    ],
    notes: 'Base fee: ₹4,000 | Total with GST: ₹4,720'
  },
  {
    category: 'UG / PG Students',
    inrPrice: '₹2,000 + 18% GST',
    usdPrice: '$55 USD',
    features: [
      'Access to Keynote Lectures & Technical Sessions',
      'Digital Certificate of Participation',
      'Student Poster Presentation Entry',
      'Working Lunch & Refreshments',
      'Career Guidance in Nanotech Workshop'
    ],
    notes: 'Base fee: ₹2,000 | Total with GST: ₹2,360'
  },
  {
    category: 'Industry Delegates',
    inrPrice: '₹6,000 + 18% GST',
    usdPrice: '$150 USD',
    features: [
      'Full Access to Industry-Academia Conclave',
      'Exhibition & Product Showcase Space Option',
      'VIP Gala Dinner & Networking Lounge Access',
      'Delegate Kit & Hardcopy Certificate',
      'B2B Meeting Opportunities with Researchers'
    ],
    notes: 'Base fee: ₹6,000 | Total with GST: ₹7,080'
  },
  {
    category: 'Foreign Participants',
    inrPrice: 'USD 118',
    usdPrice: '$118 USD',
    features: [
      'Hybrid Option (In-person or Virtual Presentation)',
      'Global Scopus Proceedings Publication',
      'International Delegate Reception',
      'Cultural Evening Tour of New Delhi',
      'Official Invitation Letter for Visa Application'
    ],
    notes: 'Flat USD rate for overseas delegates'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'submission',
    question: 'How do I submit an abstract for NS&NT 2026?',
    answer: 'Abstracts must be submitted through the official Google Form or emailed directly to nsnt2026@nitdelhi.ac.in using the IEEE/Springer 1-page conference abstract template available for download on our website.'
  },
  {
    category: 'registration',
    question: 'Are there discounts available for group registrations?',
    answer: 'Yes! A 10% discount is available for institutions registering 5 or more student/faculty delegates together. Please contact the organizing committee at nsnt2026@nitdelhi.ac.in for group invoice codes.'
  },
  {
    category: 'registration',
    question: 'Is GST applicable on the registration fee?',
    answer: 'Yes, as per Government of India regulations, 18% GST is added to the base registration fee for Indian participants.'
  },
  {
    category: 'venue',
    question: 'Where is the conference held and how can I reach NIT Delhi?',
    answer: 'The conference will take place at the permanent campus of NIT Delhi located in Narela, Delhi (Plot No. FA1, Zone P1). It is easily accessible via the Delhi Metro (Red Line - Rithala or Yellow Line - Jahangirpuri/Samaypur Badli) followed by direct cab or campus feeder bus.'
  },
  {
    category: 'venue',
    question: 'Will accommodation be provided to participants?',
    answer: 'Limited hostel accommodation is available on campus for student delegates on a first-come, first-served basis at nominal charges. Partner hotel booking options near Narela and Rohini will also be shared upon acceptance.'
  },
  {
    category: 'general',
    question: 'Will selected papers be published in indexed journals?',
    answer: 'Yes. Peer-reviewed and accepted full papers will be published in Scopus and Web of Science (WoS) indexed conference proceedings (Springer/AIP/IOP) and affiliated SCI-indexed special journal issues.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "NS&NT 2026 brings together the top minds in nanotechnology across Asia and globally. The technical rigor and collaborative spirit of NIT Delhi is unmatched.",
    name: "Dr. Aris Thorne",
    role: "Senior Research Scientist",
    institution: "CSIR-NPL Collaborator"
  },
  {
    quote: "An extraordinary platform for young PhD scholars to present novel 2D materials research to internationally recognized professors.",
    name: "Dr. Meenakshi Sundaram",
    role: "Associate Professor",
    institution: "IIT Delhi Visitor"
  }
];

export const STATS = [
  { label: 'Expected Delegates', value: 450, suffix: '+' },
  { label: 'Keynote & Invited Speakers', value: 35, suffix: '+' },
  { label: 'Technical Tracks', value: 8, suffix: '' },
  { label: 'Collaborating Institutions', value: 4, suffix: '' },
  { label: 'Scopus/WoS Publications', value: 100, suffix: '%' },
  { label: 'Countries Represented', value: 18, suffix: '+' }
];
