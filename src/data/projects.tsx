import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

// Brands with no Simple Icons mark (trademark or too niche) fall back to a
// short text mark, matching how the template handles Expo/MCP.
const textMark = (title: string, label = title): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[0.6rem] font-bold leading-none">{label}</span>,
});

const PROJECT_SKILLS = {
  // languages
  python: brand("Python", "python-mono.svg"),
  csharp: brand("C#", "csharp-mono.svg"),
  cpp: brand("C++", "cplusplus-mono.svg"),
  java: brand("Java", "openjdk-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  cobol: textMark("COBOL", "COB"),

  // backend / frameworks
  dotnet: brand(".NET", "dotnet-mono.svg"),
  aspnet: textMark("ASP.NET Core", "ASP"),
  blazor: brand("Blazor", "blazor-mono.svg"),
  fastapi: brand("FastAPI", "fastapi-mono.svg"),
  flask: brand("Flask", "flask-mono.svg"),
  spring: brand("Spring Boot", "springboot-mono.svg"),
  nest: brand("NestJS", "nestjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  express: brand("Express", "express-mono.svg"),

  // frontend
  react: brand("React", "react-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),

  // data
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  sqlserver: brand("SQL Server", "microsoftsqlserver-mono.svg"),
  mysql: brand("MySQL", "mysql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  sqlalchemy: brand("SQLAlchemy", "sqlalchemy-mono.svg"),
  efcore: textMark("EF Core", "EF"),

  // ai / ml
  pytorch: brand("PyTorch", "pytorch-mono.svg"),
  huggingface: brand("Hugging Face", "huggingface-mono.svg"),
  gemini: brand("Gemini", "googlegemini-mono.svg"),
  pandas: brand("Pandas", "pandas-mono.svg"),
  numpy: brand("NumPy", "numpy-mono.svg"),

  // infra / tooling
  docker: brand("Docker", "docker-mono.svg"),
  aws: brand("AWS", "amazonwebservices-mono.svg"),
  vercel: brand("Vercel", "vercel-mono.svg"),
  render: brand("Render", "render-mono.svg"),
  git: brand("Git", "git-mono.svg"),
  github: brand("GitHub", "github-mono.svg"),
  jira: brand("Jira", "jira-mono.svg"),
  swagger: brand("Swagger", "swagger-mono.svg"),
  pytest: brand("Pytest", "pytest-mono.svg"),
  selenium: brand("Selenium", "selenium-mono.svg"),
  socketio: brand("Socket.io", "socketdotio-mono.svg"),
  clerk: brand("Clerk", "clerk-mono.svg"),
  tableau: brand("Tableau", "tableau-mono.svg"),
  labview: brand("LabVIEW", "labview-mono.svg"),
  nunit: textMark("NUnit", "NU"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "skillsharp",
    category: "Generative AI platform",
    title: "SkillSharp AI",
    src: `${BASE_PATH}/skillsharp/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.clerk,
        PROJECT_SKILLS.swagger,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A generative-AI interview platform that asks you the questions you
            are actually going to get.
          </TypographyP>
          <TypographyP className="font-mono">
            Built end to end with Next.js, React and TypeScript on a PostgreSQL
            and Drizzle ORM backend. A Gemini LLM generates contextual technical
            questions from a role and experience level, then grades the answers
            and returns structured feedback. Around 30 users have run mock
            interviews through it.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Prompting as an engineering problem
          </TypographyH3>
          <p className="font-mono mb-2">
            The interesting part was not calling the model, it was making the
            output trustworthy. I iterated on prompt structure and evaluated the
            results for relevance, consistency between runs, and resistance to
            hallucinated feedback, tightening the contract until the same input
            reliably produced usefully similar output.
          </p>

          <TypographyH3 className="my-4 mt-8">Auth and data access</TypographyH3>
          <p className="font-mono mb-2">
            Clerk handles authentication and session management, with protected
            routes and role-aware data access so one user cannot read another
            interview session. RESTful services are documented with
            Swagger/OpenAPI contracts.
          </p>
        </div>
      );
    },
  },
  {
    id: "adv-diffusion",
    category: "Generative AI research",
    title: "Text-Conditioned Adv-Diffusion",
    src: `${BASE_PATH}/adv-diffusion/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.huggingface,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Reproducing and extending an adversarial latent-diffusion pipeline
            for localized, text-conditioned facial perturbations.
          </TypographyP>
          <TypographyP className="font-mono">
            Built on Stable Diffusion v1.5 with DDIM sampling and face-parsing
            masks, so perturbations stay confined to semantically meaningful
            regions rather than smearing across the whole image.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Balancing four competing objectives
          </TypographyH3>
          <p className="font-mono mb-2">
            LLaVA-1.5 7B generates semantic descriptions of each face, which
            feed a CLIP alignment term. That runs against an ArcFace identity
            objective and an LPIPS perceptual term — multimodal alignment,
            visual fidelity and identity robustness all pulling in different
            directions. Tuning that balance was most of the work.
          </p>

          <TypographyH3 className="my-4 mt-8">Fitting it in 12 GB</TypographyH3>
          <p className="font-mono mb-2">
            Running Stable Diffusion, LLaVA-1.5 7B, CLIP, ArcFace and LPIPS
            together does not fit on a 12 GB RTX card without care. Deliberate
            model placement and CPU offloading made it work. On FFHQ, text-image
            similarity rose from roughly 0.18&ndash;0.24 to 0.36&ndash;0.52
            after the attack.
          </p>
        </div>
      );
    },
  },
  {
    id: "ecg-fm",
    category: "Healthcare AI",
    title: "ECG-FM Parameter-Efficient Fine-Tuning",
    src: `${BASE_PATH}/ecg-fm/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pytorch],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            0.93 test AUC on 65,424 ECG signals while training 2.6% of the
            model.
          </TypographyP>
          <TypographyP className="font-mono">
            Parameter-efficient fine-tuning of an ECG foundation model, using
            per-sample normalization and stratified train/validation/test splits
            across a reproducible 15-epoch pipeline.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Results</TypographyH3>
          <p className="font-mono mb-2">
            Training only 2.60% of parameters reached 0.9397 validation AUC and
            0.9308 test AUC — strong generalization at a fraction of the
            compute. Validation F1 improved from 0.4659 to 0.7551 and accuracy
            from 0.5670 to 0.7589, with precision, recall, loss and AUC tracked
            throughout rather than leaning on a single headline number.
          </p>
        </div>
      );
    },
  },
  {
    id: "collab-editor",
    category: "Real-time backend",
    title: "Collaborative Document Editor",
    src: `${BASE_PATH}/collab-editor/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts],
      backend: [
        PROJECT_SKILLS.nest,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.socketio,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            25+ people editing the same document without stepping on each other.
          </TypographyP>
          <TypographyP className="font-mono">
            A real-time collaborative editing service built with NestJS,
            MongoDB and WebSockets, using operational transformation to
            reconcile simultaneous changes into a single consistent document
            state.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            The hard part is conflict
          </TypographyH3>
          <p className="font-mono mb-2">
            Two people typing in the same paragraph at the same time is the
            whole problem. Operational transformation rewrites each incoming
            operation against the ones it did not know about, so every client
            converges on the same result regardless of the order updates
            arrive. Event-driven bidirectional communication keeps latency low
            and document state persistent across reconnects.
          </p>
        </div>
      );
    },
  },
  {
    id: "libratrack",
    category: "Full-stack platform",
    title: "LibraTrack",
    src: `${BASE_PATH}/libratrack/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.vercel],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.render,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A library management platform, deployed and actually reachable.
          </TypographyP>
          <TypographyP className="font-mono">
            React frontend on Vercel, Spring Boot backend on Render,
            PostgreSQL for relational data and AWS S3 for object storage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Security</TypographyH3>
          <p className="font-mono mb-2">
            RESTful APIs secured with JWT authentication delivered over
            HTTP-only cookies, role-based access control, and protected routes
            — so the authorization story holds up on the server, not just in
            the UI.
          </p>
        </div>
      );
    },
  },
  {
    id: "bankapp",
    category: "Backend / API",
    title: "BankApp Platform",
    src: `${BASE_PATH}/bankapp/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.csharp,
        PROJECT_SKILLS.dotnet,
        PROJECT_SKILLS.aspnet,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.swagger,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A banking domain modeled properly, then grown into a REST API.
            <em> In progress.</em>
          </TypographyP>
          <TypographyP className="font-mono">
            An object-oriented C#/.NET banking domain with abstract accounts,
            interfaces, inheritance and encapsulation — checking and savings
            rules, and validated deposit, withdrawal and transfer workflows.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            From console to API to database
          </TypographyH3>
          <p className="font-mono mb-2">
            The console application was extended into an ASP.NET Core REST API
            with customer and transaction endpoints, request models, dependency
            injection and Swagger/OpenAPI documentation, then given a MongoDB
            repository layer for persistence. Each stage lives on its own Git
            feature branch, so the progression from console to no-database API
            to MongoDB API stays readable in the history.
          </p>
        </div>
      );
    },
  },
  {
    id: "booksmart",
    category: "Full-stack platform",
    title: "BookSmart",
    src: `${BASE_PATH}/booksmart/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.csharp,
        PROJECT_SKILLS.aspnet,
        PROJECT_SKILLS.efcore,
        PROJECT_SKILLS.sqlserver,
        PROJECT_SKILLS.swagger,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A layered full-stack book management system with the seams in the
            right places.
          </TypographyP>
          <TypographyP className="font-mono">
            ASP.NET Core, React, Entity Framework Core and SQL Server, with
            presentation, API, business-logic and persistence concerns kept
            genuinely separate rather than nominally so.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">API design</TypographyH3>
          <p className="font-mono mb-2">
            Swagger-documented CRUD REST APIs over relational entity models,
            with server-side validation and responsive client workflows for
            database-backed record management.
          </p>
        </div>
      );
    },
  },
  {
    id: "investiq",
    category: "Analytics platform",
    title: "InvestIQ",
    src: `${BASE_PATH}/investiq/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Venture and investment analytics, 40% faster than where it started.
          </TypographyP>
          <TypographyP className="font-mono">
            A full-stack platform built with FastAPI and React that aggregates
            several external data APIs into one decision-support interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Making it fast</TypographyH3>
          <p className="font-mono mb-2">
            The first version waited on each upstream API in turn. Restructuring
            the backend request orchestration, tightening response processing
            and reworking the data flow between frontend and backend cut
            response latency by roughly 40%.
          </p>
        </div>
      );
    },
  },
  {
    id: "fraud-detection",
    category: "Machine learning",
    title: "Credit Card Fraud Detection",
    src: `${BASE_PATH}/fraud-detection/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Over a million transactions, and a hard look at why accuracy lies.
          </TypographyP>
          <TypographyP className="font-mono">
            A reproducible fraud-analytics pipeline covering data cleaning,
            exploratory analysis, feature inspection and visualization with
            Pandas, NumPy and Matplotlib.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            The imbalance problem
          </TypographyH3>
          <p className="font-mono mb-2">
            Fraud is rare, so a model that predicts &quot;not fraud&quot; every
            single time scores brilliantly on accuracy and is completely
            useless. The logistic-regression classifier here is evaluated on
            precision, recall, F1 and the confusion matrix instead — the
            numbers that actually tell you whether it caught anything.
          </p>
        </div>
      );
    },
  },
  {
    id: "pathreview",
    category: "Open-source contribution",
    title: "PathReview",
    src: `${BASE_PATH}/pathreview/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sqlalchemy,
        PROJECT_SKILLS.pytest,
        PROJECT_SKILLS.github,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Finding the edge case nobody had hit yet, in someone else&apos;s
            codebase.
          </TypographyP>
          <TypographyP className="font-mono">
            An AI-assisted review service failed in an unhelpful way when asked
            about a profile with no ingested content. I diagnosed the unhandled
            missing-document path and implemented descriptive failure handling
            for it.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Contributing to a codebase you did not write
          </TypographyH3>
          <p className="font-mono mb-2">
            Two regression tests written to match the existing FastAPI,
            SQLAlchemy and Pytest patterns, validated against a 377-test
            passing suite. The rest of it was the unglamorous part of open
            source: reproducing the issue, documenting it, branching, rebasing,
            resolving conflicts, taking code review and getting the pull request
            merged.
          </p>
        </div>
      );
    },
  },
  {
    id: "cinelog",
    category: "Open-source contribution",
    title: "CineLog",
    src: `${BASE_PATH}/cinelog/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.sqlalchemy,
        PROJECT_SKILLS.pytest,
        PROJECT_SKILLS.github,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Refactoring a watchlist service onto UUIDs, and surviving the code
            review.
          </TypographyP>
          <TypographyP className="font-mono">
            Reworked a Flask and SQLAlchemy watchlist service to use UUID film
            identifiers, with modern database retrieval, duplicate-entry
            prevention and an explicit <code>FilmNotFoundError</code> instead of
            a silent failure.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Review is the work</TypographyH3>
          <p className="font-mono mb-2">
            Pytest fixtures and regression tests for the invalid-film cases,
            then six rounds of code-review comments, rebase conflicts and
            history rewrites before it landed with all five tests passing.
          </p>
        </div>
      );
    },
  },
  {
    id: "cyclegan",
    category: "Computer vision",
    title: "CycleGAN Image Translation",
    src: `${BASE_PATH}/cyclegan/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pytorch],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Translating between two image domains with no paired examples.
          </TypographyP>
          <TypographyP className="font-mono">
            An unpaired image-to-image translation pipeline in PyTorch using
            dual generators and discriminators, adversarial loss, and
            cycle-consistency objectives to keep the round trip honest.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Watching GANs fail
          </TypographyH3>
          <p className="font-mono mb-2">
            Repeatable training and inference workflows to evaluate translation
            quality, domain consistency and convergence behavior — including
            the classic failure modes, mode collapse in particular, which is
            where most of the learning actually happened.
          </p>
        </div>
      );
    },
  },
  {
    id: "decoder-lm",
    category: "Natural language processing",
    title: "Decoder-Only Language Model",
    src: `${BASE_PATH}/decoder-lm/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pytorch],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Building a transformer from the tokenizer up, to understand what is
            actually inside one.
          </TypographyP>
          <TypographyP className="font-mono">
            A decoder-only Transformer language model in PyTorch: tokenization,
            embeddings, positional information, causal self-attention and
            autoregressive decoding, each implemented rather than imported.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Training and generation</TypographyH3>
          <p className="font-mono mb-2">
            Training and text-generation pipelines built around next-token
            prediction, with loss monitoring and qualitative output evaluation
            across iterative experiments — because the loss curve going down
            and the samples reading well are not the same thing.
          </p>
        </div>
      );
    },
  },
  {
    id: "smartcandlestick",
    category: "Systems / C++",
    title: "SmartCandlestick",
    src: `${BASE_PATH}/smartcandlestick/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.cpp],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Market data, aggregated into candlesticks, in C++.
          </TypographyP>
          <TypographyP className="font-mono">
            A market-data processing application built with object-oriented
            design, reusable candlestick models, STL data structures and
            structured file ingestion.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">What it taught me</TypographyH3>
          <p className="font-mono mb-2">
            Aggregating raw price observations into open-high-low-close
            candlesticks for console-based trend inspection — equal parts
            algorithmic processing and financial-data modeling, with no
            framework to hide behind.
          </p>
        </div>
      );
    },
  },
  {
    id: "incollege",
    category: "Agile team project",
    title: "InCollege Platform",
    src: `${BASE_PATH}/incollege/cover.png`,
    screenshots: ["cover.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.cobol,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.jira,
        PROJECT_SKILLS.github,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A professional networking platform. Written in COBOL. On purpose.
          </TypographyP>
          <TypographyP className="font-mono">
            Built across Agile sprints as a modular COBOL system supporting
            authentication, profiles, connections, messaging, job postings and
            applications.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Constraints as a teacher
          </TypographyH3>
          <p className="font-mono mb-2">
            Input validation, record search and sequential <code>.dat</code>{" "}
            file persistence over structured PIC/OCCURS data models, with the
            development environment containerized in Docker. Working without
            modern conveniences makes you deliberate about data layout in a way
            that carries over to everything since.
          </p>
        </div>
      );
    },
  },
];

export default projects;
