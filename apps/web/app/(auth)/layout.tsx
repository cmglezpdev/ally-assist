

export default function LayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      {children}
    </div>
  )
}
