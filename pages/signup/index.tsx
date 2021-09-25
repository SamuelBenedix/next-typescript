/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
import Link from 'next/link';
import Image from 'next/image';
import { SignUpForm } from '../../components';

const signup = () => {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link href="/">
              <a className="navbar-brand">
                <Image width={60} height={60} alt="logo" src="/icon/logo.svg" />
              </a>
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
};

export default signup;
