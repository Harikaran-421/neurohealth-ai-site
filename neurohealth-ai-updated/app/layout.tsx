import "../styles/globals.css"; // ✅ Tailwind CSS import

export const metadata = {
  title: "NeuroHealth AI",
  description: "AI-Powered Research",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
