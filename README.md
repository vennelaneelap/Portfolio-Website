# Portfolio Website

Personal portfolio for **Vennela Neelap** — software engineer working across
C#/.NET, Python, full-stack web, and applied AI.

Built on Next.js with an interactive 3D keyboard where the keycaps are skills.

## Stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Animation | GSAP, Motion, Lenis (smooth scroll) |
| 3D | Spline runtime (`public/assets/skills-keyboard.spline`) |
| Email | Resend (contact form) |

## Running locally

```bash
pnpm install
cp .env.example .env.local   # fill in RESEND_API_KEY if you want the contact form to send
pnpm dev                     # http://localhost:3000
```

`pnpm build` produces the production build. Everything works without any
environment variables — the contact form just returns a 503 until
`RESEND_API_KEY` is set.

## Where the content lives

Everything personal is in three files plus one asset folder:

| What | Where |
| --- | --- |
| Name, title, bio, email, socials, SEO | `src/data/config.ts` |
| Skills (3D keycaps + grid) and work experience | `src/data/constants.ts` |
| Projects | `src/data/projects.tsx` |
| Project cover images | `public/assets/projects-screenshots/<id>/cover.png` |
| Social card | `public/assets/seo/og-image.png` |
| Résumé PDF | `public/Vennela_Neelap_Resume.pdf` |

### Adding a project screenshot

Covers are generated placeholders (1200×800). To use a real screenshot, drop it
in as `public/assets/projects-screenshots/<id>/cover.png`. To add more images to
a project's detail view, put them in the same folder and reference them from a
`<SlideShow images={[...]} />` in that project's `content`.

### The 3D keyboard

`src/components/animated-background.tsx` looks up each skill by name against a
keycap object inside `public/assets/skills-keyboard.spline`. A skill whose
`name` has no matching keycap still appears in the skills grid and experience
chips — it just isn't on the keyboard. Each keycap's logo is a texture baked
into the `.spline` file, so changing which logos appear means editing the scene
in Spline, not changing code.

## Credits

The site is based on the [3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio)
template by Naresh Khatri.
