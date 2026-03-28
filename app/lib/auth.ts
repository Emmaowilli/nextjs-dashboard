import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as { 
          email: string; 
          password: string 
        };

        // Hard-coded credentials from the official Next.js tutorial
        if (email === 'user@example.com' && password === '123456') {
          return {
            id: '1',
            name: 'Demo User',
            email: 'user@example.com',
          };
        }

        // If credentials don't match, return null → triggers "Invalid credentials."
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});