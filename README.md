# DataCatalyst AI

**Enterprise-Grade DB2-to-AI-Native Data Transformation**

DataCatalyst AI is a premium marketing and interactive demo platform designed for the most demanding enterprise data modernization needs. It bridges the gap between legacy DB2 mainframe systems and modern, AI-powered cloud architectures (PostgreSQL, Amazon Aurora).

## Key Features
- **Direct-to-AI Transformation**: Bypass traditional ETL for immediate AI consumption.
- **Natural Language Querying (NLQ)**: Query legacy data using plain English.
- **Dynamic AI Dashboards**: Live, self-generating visualizations.
- **Compliance-First**: Engineered for HIPAA and HITRUST environments.

## Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Setup
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd datacatalyst-ai
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`.

## Deployment

### Deploying to Netlify
1. Connect your GitHub repository to Netlify.
2. The build settings should automatically detect from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click **Deploy**.

## Tech Stack
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router Dom

## Project Structure
- `src/components`: Reusable UI elements and complex demo logic.
- `src/pages`: Main application routes (Home, Features, Solutions, etc.).
- `src/assets`: Branding and imagery.
- `src/index.css`: Tailwind configuration and global design tokens.

---
Developed by **A Leading AI Solutions Provider**.
