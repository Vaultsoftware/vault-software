// app/offline/page.jsx
export const metadata = { title: 'Offline' };
export default function Offline() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-2">You’re offline</h1>
        <p className="text-sm text-gray-500">Check your connection and try again.</p>
      </div>
    </main>
  );
}
