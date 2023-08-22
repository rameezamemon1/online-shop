'use client'

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

function SignIn() {
  const { user, error, isLoading } = useUser();

  return (
    <div>
      <h1>Login Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {user ? (
            <>
              <p>Welcome, {user.name}!</p>
              <Link href="/api/auth/logout">
                <a>Logout</a>
              </Link>
            </>
          ) : (
            <a href="/api/auth/login">Login with Google</a>
          )}
        </>
      )}
    </div>
  );
}

export default SignIn