const config = {
  title: "Vennela Neelap | Software Engineer",
  description: {
    long: "Portfolio of Vennela Neelap, a software engineer building reliable backend systems, full-stack applications, and applied AI. Experience across C#/.NET, Python, and cloud infrastructure — from a configuration-management platform at Honeywell to production API integrations and generative-AI research projects.",
    short:
      "Portfolio of Vennela Neelap, a software engineer working across C#/.NET, Python, full-stack web, and applied AI.",
  },
  keywords: [
    "Vennela Neelap",
    "Vennela",
    "portfolio",
    "software engineer",
    "backend engineer",
    "full-stack developer",
    "C#",
    ".NET",
    "ASP.NET Core",
    "Python",
    "PyTorch",
    "React",
    "Next.js",
    "machine learning",
    "generative AI",
    "University of South Florida",
  ],
  author: "Vennela Neelap",
  email: "neelapvennela@gmail.com",
  site: "https://vennelaneelap.vercel.app",

  // for github stars button
  githubUsername: "vennelaneelap",
  githubRepo: "Portfolio-Website",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/vennela-neelap",
    github: "https://github.com/vennelaneelap",
  },
};
export { config };
