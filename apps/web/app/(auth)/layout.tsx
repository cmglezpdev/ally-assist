import { AuthLayout } from "@/modules/auth/ui/components/layouts/auth-layout";


export default function LayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
}
