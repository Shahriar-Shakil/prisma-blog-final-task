import AuthLayout from "@/components/master/AuthLayout";
import EmailVerificationForm from "@/components/user/EmailVerificationForm";

export default function Page() {
  return (
    <AuthLayout>
      <EmailVerificationForm />
    </AuthLayout>
  );
}
