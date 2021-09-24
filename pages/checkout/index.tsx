/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import {
  CheckOutItem,
  CheckOutDetail,
  CheckOutConfirmation,
} from '../../components';

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="/">
            <a>
              <Image src="/icon/logo.svg" width={60} height={60} alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckOutItem />
        <hr />
        <CheckOutDetail />
        <CheckOutConfirmation />
      </div>
    </section>
  );
};

export default index;
