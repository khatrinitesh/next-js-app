
import "../style/globals.css";
export default function RootLayout({ children }) {


  return (
    <>
      <html lang="en">
        <body className="dark:bg-primaryD bg-secondaryL">
          {children}
        </body>
      </html>
    </>
  );
}
