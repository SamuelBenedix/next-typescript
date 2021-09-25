/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */

import { MemberSidebar, OverViewContent } from '../../components';

const index = () => {
  return (
    <section className="overview overflow-auto">
      <MemberSidebar activeMenu="overview" />
      <OverViewContent />
    </section>
  );
};

export default index;
