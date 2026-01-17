# Ortho Solution - Technical Design Documentation

This document covers the **High-Level Design (HLD)** and **Low-Level Design (LLD)** for the Ortho Solution web application.

---

## 1. High Level Design (HLD)

### System Architecture

The application follows a **Client-Side Rendering (CSR)** architecture (Single Page Application).

```mermaid
graph TB
    subgraph Client [User's Browser]
        UI[React UI Layer]
        Router[Front-End Router]
        Store[Local State / Context]
    end

    subgraph Infrastructure [Deployment]
        CDN["Content Delivery Network (Netlify/Vercel)"]
        AssetStorage["Static Assets (Images/Icons)"]
    end

    subgraph External [External Services]
        EmailAPI["Email Service (Future Scope)"]
        WhatsApp["WhatsApp API (Redirect)"]
    end

    %% Flows
    Client -- "Request Page" --> CDN
    CDN -- "Serve index.html + JS Bundle" --> Client
    UI -- "User Interaction" --> Router
    UI -- "Book Appointment" --> WhatsApp
```

### 📦 Technology Stack Map

- **Presentation Layer**: React (Function Components, Hooks)
- **Styling Engine**: Material UI (Emotion CSS-in-JS)
- **State Management**: React Context (Global Booking State), Props (Local UI State)
- **Build System**: Vite (ESBuild based)

---

## 2. Low Level Design (LLD)

### 🧩 Component Hierarchy (Circuit Diagram)

This visualizes the "wiring" of the React components and how props/state flow down.

```mermaid
graph TD
    App[App.tsx]
    BookingContext[BookingContext Provider]
    Router[React Router]

    %% Main Layout
    Header[Header.tsx]
    Footer[Footer.tsx]

    %% Routes
    HomeRoute[Route: /]
    AboutRoute[Route: /about]
    ServicesRoute[Route: /services]

    %% Home Components
    Hero[HeroSection]
    Doc[DoctorProfiles]
    Spec[Specialties]

    %% Common Components
    BookingDialog[BookingDialog.tsx]

    %% Wiring
    App --> BookingContext
    BookingContext --> Router
    Router --> Header
    Router --> HomeRoute
    Router --> AboutRoute
    Router --> ServicesRoute
    Router --> Footer

    %% Pages to Components
    HomeRoute --> Hero
    HomeRoute --> Spec
    HomeRoute --> Doc

    %% Global State Wiring
    BookingDialog -.->|Consumes| BookingContext
    Header -.->|Triggers| BookingContext
    Hero -.->|Triggers| BookingContext
```

### 💾 Data Schemas (Types & Interfaces)

We use strict TypeScript interfaces to maintain data integrity.

**1. Service Interface** (Used in `services.tsx`)

```typescript
interface Service {
  title: string;
  desc: string;
  image: string; // URL for cover image
  icon: ReactNode; // MUI Icon Component
  details: {
    longDesc: string;
    conditions: string[]; // List of treated conditions
    procedures: string[]; // List of surgical procedures
  };
}
```

**2. Testimonial Interface** (Used in `testimonials.ts`)

```typescript
interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g. "TKR Patient"
  image: string;
  quote: string;
  rating: number; // 1-5 Scale
  story?: string; // Optional long-form success story
}
```

### ⚡ State Flow Diagram (Booking Logic)

Detailed logic for how the global "Booking Popup" is triggered from anywhere in the app.

```mermaid
sequenceDiagram
    participant User
    participant Component (Header/Hero/Card)
    participant Context (BookingContext)
    participant Modal (BookingDialog)

    Note over Context: State: isOpen = false

    User->>Component: Clicks "Book Appointment"
    Component->>Context: Calls openBooking()
    Context->>Context: Sets isOpen = true
    Context-->>Modal: Re-renders with open={true}
    Modal->>User: Displays Popup Form

    User->>Modal: Clicks "Close" or Backdrop
    Modal->>Context: Calls closeBooking()
    Context->>Context: Sets isOpen = false
    Context-->>Modal: Re-renders with open={false}
    Modal-->>User: Popup Disappears
```

---

## 3. Directory & Module Organization

- **`src/components/common`**: "Atomic" components used everywhere (Buttons, Dialogs).
- **`src/components/home`**: "Molecule" components specific to the landing page.
- **`src/pages`**: "Organism" level components that represent full views.
- **`src/data`**: "Database" file that decouples content from code.
