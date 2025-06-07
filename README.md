# Project Documentation: Black Cat

![Image of a black cat lying on a light-colored surface](https://wallpapercave.com/wp/wp1905861.jpg)

## 1. Project Overview and Purpose

The **Black Cat Project** is a Single-Page Application (SPA) developed with a dual purpose:

1.  **Learning and Portfolio:** To serve as a practical project for studying and applying modern front-end development technologies, such as React, TypeScript, and Vite, in a real-world scenario.
2.  **Social Awareness:** To use technology as a tool for a cause, demystifying superstitions associated with black cats and promoting awareness of their situation in shelters, thereby encouraging responsible adoption.

The application was architected to be performant, maintainable, and scalable, delivering an interactive and visually cohesive user interface.

---

## 2. Architecture and Technology Stack

The project is built on a **React with TypeScript** foundation, ensuring robust, type-safe development. The chosen build tool is **Vite**, which provides an optimized development environment and a high-performance compilation process.

### 2.1. Core Stack

* **Framework:** [**React 18**](https://reactjs.org/)
* **Language:** [**TypeScript**](https://www.typescriptlang.org/)
* **Build Tool:** [**Vite**](https://vitejs.dev/)
* **Styling:** [**Tailwind CSS**](https://tailwindcss.com/)
* **Animations:** [**Framer Motion**](https://www.framer.com/motion/)
* **UI Components:**
    * **Carousel:** [**Embla Carousel React**](https://www.embla-carousel.com/)
    * **Icons:** [**Lucide React**](https://lucide.dev/)

### 2.2. Stack Details

* **Vite & TypeScript:** The use of **Vite** provides a development environment with extremely fast Hot Module Replacement (HMR), accelerating the feedback loop during coding. For production, it generates optimized and efficient bundles. **TypeScript** complements this ecosystem by adding static type safety, which reduces the occurrence of runtime errors, improves code readability, and facilitates long-term maintenance.

* **Tailwind CSS:** Styling is managed through a utility-class-based design system, configured in the `tailwind.config.js` file. This approach allows for rapid prototyping and the creation of a consistent design system. The color palette, typography, and spacing are centralized, simplifying maintenance and theme application.

---

## 3. Features and Implementation

The application implements several features focused on user experience.

* **Theme Management (Light/Dark Mode):**
    * **Implementation:** The theme state is managed globally by `ThemeContext.tsx`. This context provides the active theme (`'light'` or `'dark'`) and a function to toggle it.
    * **Persistence:** The user's choice is persisted in the browser's `localStorage`, maintaining consistency across sessions.
    * **Mechanism:** Toggling the theme applies the `dark` class to the `<html>` element, allowing Tailwind CSS's `dark:` variants to be applied conditionally throughout the application.

* **Translation System (Internationalization):**
    * **Implementation:** The project uses a custom, lightweight internationalization solution instead of an external library like `i18n-next`.
    * **Mechanism:** The `LanguageContext.tsx` manages the active language (`'en'` or `'pt'`). The `translations.ts` file centralizes all application texts in a typed object (`TranslationKeys`), where each key corresponds to a UI string. The context selects the appropriate set of texts based on the active language, making it available to all components. This approach avoids external dependencies and is ideal for the project's scope.

* **Componentization and Animation:**
    * **Dynamic UI:** Visual elements, such as the dividing arcs, are implemented as reusable SVG components (`BottomArc.tsx`, `TopArc.tsx`), ensuring a unique design.
    * **Animations:** The `Framer Motion` library is used to add subtle entry animations and smooth transitions, which are activated as the user scrolls the page (`whileInView`), enhancing visual engagement.

---

## 4. File Structure

The project's architecture is based on components and features, promoting separation of concerns and maintainability.

```
Black_Cat_Project/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   ├── common/
  │   │   │   ├── BottomArc.tsx
  │   │   │   └── TopArc.tsx
  │   │   ├── Footer/
  │   │   │   └── Footer.tsx
  │   │   └── Header/
  │   │       ├── Header.tsx
  │   │       ├── LanguageSwitcher.tsx
  │   │       └── ThemeSwitcher.tsx
  │   ├── contexts/
  │   │   ├── LanguageContext.tsx
  │   │   └── ThemeContext.tsx
  │   ├── pages/
  │   │   ├── AllureSection.tsx
  │   │   ├── GallerySection.tsx
  │   │   ├── HelpSection.tsx
  │   │   ├── HeroSection.tsx
  │   │   └── MythsRealitySection.tsx
  │   ├── App.tsx
  │   ├── index.css
  │   ├── main.tsx
  │   └── translations.ts
  ├── .gitignore
  ├── index.html
  ├── package.json
  ├── README.md
  ├── tailwind.config.js
  └── vite.config.ts
```

---

## 5. Running the Project Locally

To run this project in your local development environment, follow the steps below.

1.  **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) and a package manager (`npm`, `yarn`, or `pnpm`) installed.

2.  **Cloning the Repository:**
    ```bash
    git clone [https://github.com/your-username/black-cat-project.git](https://github.com/your-username/black-cat-project.git)
    cd black-cat-project
    ```

3.  **Installing Dependencies:**
    ```bash
    npm install
    ```

4.  **Starting the Development Server:**
    ```bash
    npm run dev
    ```
    The server will start, and the application will be accessible, by default, at `http://localhost:5173`.

---

## 6. Deployment with Vercel

Deploying this application is a simple and straightforward process thanks to Vercel's integration with Vite-based projects.

### 6.1. Deployment Process

1.  **Vercel Account:** Ensure you have an account on [Vercel](https://vercel.com), which can be created for free using your GitHub, GitLab, or Bitbucket account.

2.  **Connect Repository:** Push the project code to a repository on GitHub.

3.  **Import Project in Vercel:**
    * On your Vercel dashboard, click "Add New..." and select "Project".
    * Import the GitHub repository you just created.

4.  **Build Configuration:**
    * Vercel will automatically detect that it is a Vite project.
    * The default build and output settings usually work without any changes:
        * **Framework Preset:** `Vite`
        * **Build Command:** `npm run build` or `vite build`
        * **Output Directory:** `dist`
    * Click "Deploy".

5.  **Completion:** Vercel will run the build process and publish the site, providing a public URL. The platform will also automatically set up a CI/CD pipeline, so every `push` to the main branch will trigger a new deployment automatically.

---

Documentation developed for the **Black Cat Project**.
