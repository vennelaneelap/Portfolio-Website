import { Link } from "@/types";

// Only sections that actually exist on the page. `thumbnail` is the nav
// hover preview; a missing file just renders no preview, so add
// /public/assets/nav-link-previews/<name>.png when you have real captures.
const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: '/assets/nav-link-previews/landing.png'
  },
  {
    title: 'Skills',
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/skills.png'
  },
  {
    title: 'Experience',
    href: '/#experience',
    thumbnail: '/assets/nav-link-previews/experience.png'
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/projects.png'
  },
  {
    title: 'Résumé',
    href: '/resume',
    thumbnail: '/assets/nav-link-previews/resume.png'
  },
  {
    title: 'Contact',
    href: '/#contact',
    thumbnail: '/assets/nav-link-previews/contact.png'
  }
];

export { links };
