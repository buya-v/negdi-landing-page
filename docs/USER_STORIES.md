# User Stories

## Epics Overview
1. Conversion & App Acquisition
2. Trust, Legal & Compliance
3. Education & Value Proposition
4. Technical Performance & Accessibility

## Conversion & App Acquisition

### Hero Section App Download

**ID**: ST-001
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: low
**Status**: draft

**Story**:
As Anar Battulga, I want to see clear 'Download App' buttons immediately upon landing on the page so that I can install the application without searching for it.

**Acceptance Criteria**:
1. Given the user is on a mobile device, when they view the hero section, then they see the App Store (iOS) and Play Store (Android) badges.
2. Given the user clicks a store badge, when the action triggers, then they are redirected to the specific Negdi app page on the respective store.
3. Given the user is on the hero section, when the page loads, then the primary headline clearly mentions investing with as little as 'spare change'.
4. Given the user views the hero image, when displayed, then it shows a high-quality mockup of the mobile app interface.



---

### Desktop to Mobile QR Bridge

**ID**: ST-004
**Persona**: Unknown User
**Priority**: should-have
**Complexity**: medium
**Status**: draft

**Story**:
As Saruul Zorig, I want to see a QR code when browsing the landing page on my laptop so that I can quickly download the app on my phone without typing the URL manually.

**Acceptance Criteria**:
1. Given the user is browsing on a desktop viewport (>1024px), when the page loads, then a dynamic QR code is visible in the navigation bar or hero section.
2. Given the user scans the QR code with a mobile camera, when scanned, then the device opens a dynamic link that routes to the correct app store based on OS.
3. Given the user is on a mobile device (<768px), when the page loads, then the QR code element is hidden to save screen space.
4. Given the QR code section, when hovered, then a tooltip text 'Scan to Download' appears.

**Dependencies**: ST-001

---

### Sticky Mobile Download CTA

**ID**: ST-010
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: medium
**Status**: draft

**Story**:
As Anar Battulga, I want a 'Download App' button to remain visible while I scroll down the page on my phone so that I can convert the moment I am convinced.

**Acceptance Criteria**:
1. Given the user scrolls past the hero section on mobile, when the scroll event triggers, then a sticky bar appears at the bottom or top of the viewport.
2. Given the sticky bar, when viewed, then it contains a prominent 'Get App' button.
3. Given the button, when clicked, then it uses the same dynamic routing logic as the hero buttons (Story ST-001).
4. Given the user is on a desktop, when scrolling, then the sticky bar is either hidden or replaced by a sticky header navigation with a download button.

**Dependencies**: ST-001

---

## Trust, Legal & Compliance

### Regulatory & Partner Verification

**ID**: ST-002
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: low
**Status**: draft

**Story**:
As Ganbat Sukhbaatar, I want to see the logos of partner banks and the Financial Regulatory Commission (FRC) license number so that I can verify Negdi is a legal entity before depositing money.

**Acceptance Criteria**:
1. Given the footer or a dedicated 'Trust' section, when viewed, then the logo of the custodial bank/clearing partner is clearly visible.
2. Given the legal section, when viewed, then the specific FRC license number and company registration number are displayed as text.
3. Given a user clicks on the legal disclaimer, when the action occurs, then they are linked to the official FRC website or a PDF of the license.
4. Given the trust section, when loaded, then a statement regarding asset separation (custodian accounts) is visible.



---

### Data Security & Encryption Info

**ID**: ST-006
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: low
**Status**: draft

**Story**:
As Ganbat Sukhbaatar, I want to read about the security measures protecting my personal data so that I feel safe linking my bank account.

**Acceptance Criteria**:
1. Given the 'Security' section, when viewed, then it displays icons representing SSL encryption and Bank-grade security standards.
2. Given the content, when read, then it explicitly states that Negdi does not store bank login credentials directly.
3. Given the security badges, when clicked, then they provide a brief tooltip or modal explaining the specific security standard.
4. Given the privacy policy link, when clicked, then it opens a readable summary of how user data is processed.



