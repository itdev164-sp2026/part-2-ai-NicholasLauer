export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Render as a full-screen overlay so the auth pages appear without the sidebar.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {children}
    </div>
  );
}
