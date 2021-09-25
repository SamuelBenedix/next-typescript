/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */

import { MemberSidebar, TransactionContent } from '../../../components';

const index = () => {
  return (
    <section className="transactions overflow-auto">
      <MemberSidebar activeMenu="transaction" />
      <TransactionContent />
    </section>
  );
};

export default index;
