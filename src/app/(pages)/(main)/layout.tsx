import { Footer, NavbarMain } from "@/components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarMain />
      {children}
      <Footer />
    </>
  );
}
