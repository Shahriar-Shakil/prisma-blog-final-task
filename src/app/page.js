import AuthLayout from "@/component/master/AuthLayout";
import LoginForm from "@/component/user/LoginForm";

export default function Home() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
