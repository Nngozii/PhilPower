# PhilPower

This as an inventory and sales management system for PhilPower.

A cloud-based **Digital Ledger and Inventory Management System** designed to decouple a business owner’s physical presence from daily operations. Built specifically for high-traffic, low-trust retail environments (like spare parts shops) where traditional bookkeeping has failed.

## The Problem
This veteran business owner has become "hostage" to his own success. Without a reliable system:
* **The Pricing Bottleneck:** He is called constantly to provide "last prices," as customers don't trust workers.
* **The Trust Gap:** Workers sell items "off-record" or use personal bank accounts for transfers, leading to "Ghost Sales."
* **Zero Visibility:** Lack of sales records makes it impossible to calculate daily profit or identify fast-moving vs. slow-moving stock.
* **Inventory Shrinkage:** In this cluttered shop, items vanish without a trace because there is no exit log.

## The Solution
This PWA (Progressive Web App) acts as a **"Digital Manager"** that enforces transparency through:
* **Pre-Set Pricing Engine:** Defines "Retail" and "Floor" prices to eliminate constant phone calls to the veteran.
* **Transaction Lock:** Links every inventory exit to a unique transaction ID, preventing unrecorded sales.
* **Payment Verification:** Displays official account details to customers to prevent "Personal Transfer" fraud.
* **Real-Time Auditing:** Provides the veteran with a live dashboard of sales, expected cash-at-hand, and bank transfer reconciliations.
* **Stock Roulette:** Randomly prompts for stock counts of specific items to ensure physical inventory matches digital records.

## Tech Stack 
* **Frontend:** React / Tailwind CSS 
* **Backend:** Node.js / Express
* **Database:** PostgreSQL
* **Authentication:** JWT-based roles (Owner vs. Worker)

## Key Features
* **Searchable Inventory:** Quick-find for thousands of small parts using local nicknames.
* **Daily Ledger:** Automated end-of-day reports showing total revenue and payment breakdown.
* **Remote Oversight:** Owner can update prices and view sales from anywhere.
* **Return Management:** Verified returns based on transaction history only.

---
*Developed as a solution for PhilPower high-turnover retail shop in Ikirun, Osun State, Nigeria.*
