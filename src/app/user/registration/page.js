import AuthLayout from "@/component/master/AuthLayout";
import RegistrationForm from "@/component/user/RegistrationForm";

export default function Page() {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
}
