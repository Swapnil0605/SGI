import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section
      style={{
        padding: '120px 24px 100px',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(0, 168, 181, 0.1)',
            color: 'var(--color-accent, #00a8b5)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            marginBottom: '1rem',
          }}
        >
          404 ERROR
        </span>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: 'var(--color-primary, #0b3366)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-gray-text, #475569)',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}
        >
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" className="btn btn-primary">
            <Home size={18} />
            Back to Homepage
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Us
            <ArrowRight size={18} className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
