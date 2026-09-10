// Skill names. The subset whose `name` matches a keycap object inside
// public/assets/skills-keyboard.spline also appears on the 3D keyboard; the
// rest render only in the HTML grid + experience chips (the keycap lookup in
// animated-background.tsx bails out safely when an object isn't found).
export enum SkillNames {
  // --- languages ---
  PYTHON = "python",
  CSHARP = "csharp",
  CPP = "cpp",
  JAVA = "java",
  JS = "js",
  TS = "ts",
  // --- backend / frameworks ---
  DOTNET = "dotnet",
  ASPNET = "aspnet",
  BLAZOR = "blazor",
  FASTAPI = "fastapi",
  SPRING = "spring",
  NESTJS = "nestjs",
  NODEJS = "nodejs",
  EXPRESS = "express",
  // --- frontend ---
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  HTML = "html",
  CSS = "css",
  // --- data ---
  POSTGRES = "postgres",
  SQLSERVER = "sqlserver",
  MYSQL = "mysql",
  MONGODB = "mongodb",
  // --- ai / ml ---
  PYTORCH = "pytorch",
  HUGGINGFACE = "huggingface",
  PANDAS = "pandas",
  NUMPY = "numpy",
  // --- cloud / devops ---
  DOCKER = "docker",
  KUBERNETES = "kubernetes",
  AWS = "aws",
  TERRAFORM = "terraform",
  JENKINS = "jenkins",
  ACTIONS = "actions",
  LINUX = "linux",
  VERCEL = "vercel",
  // --- tooling ---
  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  PRETTIER = "prettier",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const SKILLS: Record<SkillNames, Skill> = {
  // ---------------- languages ----------------
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Where the models, the pipelines and the analysis live.",
    color: "#3776ab",
    icon: `${DI}/python/python-original.svg`,
  },
  [SkillNames.CSHARP]: {
    id: 2,
    name: "csharp",
    label: "C#",
    shortDescription: "My daily driver for services that have to stay up.",
    color: "#68217a",
    icon: `${DI}/csharp/csharp-original.svg`,
  },
  [SkillNames.CPP]: {
    id: 3,
    name: "cpp",
    label: "C++",
    shortDescription: "Where I learned what the machine is actually doing.",
    color: "#00599c",
    icon: `${DI}/cplusplus/cplusplus-original.svg`,
  },
  [SkillNames.JAVA]: {
    id: 4,
    name: "java",
    label: "Java",
    shortDescription: "Spring Boot APIs, and a lot of coursework.",
    color: "#f89820",
    icon: `${DI}/java/java-original.svg`,
  },
  [SkillNames.JS]: {
    id: 5,
    name: "js",
    label: "JavaScript",
    shortDescription: "The glue holding every frontend together.",
    color: "#f0db4f",
    icon: `${DI}/javascript/javascript-original.svg`,
  },
  [SkillNames.TS]: {
    id: 6,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript, but the compiler catches me first.",
    color: "#007acc",
    icon: `${DI}/typescript/typescript-original.svg`,
  },

  // ---------------- backend / frameworks ----------------
  [SkillNames.DOTNET]: {
    id: 7,
    name: "dotnet",
    label: ".NET",
    shortDescription: "Worker services, console apps, and everything between.",
    color: "#512bd4",
    icon: `${DI}/dotnetcore/dotnetcore-original.svg`,
  },
  [SkillNames.ASPNET]: {
    id: 8,
    name: "aspnet",
    label: "ASP.NET Core",
    shortDescription: "REST APIs with real auth, validation and audit trails.",
    color: "#512bd4",
    icon: `${DI}/dot-net/dot-net-original.svg`,
  },
  [SkillNames.BLAZOR]: {
    id: 9,
    name: "blazor",
    label: "Blazor",
    shortDescription: "C# on the frontend, and surprisingly pleasant.",
    color: "#512bd4",
    icon: `${DI}/blazor/blazor-original.svg`,
  },
  [SkillNames.FASTAPI]: {
    id: 10,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "My go-to when Python needs to answer HTTP.",
    color: "#009688",
    icon: `${DI}/fastapi/fastapi-original.svg`,
  },
  [SkillNames.SPRING]: {
    id: 11,
    name: "spring",
    label: "Spring Boot",
    shortDescription: "JWT, RBAC and relational data on the JVM.",
    color: "#6db33f",
    icon: `${DI}/spring/spring-original.svg`,
  },
  [SkillNames.NESTJS]: {
    id: 12,
    name: "nestjs",
    label: "NestJS",
    shortDescription: "Structured Node, WebSockets, and real-time sync.",
    color: "#e0234e",
    icon: `${DI}/nestjs/nestjs-original.svg`,
  },
  [SkillNames.NODEJS]: {
    id: 13,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Event loops, sockets, and a lot of npm install.",
    color: "#6cc24a",
    icon: `${DI}/nodejs/nodejs-original.svg`,
  },
  [SkillNames.EXPRESS]: {
    id: 14,
    name: "express",
    label: "Express",
    shortDescription: "Middleware all the way down.",
    color: "#fff",
    icon: `${DI}/express/express-original.svg`,
  },

