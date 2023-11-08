import AuthLayout from "@/components/master/AuthLayout";
import LoginForm from "@/components/user/LoginForm";

export default function Page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
