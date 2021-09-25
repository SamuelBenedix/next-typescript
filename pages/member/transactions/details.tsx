/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

import { MemberSidebar, TransactionDetailContent } from '../../../components';

const details = () => {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
    </section>
  );
};

export default details;
