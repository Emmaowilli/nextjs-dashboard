import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { lusitana } from '@/app/ui/fonts';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-[400px] space-y-6 p-6">
    
        <div className="flex justify-center">
          <div className="w-32">
            <AcmeLogo />
          </div>
        </div>

        <div>
          <h1 className={`${lusitana.className} text-center text-2xl font-bold`}>
            Welcome back
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Please log in to continue to your dashboard
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}