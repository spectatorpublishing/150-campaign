export const DONATE_URL = 'https://give.columbia.edu/'; // TODO: replace with actual donation link
export const FAQ_ANCHOR = '#faq';

export const mission = {
  heading: 'Our Mission',
  paragraphs: [
    'The mission of the Columbia Daily Spectator is twofold: to serve as the independent news source reporting on Columbia University and the Morningside Heights area to serve our audience and community, and to train the next generation of journalists and leaders through giving our staff real opportunities to do work that matters.',
    'Since our founding in 1877, the Spectator has trained generations of award-winning journalists. They learn the craft by producing tough, independent reporting on the university—and they go on to publish work of lasting impact at America\'s most powerful news organizations.',
  ],
};

export const goal = {
  heading: 'Our Goal',
  intro:
    'Spectator is celebrating its 150th anniversary at a moment of strength. But this success comes at an urgent moment: Spec has almost the smallest endowment among Ivy League newspapers. Independent journalism is more important than ever. If we want another 150 years of Spectator, this is the moment to act.',
  callout:
    'We will raise $1 million to accomplish two goals: to fortify Spectator and invest in its people.',
};

export const goals = [
  {
    id: 'secure-the-future',
    number: 'Goal 1',
    title: '1) Secure the Future',
    body: [
      'Spectator\'s financial position is fragile. We will add $400,000 to Spectator\'s endowment—a 50 percent increase. The combined corpus will produce roughly $60,000 in income in perpetuity, backstopping nearly a third of the operating budget. That stability will let Spectator plan boldly, protect its independence, and thrive even in worsening economic conditions.',
    ],
    highlight: 'We will add $400,000 to Spectator\'s endowment—a 50 percent increase.',
  },
  {
    id: 'invest-in-people',
    number: 'Goal 2',
    title: '2) Invest in our people',
    intro: 'A new suite of programs will amplify this cycle of excellence.',
    subsections: [
      {
        heading: 'Attract the best students, from the widest backgrounds…',
        body: 'Spec\'s work study program will grow by $250,000, so that students of all economic backgrounds can join the newsroom. Over 25 years, these funds will help more than 600 aspiring journalists get their start.',
      },
      {
        heading: '…So that they can create the strongest journalism on campus…',
        body: 'Endowed by $100,000, a new prize will grant $3,000 every year to an outstanding student reporter—half in the fall, and half in the spring, to encourage continued in-depth coverage.',
      },
      {
        heading: '…Then launch into their first jobs…',
        body: 'A new stipend pool of $225,000 will help graduating students afford entry-level media positions. These fellowships—three at $5,000 per year—can be the difference between a career that starts and one that doesn\'t.',
      },
      {
        heading: '… And return to campus to develop the next generation of Spec talent.',
        body: 'A new speaker series, endowed at $25,000, will bring working journalists to campus for informal lunches with students every quarter.',
      },
    ],
  },
];

