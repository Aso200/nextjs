import Header from "../components/Header";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Dokument",
  description: "dokument App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
