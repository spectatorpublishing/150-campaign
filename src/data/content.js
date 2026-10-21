export const DONATE_URL = '/donate';
export const FAQ_ANCHOR = '#faq';

export const mission = {
  heading: 'Our Mission',
  paragraphs: [
    'Founded in 1877, the Columbia Daily Spectator has trained generations of award-winning journalists. They learn the craft by producing tough, independent reporting on the university—and they go on to publish work of lasting impact at America\'s most powerful news organizations.',
    'Spectator staffers have led The New York Times, The Washington Post, network news divisions, and other essential outlets; they have written critically acclaimed books; they have won at least 16 Pulitzer Prizes, as well as Oscars and Emmys and MacArthur Fellowships.'
  ],
};

// Update `raised` as amount changes
export const fundraising = {
  goal: 1500000,
  raised: 1034000,
};

export const whyNow = {
  heading: 'Why now?',
  paragraphs: [
    { bold: 'Spec is celebrating its 150th anniversary at a moment of strength.', rest: ' Recognized twice in recent years as the best student newspaper in America, Spectator is the essential publication for recording campus history, informing the public, and keeping leadership accountable.' },
    { bold: 'But this success comes at a dangerous and urgent moment.', rest: ' Spec has almost the smallest endowment among Ivy League newspapers. Its revenue streams are threatened at the same time that ominous trends in technology, government, and the law are converging — and making independent journalism more important than ever.' },
    { bold: 'If we want another 150 years of Spectator, this is the moment to act.', rest: ' It is a once-in-a-lifetime opportunity to leverage our strength and guarantee the future of student journalism at Columbia for generations to come.' },
  ],
};

export const goal = {
  heading: 'Our Goal',
  intro:
    'Spectator is celebrating its 150th anniversary at a moment of strength. But this success comes at an urgent moment: Spec has almost the smallest endowment among Ivy League newspapers. Independent journalism is more important than ever. If we want another 150 years of Spectator, this is the moment to act.',
  callout:
    'We will raise $1.5 million to accomplish two goals: to fortify Spectator and invest in its people.',
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
  { year: '1902', event: 'Spectator becomes a daily newspaper', image: '1902' },
  { year: '1933', event: 'Covering campus protests against fascism', image: '1933', imageOnly: true },
  { year: '1962', event: 'Financial independence from Columbia', image: '1962', bgSize: 'contain', bgColor: '#d6cfc0' },
  { year: '1968', event: 'Hamilton Hall', image: '1968', imageOnly: true },
  { year: '1983', event: 'Co-ed at last', image: '1983', imageOnly: true },
  { year: '1988', event: 'We Win!', image: '1988', imageOnly: true },
  { year: '1998', event: 'columbiaspectator.com goes online', image: '1998', bgSize: 'contain', bgColor: '#d0cfc9' },
  { year: '2004', event: 'A new format: broadsheet and color. The Eye magazine debuts.', image: '2004' },
  { year: '2014', event: 'Shift to digital-first publishing', image: '2014' },
  { year: '2024', event: 'Encampments spread across the nation', image: '2024', imageOnly: true },
  { year: '2027', event: '150th anniversary celebration', image: '2027', bgSize: 'contain', bgColor: '#fff' },
];

export const donorOpportunities = [
  {
    amount: '$500,000',
    title: 'Endow the cost of Spectator’s print products.',
    description: 'You can ensure students continue to learn the skills of print journalism—collecting and displaying their best work for maximum impact—regardless of the medium’s costs. All editions will recognize your contribution in the masthead.',
  },
  {
    amount: '$200,000',
    title: 'Name the professional fellows program.',
    description: 'We expect that this stipend will benefit three students each year. Over the course of the program, you’ll help as many as 75 journalists begin their career.',
  },
  {
    amount: '$100,000',
    title: 'Name a new prize for outstanding reporting.',
    description: 'Friends and colleagues have come together to honor Stuart Karle ’82, Spectator’s 105th editor-in-chief and longtime board member.',
  },
  {
    amount: '$50,000',
    title: 'Sponsor five beneficiaries of the financial aid program.',
    description: 'You’ll receive personalized notes from each year’s crop of students, with details about the work you’re making possible.',
  },
  {
    amount: '$25,000',
    title: 'Sponsor a new speaker series.',
    description: 'You’ll make it possible for as many as 100 top journalists to visit campus and meet intimately with Spectator’s staff.',
  },
];

export const faq = [
  {
    question: 'Is my donation tax deductible?',
    answer: 'Yes. Spectator operates as Spectator Publishing Co., a 501c3 nonprofit (EIN 13-1975005), and donations are fully tax-deductible.',
  },
  {
    question: 'How can I make a leadership gift?',
    answer: 'Contact giving@columbiaspectator.com to discuss larger gifts with even greater impact.',
  },
  {
    question: 'Can I choose how my donation is used?',
    answer: 'Yes. When you donate, please include your instructions.',
  },
  {
    question: 'Is Spectator financially independent from Columbia University?',
    answer: 'Yes, Spectator has been financially independent from the university since 1962.',
  },
  {
    question: 'How can I maximize my donation?',
    answer: [
      'Gifts of cash—by check, wire transfer, or credit card—are the most effective way to support Spectator, especially with multi-year pledges.',
      'Giving stock or other securities can be a tax-efficient option. In most cases, you can avoid capital gains tax on an asset that has appreciated and receive a charitable deduction based on the value on the date of the gift.',
      'Give a Qualified Charitable Distribution. You may be able to direct your IRA\'s Required Minimum Distribution (RMD) to Spectator and reduce your taxable income.',
      'Matching gift programs are offered by many employers.',
      'Planned giving—such as a bequest—is an enduring way to honor your legacy. Most gifts of this type would fall outside the scope of this campaign; contact us at giving@columbiaspectator.com to discuss.',
    ],
  },
];
