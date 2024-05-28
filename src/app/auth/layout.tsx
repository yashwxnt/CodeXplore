// AuthLayout.tsx

import React from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-screen relative overflow-hidden flex justify-center items-center">
      <ParticlesBackground />
      <div className={`absolute z-2 inset-0 flex flex-col items-center justify-center `}>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;