  // ---------------- frontend ----------------
  [SkillNames.REACT]: {
    id: 15,
    name: "react",
    label: "React",
    shortDescription: "Components, hooks, and the occasional re-render hunt.",
    color: "#61dafb",
    icon: `${DI}/react/react-original.svg`,
  },
  [SkillNames.NEXTJS]: {
    id: 16,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React, including the site you are reading.",
    color: "#fff",
    icon: `${DI}/nextjs/nextjs-original.svg`,
  },
  [SkillNames.TAILWIND]: {
    id: 17,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Styling without leaving the markup.",
    color: "#38bdf8",
    icon: `${DI}/tailwindcss/tailwindcss-original.svg`,
  },
  [SkillNames.HTML]: {
    id: 18,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic markup, because accessibility is not optional.",
    color: "#e34c26",
    icon: `${DI}/html5/html5-original.svg`,
  },
  [SkillNames.CSS]: {
    id: 19,
    name: "css",
    label: "CSS",
    shortDescription: "Layouts that survive contact with a phone screen.",
    color: "#563d7c",
    icon: `${DI}/css3/css3-original.svg`,
  },

  // ---------------- data ----------------
  [SkillNames.POSTGRES]: {
    id: 20,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "The relational default I reach for first.",
    color: "#336791",
    icon: `${DI}/postgresql/postgresql-original.svg`,
  },
  [SkillNames.SQLSERVER]: {
    id: 21,
    name: "sqlserver",
    label: "SQL Server",
    shortDescription: "Where the manufacturing data actually lived.",
    color: "#cc2927",
    icon: `${DI}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
  },
  [SkillNames.MYSQL]: {
    id: 22,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Dependable, everywhere, still going.",
    color: "#00758f",
    icon: `${DI}/mysql/mysql-original.svg`,
  },
  [SkillNames.MONGODB]: {
    id: 23,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Documents, when rows would only get in the way.",
    color: "#4db33d",
    icon: `${DI}/mongodb/mongodb-original.svg`,
  },

  // ---------------- ai / ml ----------------
  [SkillNames.PYTORCH]: {
    id: 24,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Diffusion, GANs, transformers, and long training runs.",
    color: "#ee4c2c",
    icon: `${DI}/pytorch/pytorch-original.svg`,
  },
  [SkillNames.HUGGINGFACE]: {
    id: 25,
    name: "huggingface",
    label: "Hugging Face",
    shortDescription: "Diffusers, checkpoints, and standing on giants.",
    color: "#ffd21e",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
  [SkillNames.PANDAS]: {
    id: 26,
    name: "pandas",
    label: "Pandas",
    shortDescription: "A million transactions, cleaned before breakfast.",
    color: "#150458",
    icon: `${DI}/pandas/pandas-original.svg`,
  },
  [SkillNames.NUMPY]: {
    id: 27,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Arrays, and the math that rides on them.",
    color: "#4dabcf",
    icon: `${DI}/numpy/numpy-original.svg`,
  },

  // ---------------- cloud / devops ----------------
  [SkillNames.DOCKER]: {
    id: 28,
    name: "docker",
    label: "Docker",
    shortDescription: "It works on my machine, and now on yours.",
    color: "#2496ed",
    icon: `${DI}/docker/docker-original.svg`,
  },
  [SkillNames.KUBERNETES]: {
    id: 29,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "Orchestrating containers so I do not have to.",
    color: "#326ce5",
    icon: `${DI}/kubernetes/kubernetes-plain.svg`,
  },
  [SkillNames.AWS]: {
    id: 30,
    name: "aws",
    label: "AWS",
    shortDescription: "S3 buckets, deploys, and a careful eye on the bill.",
    color: "#ff9900",
    icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  [SkillNames.TERRAFORM]: {
    id: 31,
    name: "terraform",
    label: "Terraform",
    shortDescription: "Infrastructure you can code review.",
    color: "#7b42bc",
    icon: `${DI}/terraform/terraform-original.svg`,
  },
  [SkillNames.JENKINS]: {
    id: 32,
    name: "jenkins",
    label: "Jenkins",
    shortDescription: "The build server that never sleeps.",
    color: "#d24939",
    icon: `${DI}/jenkins/jenkins-original.svg`,
  },
  [SkillNames.ACTIONS]: {
    id: 33,
    name: "actions",
    label: "GitHub Actions",
    shortDescription: "CI that starts the moment I push.",
    color: "#2088ff",
    icon: `${DI}/githubactions/githubactions-original.svg`,
  },
  [SkillNames.LINUX]: {
    id: 34,
    name: "linux",
    label: "Linux",
    shortDescription: "Where most of this ends up running anyway.",
    color: "#fff",
    icon: `${DI}/linux/linux-original.svg`,
  },
  [SkillNames.VERCEL]: {
    id: 35,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Push to main, and it is live.",
    color: "#fff",
    icon: `${DI}/vercel/vercel-original.svg`,
  },

  // ---------------- tooling ----------------
  [SkillNames.GIT]: {
    id: 36,
    name: "git",
    label: "Git",
    shortDescription: "Branches, rebases, and untangling my own history.",
    color: "#f1502f",
    icon: `${DI}/git/git-original.svg`,
  },
  [SkillNames.GITHUB]: {
    id: 37,
    name: "github",
    label: "GitHub",
    shortDescription: "Pull requests, reviews, and open-source contributions.",
    color: "#000000",
    icon: `${DI}/github/github-original.svg`,
  },
  [SkillNames.NPM]: {
    id: 38,
    name: "npm",
    label: "npm",
    shortDescription: "The dependency tree, for better or worse.",
    color: "#fff",
    icon: `${DI}/npm/npm-original-wordmark.svg`,
  },
  [SkillNames.PRETTIER]: {
    id: 39,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Ending formatting debates before they start.",
    color: "#f7b93a",
    icon: `${DI}/prettier/prettier-original.svg`,
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Sep 2025",
    endDate: "Present",
    title: "Associate Software Engineer",
    company: "Dr. Paul Fisher & Associates",
    description: [
      "Built a production C#/.NET Worker Service integrating the DaySmart and RevolutionEHR REST APIs over OAuth 2.0, validating endpoints and payload schemas with Swagger/OpenAPI.",
      "Implemented configurable polling, incremental synchronization, historical backfills to 2020, pagination, duplicate prevention and retry handling for reliable patient and appointment data exchange.",
      "Deployed the integration as a Windows Service, supporting firewall, network and remote-access configuration.",
      "Developed Tableau views of patient flow, appointment trends and accounting data under HIPAA-conscious data handling.",
    ],
    skills: [
      SkillNames.CSHARP,
      SkillNames.DOTNET,
      SkillNames.ASPNET,
      SkillNames.SQLSERVER,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "May 2025",
    endDate: "Aug 2025",
    title: "Software Engineering R&D Intern",
    company: "Honeywell",
    description: [
      "Engineered and deployed an end-to-end configuration-management platform in C#, .NET, Blazor, ASP.NET Core and SQL Server, validating JSON, XML and TXT manufacturing files across 100+ configurations a month.",
      "Designed secure REST APIs with Swagger/OpenAPI and RBAC, adding schema validation, structured error handling and audit-ready access controls; automated NUnit and Selenium tests cut validation time an estimated 60%.",
      "Automated the material-pricing workflow with .NET 6, ODBC, EPPlus and CsvHelper, processing 1,000+ records per run and reducing a four-hour manual process to under 15 minutes.",
      "Built an equipment and pressure-plate accountability system with LabVIEW and .NET, tracking 50+ weekly checks across MEMS and sensor-fabrication operations.",
      "Received a Honeywell Bravo Award for technical contributions and cross-functional collaboration.",
    ],
    skills: [
      SkillNames.CSHARP,
      SkillNames.DOTNET,
      SkillNames.ASPNET,
      SkillNames.BLAZOR,
      SkillNames.SQLSERVER,
      SkillNames.AWS,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Surfacing! Mind the sunlight up here — it is brighter than the reef.",
    "Ascending to the shallows. Decompress slowly, you have been down a while.",
    "Light mode: all coral, no crushing pressure. Enjoy the visibility.",
    "Breaking the surface. Take a breath, the view is worth it.",
    "Up we go. Warm water, bright sand, and absolutely nothing lurking.",
  ],
  dark: [
    "Descending. The light gets thin past this point — that is the fun part.",
    "Back into deep water. Much quieter down here, is it not?",
    "Dark mode engaged. Somewhere below, something is glowing on purpose.",
    "Welcome to the midnight zone. Your eyes will adjust in a moment.",
    "Diving back down. The pressure is fine. Probably.",
  ],
};
