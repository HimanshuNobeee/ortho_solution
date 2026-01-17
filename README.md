# Ortho Solution 🏥

> A premium, modern React website built for a top-tier Orthopedic Clinic.

**Ortho Solution** is a fully responsive, multi-page web application designed to build trust with patients, showcase medical expertise, and generate leads through seamless booking integration.

---

## ✨ Features

- **🎨 Premium Design**: Custom typography (Outlook/Roboto), reassuring color palette, and high-quality layout using Material UI (MUI).
- **📱 Fully Responsive**: Flawless experience on Mobile, Tablet, and Desktop.
- **🏥 Detailed Services Catalog**: A rich catalog of treatments (Joint Replacement, Sports Injury, etc.) with detailed pop-up information.
- **🌟 Patient Success Stories**: A hybrid page featuring statistical authority and emotional patient journey stories.
- **📝 Dynamic Blog**: A functional article reader for health tips and clinic updates.
- **📅 Global Booking System**: A "Book Appointment" button accessible from everywhere (Header, Hero, Service Cards) that opens a lead generation form.
- **⚡ Fast Performance**: Built with Vite for instant loading and transitions.

---

## 🛠 Tech Stack

- **Core**: React + TypeScript
- **Build Tool**: Vite
- **Styling & UI**: Material UI (MUI) v5 + Emotion
- **Routing**: React Router DOM v6
- **State Management**: React Context API (for Booking) + Redux Toolkit (User state)
- **Icons**: MUI Icons Material
- **Package Manager**: pnpm

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed. We recommend using `pnpm` for speed.

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/ortho-solution.git
    cd ortho_solution
    ```

2.  **Install Dependencies**

    ```bash
    pnpm install
    ```

3.  **Run Development Server**
    ```bash
    pnpm start
    ```
    The app will open at `http://localhost:5173`.

### Building for Production

To create an optimized build for deployment:

```bash
pnpm build
```

The output will be in the `dist/` folder.

### 🚀 Deployment (Firebase Hosting)

This project is optimized for Firebase Hosting.

1.  **Install Tools**:

    ```bash
    npm install -g firebase-tools
    firebase login
    ```

2.  **Initialize & Deploy**:

    ```bash
    firebase init hosting
    # Select 'dist' as public directory
    # Select 'Yes' for single-page app (SPA)

    pnpm build
    firebase deploy
    ```

Your site will be live at your Firebase URL.

---

## 📂 Project Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md) for a detailed visual map of the project files and data flow.

---

## 👨‍💻 Developer & Customization

**Ortho Solution** was engineered to be easily customizable.

- **Change Text/Content**: Edit `src/data/constants.ts` or `src/data/services.tsx`.
- **Change Colors**: Edit `src/themes/theme.ts`.
- **Add Doctors**: Edit `src/data/doctors.ts`.

### Built By

**Himanshu**

- **Email**: dev.himanshu@gmail.com
- **WhatsApp**: [+91 8359880827](https://wa.me/918359880827)

_Need a website like this? Contact the developer for a custom solution._

---

© 2024 Ortho Solution. All rights reserved.
