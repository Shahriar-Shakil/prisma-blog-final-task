import AuthLayout from "@/component/master/AuthLayout";
import PasswordResetForm from "@/component/user/PasswordResetForm";

export default function Page() {
  return (
    <AuthLayout>
      <PasswordResetForm />
    </AuthLayout>
  );
}
