import "./globals.css";
import { Providers } from "../store/provider";

export const metadata = {
  title: "Stunt Doubles Matching App",
  description: "Stunt Doubles Matching App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
