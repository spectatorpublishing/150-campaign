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
    title: 'Secure the Future',
    body: [
      'Spectator\'s financial position is fragile. We will add $400,000 to Spectator\'s endowment—a 50 percent increase. The combined corpus will produce roughly $60,000 in income in perpetuity, backstopping nearly a third of the operating budget. That stability will let Spectator plan boldly, protect its independence, and thrive even in worsening economic conditions.',
    ],
    highlight: 'We will add $400,000 to Spectator\'s endowment—a 50 percent increase.',
  },
  {
    id: 'invest-in-people',
    number: 'Goal 2',
    title: 'Invest in Our People',
    body: [
      'Great journalism requires great journalists. We will add $600,000 to a fund dedicated to supporting our staff—expanding stipends, creating fellowships, and ensuring every student who joins Spectator can afford to do the work.',
    ],
    highlight: 'We will add $600,000 to support Spectator\'s staff.',
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
