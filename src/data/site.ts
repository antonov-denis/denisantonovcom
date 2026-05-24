export const site = {
  name: 'Denis Antonov',
  title: 'Denis Antonov - Software Engineer',
  description:
    'Software engineer in Sofia building reusable product systems, platform capabilities, and maintainable frontend architecture.',
  email: 'hello@denisantonov.dev',
  location: 'Sofia, Bulgaria',
  availability: 'Open to platform-minded product work',
};

export const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#principles', label: 'Principles' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const valueCards = [
  {
    title: 'Modernise without stopping the product',
    body: 'I replace fragile frontend systems through deliberate migration plans, shared standards, and staged delivery.',
    proof: 'Frontend rewrite, AWS deployment flow, shared component patterns',
    before: 'Fragmented implementation',
    after: 'Shared architecture teams can extend',
  },
  {
    title: 'Turn repeated work into a model',
    body: 'When the same change touches too many files, I look for the hidden domain model and make it explicit.',
    proof: 'Configuration architecture, deep modules, thinner interfaces',
    before: 'One page update across many files',
    after: 'Central page and domain configuration',
  },
  {
    title: 'Build capability, not only features',
    body: 'Reusable systems need documentation, rollout paths, validation, and ownership so other teams can actually adopt them.',
    proof: 'Event-driven audio pipeline, six-product adoption, rollout notes',
    before: 'Single-product implementation',
    after: 'Reusable platform capability',
  },
];

export const projects = [
  {
    id: 'frontend',
    label: 'Frontend Modernisation',
    title: 'Cleaner foundations without pausing the product.',
    summary:
      'A fragmented frontend had drifted away from shared platform standards. The migration was planned as a sequence of manageable milestones, rebuilt with shared patterns, and deployed through AWS-aligned workflows.',
    outcome:
      'A maintainable frontend foundation delivered in roughly two months, with less platform drag and better alignment across FT Specialist products.',
    stages: ['Audit', 'Map drift', 'Sequence milestones', 'Rebuild standards', 'Transfer ownership'],
  },
  {
    id: 'audio',
    label: 'Read Aloud Capability',
    title: 'Asynchronous product work made adoptable.',
    summary:
      'Editorial content needed to become listenable across products. The system handles publish events, generation workers, readiness state, validation, playback, analytics, and rollout guidance.',
    outcome:
      'A shared audio capability that could be adopted across six products without six separate implementations.',
    stages: ['Publish event', 'Request audio', 'Persist state', 'Validate playback', 'Measure use'],
  },
  {
    id: 'config',
    label: 'Configuration Refactor',
    title: 'One page change should not mean twelve file edits.',
    summary:
      'A title-based configuration model created duplication and maintenance cost. A page and domain model moved decisions into one clearer central configuration.',
    outcome:
      'Less duplicated code, simpler future changes, and shared-page behaviour that is easier to understand and extend.',
    stages: ['Find duplication', 'Spike options', 'Model domains', 'Reduce coupling', 'Document rules'],
  },
];

export const principles = [
  {
    title: 'Start with friction',
    body: 'Before changing code, I look for where teams lose time: repeated edits, unclear ownership, brittle interfaces, or missing documentation.',
    practice: 'Map the delay before proposing the abstraction.',
  },
  {
    title: 'Prefer reusable capability',
    body: 'A feature becomes more valuable when another team can adopt it without rediscovering the same operational problems.',
    practice: 'Build validation, rollout paths, docs, and ownership into delivery.',
  },
  {
    title: 'Design for real operations',
    body: 'Good architecture accounts for delay, failure, readiness, observability, rollout, and future maintainers.',
    practice: 'Async systems need state, retries, user-facing checks, and clear recovery paths.',
  },
  {
    title: 'Translate technical value',
    body: 'Stakeholders need to understand risk, trade-offs, user value, and why a technical decision matters.',
    practice: 'Explain what becomes faster, safer, clearer, or reusable.',
  },
];

export const skills = [
  {
    group: 'Frontend systems',
    items: ['TypeScript', 'React', 'Astro', 'Accessibility', 'Design systems'],
  },
  {
    group: 'Platform work',
    items: ['Node.js', 'AWS', 'EventBridge', 'Serverless', 'CI/CD'],
  },
  {
    group: 'Product architecture',
    items: ['Configuration models', 'Event workflows', 'Documentation', 'Rollout planning'],
  },
  {
    group: 'Data and APIs',
    items: ['REST APIs', 'SQL', 'Service integration', 'Operational reporting'],
  },
];

export const experience = [
  {
    meta: 'Financial Times - Jul 2025 to Present',
    role: 'Software Engineer',
    body: 'Building platform capabilities and reusable architecture where frontend systems, backend workflows, editorial needs, and business value intersect.',
    tags: ['frontend modernisation', 'event-driven architecture', 'platform ownership'],
  },
  {
    meta: 'Intermedia - Aug 2023 to Jun 2025',
    role: 'Software Engineer',
    body: 'Developed backend services, APIs, SQL-backed workflows, and responsive client-side applications across data-intensive platforms.',
    tags: ['backend services', 'APIs', 'SQL', 'maintainable delivery'],
  },
  {
    meta: 'CluneTech - Apr 2022 to Jul 2023',
    role: 'Business Representative',
    body: 'Worked directly with clients, financial workflows, documentation, and operational problem-solving, shaping how technical trade-offs are communicated today.',
    tags: ['client communication', 'financial workflows', 'documentation'],
  },
  {
    meta: 'Telerik Academy',
    role: 'Mentor',
    body: 'Helps students move from specifications to working applications, advising on architecture, technology choices, code quality, and practical engineering habits.',
    tags: ['mentorship', 'code reviews', 'system design'],
  },
];

export const impacts = [
  ['fragmented frontend implementation', 'shared architecture and reusable modules'],
  ['one product needing audio', 'reusable capability across six products'],
  ['page updates spread across many files', 'centralised page and domain configuration'],
  ['technical work hidden in implementation detail', 'documented capability teams can adopt'],
];