// Each segment: { text, bold, italic } — renders inline accordingly
export const testimonials = [
  {
    segments: [
      { text: '“Journalism—including student journalism—is under incredible pressure. ' },
      { text: 'Spec', italic: true },
      { text: ' continues to serve the Columbia community so well in these particularly challenging times. ' },
      { text: 'I am proud to support the place where I learned so much about journalistic ethics, excellence, and teamwork—and ensure it can continue on for generations to come.', bold: true },
      { text: ' Please join me.”' },
    ],
    name: 'Sara Just ’88',
    title: 'Senior executive producer, PBS NewsHour',
  },
  {
    segments: [
      { text: '“' },
      { text: 'Spectator', italic: true },
      { text: ' is where I learned so many important lessons in writing, journalism, and good citizenship. Since my time, ' },
      { text: 'Spec', bold: true, italic: true },
      { text: ' ', bold: true },
      { text: 'has gotten even better, with work-study programs that ensure opportunity for all.', bold: true },
      { text: ' Now, in trying times for journalism in America and around the world, ' },
      { text: 'Spec', italic: true },
      { text: ' needs help to secure its future. I’m proud to support its next 150 years.”' },
    ],
    name: 'Robert Kolker ’91',
    title: 'Author of Lost Girls and Hidden Valley Road',
  },
  {
    segments: [
      { text: '“' },
      { text: 'Spec', italic: true },
      { text: ' journalists have jobs that make mine look easy. Reporting with little or no pay, on your own community, while juggling schoolwork—it’s no joke. Thank you to these journalists, and ' },
      { text: 'let’s do whatever we can to help them on their quest', bold: true },
      { text: '.”' },
    ],
    name: 'Jodi Kantor ’96',
    title: 'Investigative reporter, The New York Times',
  },
  {
    segments: [
      { text: '“As a former work-study kid, ' },
      { text: 'I’m proud to support this campaign to make sure all students have the chance to join ', bold: true },
      { text: 'Spectator', bold: true, italic: true },
      { text: ' and build the next generation of great journalists.”', bold: true },
    ],
    name: 'Kirsten Danis ’92',
    title: 'Investigations editor, The New York Times',
  },
  {
    segments: [
      { text: '“' },
      { text: 'Working at ', bold: true },
      { text: 'Spectator', bold: true, italic: true },
      { text: ' foreshadowed a lifetime in journalism', bold: true },
      { text: '—the immediate anxiety and delayed satisfaction that comes from holding powerful interests to account, and the adrenaline high of bringing fresh understanding to the community. (Plus the thrill of simply getting something published at all.)”' },
    ],
    name: 'Marcus Brauchli ’83',
    title: 'Former executive editor, The Washington Post',
  },
  {
    segments: [
      { text: '“I learned a lot of wonderful things at Columbia, but nothing topped editing a daily paper during the 1968 student strike. ' },
      { text: 'Spectator', bold: true, italic: true },
      { text: ' launched me on a career in journalism that’s still going strong almost 60 years later.”', bold: true },
    ],
    name: 'Robert Friedman ’68',
    title: 'Senior editor for investigations, Bloomberg News',
  },
  {
    segments: [
      { text: '“At 150 years and counting, ' },
      { text: 'the ', bold: true },
      { text: 'Spectator', bold: true, italic: true },
      { text: '’s archive is an unparalleled resource for anyone seeking to understand how this university rose, faltered, and reinvented itself — and may yet have to do so again', bold: true },
      { text: '. It is imperative we act to preserve this publication.”' },
    ],
    name: 'Robert McCaughey',
    title: 'Historian and author of Stand, Columbia',
  },
];

export const timeline = [
  { year: '1877', event: 'Founded as a twice-monthly publication', image: '1877' },
  { year: '1902', event: 'Spectator becomes a daily newspaper', image: null },
  { year: '1933', event: 'Covering campus protests against fascism', image: '1933', imageOnly: true },
  { year: '1962', event: 'Financial independence from Columbia', image: null },
  { year: '1968', event: 'Hamilton Hall', image: '1968', imageOnly: true },
  { year: '1983', event: 'Co-ed at last', image: '1983', imageOnly: true },
  { year: '1988', event: 'We Win!', image: '1988', imageOnly: true },
  { year: '1998', event: 'columbiaspectator.com goes online', image: null },
  { year: '2004', event: 'A new format: broadsheet and color. The Eye magazine debuts.', image: '2004' },
  { year: '2014', event: 'Shift to digital-first publishing', image: null },
  { year: '2024', event: 'Encampments spread across the nation', image: '2024', imageOnly: true },
  { year: '2027', event: '150th anniversary celebration', image: null },
];

export const faq = [
  {
    question: 'Why now?',
    answer:
      'Spectator is turning 150. The milestone is an opportunity to build an institution that lasts another 150 years. We have momentum, community trust, and a clear plan—this is the moment to act.',
  },
  {
    question: 'How will the money be used?',
    answer:
      '$400,000 will go to the endowment, and $600,000 will go to a people fund supporting stipends and fellowships for our staff.',
  },
  {
    question: 'Is my donation tax-deductible?',
    answer:
      'Yes. Donations are processed through Columbia University and are fully tax-deductible to the extent allowed by law.',
  },
  {
    question: 'Can I give to a specific fund?',
    answer:
      'Yes. When you donate, you can designate your gift to the endowment, the people fund, or leave it unrestricted.',
  },
];
