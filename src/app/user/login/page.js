import AuthLayout from "@/component/master/AuthLayout";
import LoginForm from "@/component/user/LoginForm";

export default function Page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
