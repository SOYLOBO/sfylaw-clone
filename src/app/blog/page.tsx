import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '60vh', padding: '80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 400, color: '#03204C', marginBottom: '24px' }}>
          Blog
        </h1>
        <div style={{ height: '2px', width: '60px', background: '#FFD700', marginBottom: '24px' }} />
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: '27px', color: '#666' }}>
          This page is under construction. Please check back soon.
        </p>
      </main>
      <Footer />
    </>
  );
}
