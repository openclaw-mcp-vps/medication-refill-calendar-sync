import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedSync — Sync Prescription Refills to Your Calendar",
  description: "Photo-scan prescription labels and auto-add refill reminders to Google or Apple Calendar with pharmacy contact info."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c1a0def6-f040-4926-900a-08775c208c94"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
