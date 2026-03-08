import Login from '@/components/auth/login/Login';
import React from 'react';

export const metadata = {
  title: "Login | Hero Kidzz",
  description: "Login to your Hero Kidzz account",
};

const LoginPage = () => {
    return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <Login/>
    </section>
  );
};

export default LoginPage;