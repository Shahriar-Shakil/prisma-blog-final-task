import AppBar from "./AppBar";
import Footer from "./Footer";

export default async function PlainLayout({ children }) {
  return (
    <div className="bg-white">
      <AppBar />
      {children}
      <Footer />
    </div>
  );
}
