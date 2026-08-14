# Health SaaS Platform

A scalable healthcare SaaS frontend architecture built with **Next.js,
React, TypeScript, Tailwind CSS, and Turborepo**.

## Applications

Application Port Purpose

---

`Run project`. `From Root` : pnpm run dev
`web` `3001` Public healthcare website
`dashboard` `3002` Healthcare/admin dashboard

### Web --- `http://localhost:3001`

Public-facing healthcare experience with:

- Healthcare landing pages
- Doctor discovery and profiles
- Specialties and services
- Appointment booking flow
- Responsive navigation
- SEO-friendly public pages
- Patient-focused content

### Dashboard --- `http://localhost:3002`

Dashboard foundation for healthcare operations:

- Dashboard overview
- Appointment management
- Doctor management
- Patient management
- Schedule management
- Search, filtering and pagination
- Analytics and reports
- Profile and settings
- Notifications
- Role-based access control

> The application structure is designed to be extended with production
> healthcare workflows.

## Architecture

```text
health-saas-platform/
├── apps/
│   ├── web/                 # Public website - port 3001
│   └── dashboard/           # Dashboard - port 3002
├── packages/
│   ├── ui/                  # Shared React UI components
│   ├── tailwind-config/     # Shared Tailwind configuration
│   ├── typescript-config/   # Shared TypeScript configuration
│   └── ...
├── .github/workflows/       # CI/CD
├── .husky/                  # Git hooks
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
└── pnpm-lock.yaml
```

### Why Turborepo?

- Shared UI components
- Shared TypeScript and Tailwind configuration
- Reusable frontend patterns
- Consistent code standards
- Task orchestration and caching
- Easy scaling to additional applications

## Technology Stack

**Frontend:** Next.js, React.js, TypeScript, Next.js App Router

**Styling:** Tailwind CSS, utility-first CSS, responsive design, fluid
layouts

**Architecture:** Turborepo, pnpm workspaces, monorepo, reusable
component architecture

**Code Quality:** ESLint, Prettier, Husky, TypeScript type checking

**CI/CD:** GitHub Actions, automated linting, type checking, builds and
validation

## Styling Strategy

The project follows a **Tailwind CSS utility-first approach** and avoids
unnecessary component-level CSS files.

Principles:

- Responsive-first layouts
- Reusable Tailwind patterns
- Consistent spacing and typography
- Mobile, tablet and desktop support
- Minimal custom CSS
- Fluid sizing with `clamp()` where appropriate

Example:

```tsx
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
    Healthcare for everyone
  </h1>
</div>
```

## Performance

Performance is treated as a core frontend requirement.

The architecture supports:

- Server-side rendering where appropriate
- Static generation where appropriate
- Code splitting and lazy loading
- Efficient component rendering
- Reduced unnecessary client-side JavaScript
- Optimized API/data fetching
- Responsive image optimization
- Large-list optimization
- Reusable components
- Minimal styling overhead

The goal is to maintain fast page loads, strong Core Web Vitals, and
responsive interactions.

## SEO

The public application is structured for SEO-friendly implementation:

- Page-level metadata
- Dynamic titles and descriptions
- Open Graph metadata
- Canonical URLs
- Semantic HTML
- Structured data where applicable
- SEO-friendly URLs
- Sitemap and robots configuration
- Server-rendered public content

## Appointment Flow

```text
Landing Page
     ↓
Find a Doctor
     ↓
Doctor Profile
     ↓
Select Date & Time
     ↓
Patient Details
     ↓
Review Appointment
     ↓
Confirmation
```

Dashboard workflow:

```text
Dashboard
   ↓
Appointments
   ├── Upcoming
   ├── Completed
   └── Cancelled
          ↓
     Appointment Details
          ↓
     Patient / Doctor Information
```

## Shared UI Architecture

The shared UI package can contain:

- Button
- Input
- Select
- Checkbox
- Modal/Dialog
- Dropdown
- Card
- Badge
- Table
- Tabs
- Pagination
- Date picker
- Form components
- Loading states
- Empty states
- Error states
- Toast/notification components

This keeps `web` and `dashboard` consistent while avoiding duplicated
components.

## Data & API Architecture

```text
UI Components
      ↓
Feature Layer
      ↓
Hooks / Query Layer
      ↓
API Client
      ↓
Backend Services
      ↓
Database
```

The frontend can support REST APIs for appointments, doctors, patients,
schedules, notifications and analytics.

Production healthcare data should be handled according to applicable
security, privacy and regulatory requirements.

## Authentication & Authorization

The dashboard can be extended with:

- Login/logout
- Session management
- Protected routes
- Role-based access control
- Permission-based UI

Example roles:

```text
Admin
 ├── Manage doctors
 ├── Manage patients
 ├── Manage appointments
 └── View analytics

Doctor
 ├── View appointments
 ├── Manage schedule
 └── View assigned patients

Staff
 ├── Manage appointments
 └── Manage patient workflows
```

## Development Standards

### TypeScript

Used across the frontend for type safety, maintainability, refactoring
and developer experience.

### ESLint

Maintains consistent coding standards and identifies potential issues
early.

### Prettier

Provides consistent code formatting.

### Husky

Git hooks can run quality checks before commits.

Typical checks:

```text
Lint
Type Check
Format Check
Build Validation
```

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Install

```bash
pnpm install
```

### Start Web

```bash
pnpm --filter web dev
```

Open `http://localhost:3001`.

### Start Dashboard

```bash
pnpm --filter dashboard dev
```

Open `http://localhost:3002`.

### Start All Applications

```bash
pnpm dev
```

## Useful Commands

```bash
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm format
```

Run a specific application:

```bash
pnpm --filter web dev
pnpm --filter dashboard dev
```

## CI/CD

Recommended workflow:

```text
Pull Request
     ↓
Install Dependencies
     ↓
Lint
     ↓
Type Check
     ↓
Build
     ↓
Validation
     ↓
Deploy
```

GitHub Actions can automate these checks for every pull request and
deployment.

## Environment Variables

Use `.env.local` for environment-specific values.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

Dashboard:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_APP_URL=http://localhost:3002
```

Never commit secrets, API keys, database credentials or authentication
tokens.

## Scalability

The architecture can grow into:

```text
apps/
├── web/
├── dashboard/
├── doctor-portal/
├── patient-portal/
└── admin/
```

Shared packages can grow into:

```text
packages/
├── ui/
├── api/
├── types/
├── auth/
├── config/
├── tailwind-config/
└── typescript-config/
```

This allows new applications to reuse the existing frontend foundation
instead of duplicating code.

## Future Enhancements

Potential production extensions:

- Authentication and RBAC
- Real-time appointment updates
- Calendar integration
- Online payments
- Email/SMS notifications
- Patient portal
- Doctor portal
- Admin portal
- Audit logging
- Advanced analytics
- File/document management
- Multi-language support
- Dark mode
- Accessibility improvements
- End-to-end testing
- Monitoring and error tracking

## Project Status

This repository is a **frontend architecture and SaaS demonstration
project** focused on scalable Next.js/Turborepo development, reusable UI
architecture, responsive Tailwind CSS, performance, code quality and
CI/CD practices.

It can be extended with a production backend, authentication, database
integration and healthcare-specific workflows.

## Author

**Mahendra Kumar**\
Senior Frontend Developer --- React.js · Next.js · TypeScript ·
Turborepo

- GitHub: https://github.com/mahendramahawar95
- LinkedIn: https://linkedin.com/in/mahendra-mahawar-5879a0196
