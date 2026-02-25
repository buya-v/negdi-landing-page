# Negdi landing page - Requirements Document

## Iteration 1

## Project Description
check negdi.mn

## Customer Persona
- **Name**: Bat-Erdene Bold
- **Role**: Founder & CEO
- **Goals**: Maximize the conversion rate of visitors into active mobile app users; Establish Negdi as the most trusted brand for retail micro-investing in Mongolia; Streamline the user education process to explain social investing in under 30 seconds

## Target Users
- **Anar Battulga** (Primary Micro-Investor): Start investing with small amounts of spare change (under 20,000 MNT)
- **Ganbat Sukhbaatar** (Secondary Trust-Focused Investor): Verify the legal legitimacy and partnership status of the platform
- **Saruul Zorig** (Primary Tech-Savvy Investor): Access a diversified portfolio of Mongolian assets in one click

## Key User Stories (Must-Have)
- Hero Section App Download
- Regulatory & Partner Verification
- Data Security & Encryption Info
- Sticky Mobile Download CTA

## User Feedback Incorporated
Initial iteration - no previous feedback

## Refined Requirements
This Technical Specification document outlines the requirements for the **negdi.mn** landing page, a micro-investing platform designed for the Mongolian market.

---

# Technical Specification: Negdi.mn Landing Page

## 1. Project Overview
Negdi is a fintech platform enabling users to invest "spare change" into diversified asset classes. The landing page serves as the primary conversion funnel, transitioning users from web discovery to mobile app installation.

## 2. UI/UX Design Tokens
To ensure brand consistency and trust (essential for fintech), the following tokens are defined:

### 2.1 Color Palette
| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| `color-primary` | `#00C805` | Primary Action (Growth/Green), CTAs |
| `color-secondary` | `#1A1F2B` | Headers, Deep Blue (Trust/Stability) |
| `color-background` | `#FFFFFF` | Main page background |
| `color-surface` | `#F4F7F9` | Section backgrounds, card containers |
| `color-text-main` | `#1A1F2B` | Body copy |
| `color-text-muted` | `#657786` | Secondary info, FRC license details |

### 2.2 Typography
*   **Primary Font:** `Inter` or `Plus Jakarta Sans` (Modern, highly legible).
*   **Heading H1:** 48px / Bold / Leading 1.2
*   **Heading H2:** 32px / Semi-bold
*   **Body:** 16px / Regular / Leading 1.5
*   **Caption:** 12px / Medium (For license numbers)

### 2.3 Layout & Spacing
*   **Grid:** 12-column Desktop / 4-column Mobile.
*   **Spacing Unit:** 8px base (8, 16, 24, 32, 64).
*   **Border Radius:** 12px (Modern/Friendly).

---

## 3. Component Breakdown

### 3.1 Hero Section (`Hero.jsx`)
*   **Objective:** Immediate conversion and value prop.
*   **Elements:**
    *   H1: "Small change, big future."
    *   Sub-headline: Explaining micro-investing in 1 sentence.
    *   **CTA Group:** Primary "Download on App Store" and "Get it on Google Play" buttons.
    *   **QR Bridge Component:** A specific `DesktopQR` card visible only on resolutions > 1024px.
*   **Logic:** Detect OS; if mobile, highlight the specific store button for that device.

### 3.2 Trust & Regulatory Bar (`TrustBar.jsx`)
*   **Objective:** Establish legal credibility.
*   **Elements:**
    *   Text: "Regulated by the Financial Regulatory Commission (FRC) of Mongolia."
    *   License Number: "License No: [Insert Number]" (High visibility).
    *   **Logo Cloud:** Grayscale logos of partner banks (e.g., Khan Bank, Golomt, TDB) that transition to color on hover.

### 3.3 The "Spare Change" Explainer (`HowItWorks.jsx`)
*   **Objective:** Visual education on the round-up mechanism.
*   **Visual Strategy:** 3-step horizontal flow (Desktop) or vertical stack (Mobile).
    1.  **Icon: Transaction** - "You spend 4,800₮ on coffee."
    2.  **Icon: Round-up** - "Negdi rounds it to 5,000₮ and takes 200₮."
    3.  **Icon: Investment** - "Your 200₮ is invested in diversified stocks."

### 3.4 Portfolio Diversification View (`AssetMix.jsx`)
*   **Objective:** Demonstrate professional asset management.
*   **Components:**
    *   **Interactive Donut Chart:** Showing a sample split (e.g., 40% Stocks, 30% Bonds, 30% Money Market Funds).
    *   **Asset Cards:**
        *   *Mongolian Stocks:* "MSE Top 20 Companies."
        *   *Government Bonds:* "Stable, low-risk returns."
        *   *Investment Funds:* "Professionally managed portfolios."

### 3.5 Footer / Global Sticky CTA (`StickyDownload.jsx`)
*   **Objective:** Persistence of the "Download" goal.
*   **Logic:** A sticky bottom bar that appears once the user scrolls past the Hero section, containing the QR code (Desktop) or Store Buttons (Mobile).

---

## 4. Functional Requirements Mapping

| User Story | Implementation Requirement |
| :--- | :--- |
| **App Download** | Above-the-fold placement of App/Play Store badges with high-contrast `color-primary`. |
| **Regulatory Verification** | Static text component in the Trust Bar citing the FRC License and Partner Bank logos. |
| **Micro-Investing Explainer** | SVG-based animation or high-quality iconography showing the +200₮ round-up logic. |
| **Desktop to Mobile Bridge** | Dynamic QR code generator (using `qrcode.react`) that points to `negdi.mn/download`. Hidden on mobile view via CSS Media Queries. |
| **Asset Diversification** | A tabbed interface or grid showing the 3 core asset classes with Mongolian-specific descriptions. |

---

## 5. Technical Stack Recommendations
*   **Frontend:** Next.js (for SEO and fast Page Load).
*   **Styling:** Tailwind CSS (for rapid design token implementation).
*   **Icons:** Lucide React or Phosphor Icons.
*   **Analytics:** Meta Pixel & Google Analytics (to track "Download" button clicks).
*   **Deployment:** Vercel or AWS Amplify.

## 6. Responsive Strategy
1.  **Mobile (375px - 640px):** Single column. QR code is removed; direct store links take precedence. Navigation is a simplified hamburger menu.
2.  **Desktop (1024px+):** Two-column Hero (Text left / App Mockup + QR right). Interactive charts for the Asset Diversification view.

## Acceptance Criteria
- All features must be fully implemented (no placeholders)
- UI must be responsive and accessible
- Error handling must be comprehensive
- Code must pass TypeScript compilation

---
*Generated by ASLA Product Agent - Iteration 1 - 2026-02-25T09:47:26.947Z*
