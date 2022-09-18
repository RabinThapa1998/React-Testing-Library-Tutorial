import Footer from "./footer";
import Header from "./header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", padding: "10px 30px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
