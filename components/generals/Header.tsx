import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Header =async () => {
  const { getUser } =  await getKindeServerSession();
  const user= await getUser();
  return ( 
    <nav className="py-5 justify-between items-center flex gap-10">
      <Link href="/" className="text-2xl font-bold">
        Mera<span className="text-blue-500">Bizu</span>
      </Link>
      <div className=" flex-grow hidden md:flex gap-4">
        <Link
          href="/"
          className="hover:text-blue-400 text-[16px] font-medium transition-colors transform hover:scale-105"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="hover:text-blue-400 text-[16px] font-medium transition-colors transform hover:scale-105"
        >
          Dashboard
        </Link>
      </div>
      {
        user ? (
          <div className="flex gap-4">
              {user.given_name}
            <LogoutLink>Logout</LogoutLink>
          </div>
        ) : (<div className="flex items-center gap-3">
        <LoginLink className={buttonVariants()}>Sign in</LoginLink>
        <RegisterLink className={buttonVariants({variant:'secondary'})}>Sign up</RegisterLink>
      </div>)
      }
    </nav>
  );
}

export default Header