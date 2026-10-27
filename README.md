# Addis Eats v2 — Artisanal Ethiopian Gastronomy & Real-Time Delivery Platform

> **Live Production Demo**: https://addis-eats-v2-ruby.vercel.app

Addis Eats v2 is a production-grade, full-stack food ordering and culinary platform that bridges traditional Ethiopian gastronomy with an Apple/Stripe-inspired digital experience. Built on **Next.js 16 App Router**, **React 19**, **Tailwind CSS v4**, and **Vercel**, it features hybrid rendering architectures, real-time SWR telemetry polling, multi-layer enterprise security, and responsive widescreen UI design.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4, Custom Design System, Glassmorphism
- **Data & Telemetry**: SWR (Stale-While-Revalidate) with background polling & server fallback hydration
- **Validation**: Zod schema validation across client forms, server actions, and route handlers
- **Security**: 3-layer enterprise defense (Edge Middleware, Server Role Claims, Action Ownership)
- **Deployment**: Vercel Edge Network `https://addis-eats-v2-ruby.vercel.app`

---

## 🚀 Core Features

1. **Hybrid Rendering Strategy**:
   - **Landing Page (`/`)**: Static pre-rendering with dynamic session context.
   - **Catalog (`/menu`)**: Incremental Static Regeneration (ISR) revalidated hourly with a 300ms debounced live SWR search.
   - **Dish Details (`/menu/[id]`)**: Pre-rendered at build time via `generateStaticParams()`, equipped with dynamic Open Graph social cards and Schema.org `MenuItem` JSON-LD.
   - **Checkout & Cart (`/cart`, `/checkout`)**: Progressive client-side shopping bag coupled with Server Actions (`useActionState`) for secure transaction mutations.

2. **Real-Time Order Telemetry & Kitchen Dispatch**:
   - **Order Tracking (`/orders/[id]`)**: Seeds first-paint metrics instantly using server-side `fallbackData`, eliminating loading spinners, then polls live status every 5 seconds via SWR.
   - **Kitchen Dashboard (`/kitchen`)**: Staff-guarded role management queue providing real-time order status updates (Received → Preparing → Out for Delivery → Delivered).

3. **3-Layer Enterprise Security Architecture**:
   - **Layer 1 (Edge Middleware)**: Intercepts unauthorized requests to protected routes (`/checkout`, `/orders/*`) at the edge before server components execute.
   - **Layer 2 (Server Page Claims)**: Validates session permissions (`user.role === 'staff'`) on private dashboards.
   - **Layer 3 (Mutation Ownership)**: Server actions verify active session identity and resource ownership before applying database updates.

---

## 📦 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/addis-eats-v2.git
   cd addis-eats-v2

2.  **Install dependencies**:
    ```bash
    npm install
3. **Run the development server**:
   ```bash
   npm run dev
4  **Open your browser**:
   Navigate to http://localhost:3000. 
   
       npm run build
       npm run start
      


