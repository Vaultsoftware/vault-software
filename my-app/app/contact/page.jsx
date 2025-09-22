// app/contact/page.jsx  (Server component; no 'use client' here)
import ContactDashboard from './ContactDashboard';

export const metadata = { title: 'Contacts Dashboard' };

export default function ContactPage() {
  return (
    <main className="p-4 sm:p-6">
      <ContactDashboard />
    </main>
  );
}
