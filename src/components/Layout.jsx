export default function Layout({ children }) {
  return (
    <main className="w-full flex flex-row gap-4 flex-wrap md:flex-wrap sm:flex-wrap lg:flex-wrap md:flex-col lg:flex-row sm:flex-col">
      {children}
    </main>
  );
}
