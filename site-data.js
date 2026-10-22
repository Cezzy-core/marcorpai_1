const siteContent = {
  ventures: [
    {
      name: 'MarMind AI',
      category: 'AI and Machine Learning',
      position: 'Applied AI for real businesses.',
      description:
        'MarMind AI builds practical AI agents and machine-learning products that help businesses automate operations, understand customers, forecast demand, and make better decisions.',
      highlights: [
        'Vertical AI operations agents for SMEs',
        'AI customer support and lead qualification',
        'Demand forecasting for retail and e-commerce',
        'Multilingual voice and chat assistants for India'
      ],
      logo: 'MI'
    },
    {
      name: 'MarSilicon',
      category: 'Semiconductors and Compute Infrastructure',
      position: 'Compute for the AI era.',
      description:
        'MarSilicon focuses on the infrastructure layer of artificial intelligence: efficient inference, edge deployment, data movement, AI-cluster tooling, and next-generation compute access.',
      highlights: [
        'Edge-AI hardware and software kits',
        'Computer-vision systems for factories',
        'AI inference cost optimization tools',
        'RISC-V and edge-AI developer kits'
      ],
      logo: 'MS'
    },
    {
      name: 'MarShield',
      category: 'Cybersecurity',
      position: 'Security for humans, machines, and AI agents.',
      description:
        'MarShield protects modern organizations from evolving digital threats, with a focus on AI-agent security, machine identities, cloud security, fraud prevention, and proactive defense.',
      highlights: [
        'Machine identity and API credential security',
        'AI-agent access control and monitoring',
        'Autonomous security testing',
        'Deepfake and KYC fraud detection'
      ],
      logo: 'SH'
    },
    {
      name: 'MarVita',
      category: 'Healthcare and Biotechnology',
      position: 'Intelligent care for healthier lives.',
      description:
        'MarVita builds AI-powered healthcare and life-science tools that improve clinical workflows, patient engagement, chronic-care management, and biomedical research.',
      highlights: [
        'Ambient clinical documentation',
        'AI triage and patient routing',
        'Remote patient monitoring dashboards',
        'Clinical research and trial matching'
      ],
      logo: 'MV'
    },
    {
      name: 'MarPay',
      category: 'Fintech and Digital Payments',
      position: 'Payments, cash flow, and financial intelligence for modern businesses.',
      description:
        'MarPay builds digital payment and financial-operations tools that help businesses accept payments, automate invoicing, manage cash flow, detect fraud, and access smarter financial insights.',
      highlights: [
        'UPI, QR, and online payment acceptance',
        'Automated invoicing and reconciliation',
        'SME cash-flow forecasting',
        'AI fraud detection and transaction scoring'
      ],
      logo: 'MP'
    }
  ],
  industries: [
    {
      name: 'Intelligence',
      icon: 'AI',
      description:
        'The infrastructure powering the next generation of products: AI, data systems, cloud platforms, semiconductors, and security.',
      bullets: ['Artificial intelligence', 'Machine learning', 'Data infrastructure', 'Semiconductors', 'Cloud computing', 'Cybersecurity'],
      ventures: 'MarMind AI · MarSilicon · MarShield'
    },
    {
      name: 'Energy and Physical World',
      icon: 'PW',
      description:
        'The systems that reshape physical operations, mobility, energy, robotics, and high-value industrial infrastructure.',
      bullets: ['Renewable energy', 'Batteries', 'Electric vehicles', 'Robotics', 'Construction technology', 'Space technology'],
      ventures: 'MarSilicon · strategic ecosystem ventures'
    },
    {
      name: 'Life and Human Systems',
      icon: 'HS',
      description:
        'Products and platforms designed to improve healthcare delivery, biotech research, and the human experience at scale.',
      bullets: ['Biotechnology', 'Healthcare', 'Food technology', 'Aging and longevity', 'Personalized medicine'],
      ventures: 'MarVita · strategic health ecosystem investments'
    }
  ],
  caseStudies: [
    {
      name: 'MarMind Ops',
      label: 'Concept',
      problem: 'Local service businesses lose time to manual scheduling, support, and customer follow-ups.',
      solution: 'AI operations assistant for booking, lead qualification, notifications, and repetitive workflows.',
      user: 'Small clinics, real-estate teams, and service businesses.',
      features: ['Knowledge base copilots', 'Lead routing', 'Scheduling automation', 'Workflow analytics'],
      model: 'Monthly SaaS + usage pricing'
    },
    {
      name: 'MarSilicon EdgeVision',
      label: 'Prototype',
      problem: 'Factories need computer vision for safety and quality without expensive embedded infrastructure.',
      solution: 'Edge-AI kit enabling real-time inspection, anomaly detection, and operational monitoring.',
      user: 'Manufacturing plants and industrial operators.',
      features: ['Edge inference', 'Vision model orchestration', 'Safety dashboards', 'Factory integration'],
      model: 'Hardware-plus-software bundle'
    },
    {
      name: 'MarShield AgentGuard',
      label: 'Research',
      problem: 'Autonomous AI agents introduce new access risks and identity-management gaps.',
      solution: 'Security layer for agent permissions, behavioral controls, and policy enforcement.',
      user: 'Teams deploying AI assistants and automation at scale.',
      features: ['Identity trust layers', 'Behavior monitoring', 'Access policy controls', 'Audit logs'],
      model: 'Per-agent and enterprise licensing'
    },
    {
      name: 'MarVita ClinicFlow',
      label: 'Future Venture',
      problem: 'Clinics struggle with documentation burden and fragmented patient follow-up.',
      solution: 'AI clinical documentation and patient reminder workflow for providers and care teams.',
      user: 'Private clinics, hospitals, and telehealth teams.',
      features: ['Ambient notes', 'Intelligent triage', 'Patient reminders', 'Clinical analytics'],
      model: 'Per-provider SaaS pricing'
    },
    {
      name: 'MarPay CashPilot',
      label: 'Concept',
      problem: 'SMEs lack visibility into working capital and collections performance.',
      solution: 'Cash-flow forecasting engine that predicts shortfalls and automates follow-up.',
      user: 'Merchants, service providers, and growing businesses.',
      features: ['Forecasting', 'Automated reminders', 'Expensing intelligence', 'Lender integrations'],
      model: 'Subscription + value-added services'
    },
    {
      name: 'MarCorpAi Studio',
      label: 'Future Venture',
      problem: 'New deep-tech ideas need structured testing, product design, and commercialization support.',
      solution: 'Internal venture-building engine that turns research into focused companies with clear hypotheses and milestones.',
      user: 'Researchers, operators, founders, and strategic partners.',
      features: ['Opportunity mining', 'Prototype sprinting', 'Market tests', 'Capital and network support'],
      model: 'Portfolio buildout and strategic venture engine'
    }
  ],
  news: [
    {
      title: 'Why vertical AI agents will replace generic chatbots',
      category: 'AI Strategy',
      summary: 'The next generation of AI products will be specialized, workflow-aware, and deeply embedded in real operations.'
    },
    {
      title: 'The next bottleneck in AI is not the model—it is compute and data movement',
      category: 'Infrastructure',
      summary: 'As inference scales, efficient compute architecture and data handling become critical technology decisions.'
    },
    {
      title: 'Machine identities are the new attack surface',
      category: 'Cybersecurity',
      summary: 'AI-driven automation increases the need for identity governance, policy enforcement, and proactive defense.'
    },
    {
      title: 'How AI can make Indian healthcare more accessible',
      category: 'Healthcare',
      summary: 'Operational intelligence, documentation support, and remote monitoring can help expand access without compromising care.'
    },
    {
      title: 'Payments are becoming an intelligence layer for SMEs',
      category: 'Fintech',
      summary: 'Cash flow visibility, account intelligence, and automated workflows are creating a more strategic role for payments.'
    },
    {
      title: 'Inside MarCorpAi: how we build venture companies',
      category: 'Venture Studio',
      summary: 'A practical framework for identifying technology shifts, validating demand, and creating an operating system for growth.'
    }
  ]
};
