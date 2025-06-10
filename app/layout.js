import "./globals.css";
import Navigation from "../Components/Navigation";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Navigation />
          {children}
        </>
      </body>
    </html>
  );
}
