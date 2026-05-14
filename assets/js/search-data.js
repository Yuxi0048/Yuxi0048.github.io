// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/yuxizhang.github.io/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "selected publications on GPR, underground utility mapping, construction informatics, and infrastructure inspection.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/yuxizhang.github.io/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/yuxizhang.github.io/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/yuxizhang.github.io/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A concise public CV draft. Replace or extend this with formal education, publications, and appointments when ready.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/yuxizhang.github.io/cv/";
          },
        },{id: "news-started-a-github-pages-portfolio-draft-using-al-folio",
          title: 'Started a GitHub Pages portfolio draft using al-folio.',
          description: "",
          section: "News",},{id: "projects-gpr-data-classifier",
          title: 'GPR Data Classifier',
          description: "Proof-of-concept public repository for detecting and classifying hyperbolas in GPR data.",
          section: "Projects",handler: () => {
              window.location.href = "/yuxizhang.github.io/projects/gpr-data-classifier/";
            },},{id: "projects-gpr-wheel-encoder-imu-localization",
          title: 'GPR Wheel Encoder--IMU Localization',
          description: "Factor-graph localization using wheel odometry, IMU preintegration, yaw priors, and weak GPR revisit constraints.",
          section: "Projects",handler: () => {
              window.location.href = "/yuxizhang.github.io/projects/gpr-wheel-imu-localization/";
            },},{id: "projects-pipe-network-completion",
          title: 'Pipe Network Completion',
          description: "Infrastructure data workflow around pipe-network completion and utility-network reasoning.",
          section: "Projects",handler: () => {
              window.location.href = "/yuxizhang.github.io/projects/pipe-network-completion/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%61%6E%32%38%38%39@%70%75%72%64%75%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Yuxi0048", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/yuxizhang.github.io/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