---

### Social Proof & Statistics

**ID**: ST-009
**Persona**: Unknown User
**Priority**: could-have
**Complexity**: low
**Status**: draft

**Story**:
As Anar Battulga, I want to see the number of active users or total MNT invested so that I feel confident that others are successfully using the platform.

**Acceptance Criteria**:
1. Given the 'Community' section, when viewed, then a counter shows 'X,XXX Active Users' or 'X Billion MNT Invested'.
2. Given the statistics, when displayed, then they are rounded numbers that update periodically (not real-time streaming).
3. Given the section design, when viewed, then it includes 2-3 short testimonials from users similar to Anar (students/young professionals).
4. Given the testimonials, when read, then they highlight the ease of use or the 'spare change' feature.



---

## Education & Value Proposition

### Micro-Investing Mechanism Explainer

**ID**: ST-003
**Persona**: Unknown User
**Priority**: should-have
**Complexity**: medium
**Status**: draft

**Story**:
As Anar Battulga, I want to see a visual step-by-step guide on how 'spare change' investing works so that I understand how small daily transactions turn into investments.

**Acceptance Criteria**:
1. Given the 'How it Works' section, when viewed, then there is a visual graphic showing a transaction (e.g., Coffee 5,500 MNT) being rounded up to 6,000 MNT.
2. Given the graphic, when the animation or flow completes, then it highlights the 500 MNT difference moving into an investment portfolio.
3. Given the explanation text, when read, then it avoids complex financial jargon and uses simple Mongolian terms.
4. Given the section bottom, when reached, then a 'Start with 20,000 MNT' CTA button is displayed.



---

### Portfolio Asset Diversification View

**ID**: ST-005
**Persona**: Unknown User
**Priority**: should-have
**Complexity**: medium
**Status**: draft

**Story**:
As Saruul Zorig, I want to see a breakdown of the asset classes (Mongolian stocks, bonds, funds) available in the app so that I know my portfolio will be diversified.

**Acceptance Criteria**:
1. Given the 'Features' section, when scrolled to, then a pie chart or list visualizes the asset mix (e.g., Top 20 MSE stocks, Government Bonds).
2. Given the asset list, when interactively hovered or tapped, then brief details about the return potential (ROI) for that asset class appear.
3. Given the portfolio description, when read, then it mentions 'One-click diversification' as a key benefit.
4. Given the UI, when displayed, then it clarifies that the user owns fractional shares of these assets.



---

### Automated Deposit Feature Highlight

**ID**: ST-007
**Persona**: Unknown User
**Priority**: should-have
**Complexity**: medium
**Status**: draft

**Story**:
As Saruul Zorig, I want to understand the 'Set and Forget' automation features so that I can plan my monthly salary deductions.

**Acceptance Criteria**:
1. Given the Features section, when viewing 'Automation', then it illustrates the concept of recurring deposits (e.g., Monthly Salary -> Auto Invest).
2. Given the description, when read, then it clarifies that users can pause or change the amount at any time.
3. Given the visual aid, when viewed, then it shows a calendar icon or a timeline of growth over 12 months.
4. Given the section CTA, when clicked, then it deep-links to the automation setup tutorial (or app download if not installed).



---

### FAQ & Support Access

**ID**: ST-008
**Persona**: Unknown User
**Priority**: could-have
**Complexity**: low
**Status**: draft

**Story**:
As Ganbat Sukhbaatar, I want to find answers to common questions about withdrawals and fees so that I am not surprised by hidden costs later.

**Acceptance Criteria**:
1. Given the FAQ accordion, when the 'Fees' question is expanded, then a clear table of fees (subscription vs transaction) is displayed.
2. Given the 'Withdrawal' question, when expanded, then it explains the timeline (e.g., T+2 days) for getting money back into the bank account.
3. Given the user cannot find an answer, when they look at the bottom right, then a 'Contact Support' or Chat bubble is available.
4. Given the support link, when clicked, then it opens the Facebook Messenger integration or email client.



---


*Generated by ASLA Product Agent*
