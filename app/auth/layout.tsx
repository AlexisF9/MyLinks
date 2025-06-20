import { Header } from "@/components/header";

export default function LayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col justify-center max-w-2xl w-full mx-auto px-4">
        {children}
      </div>
    </main>
  );
}
