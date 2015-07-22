exports.index = function(req, res){
  res.render('index', { 
    title: 'Lisa Burgess',
    description: 'Lisa Burgess is an Analyst at Uber in California.',
    about: ['I am a big picture thinker with a passion for data, analysis and human behavior. Relatedly, as the world we live in is constantly changing, I have a passion for technology and the implications it has on the way we interact, behave and make decisions. ',
    'I have always had a deep curiosity for why we behave the way we do and this passion has shaped and influenced my academic background and training. My desire to understand human behavior and the implications it has from a business perspective lead me first to completing my Honors Degree in Psychology, followed by my Masters in Organizational Behavior at Queens School of Business. It is through my education that I developed my critical analysis and research skills as well as an understanding of marketing and human behavior.',
    'My experience and roles have been focused on my two main fascinations: people and data, ultimately leading me into the realm of digital marketing and analytics. In my current role as a Senior Digital Analytics Planner at Klick Health, I am responsible for transforming marketing and web analytics data into compelling information that provides insight into marketing and business performance. Through effective story telling, I deliver recommendations to clients that foster data-based decision making.'],
    social:[
      {
        'title': 'Github',
        'url': 'https://github.com/lisaburgess',
        'class': 'github'
      },
      {
        'title': 'Twitter',
        'url': 'https://twitter.com/lisamcoulson',
        'class': 'twitter'
      },
      {
        'title': 'LinkedIn',
        'url': 'https://www.linkedin.com/pub/lisa-burgess/b/972/b2b',
        'class': 'linkedin'
      }
    ]
  });
};
