import AuthLayout from "@/components/master/AuthLayout";
import RegistrationForm from "@/components/user/RegistrationForm";

export default function Page() {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
}
