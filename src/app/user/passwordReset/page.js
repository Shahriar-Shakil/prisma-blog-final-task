import AuthLayout from "@/components/master/AuthLayout";
import PasswordResetForm from "@/components/user/PasswordResetForm";

export default function Page() {
  return (
    <AuthLayout>
      <PasswordResetForm />
    </AuthLayout>
  );
}
