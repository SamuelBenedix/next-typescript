/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
import Profile from './Profile';
import FooterSidebar from './FooterSidebar';
import MenuItem from './MenuItem';

const MemberSidebar = () => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="overview" active />
          <MenuItem title="Transactions" icon="transaction" />
          <MenuItem title="Messages" icon="messages" />
          <MenuItem title="Card" icon="card" />
          <MenuItem title="Rewards" icon="reward" />
          <MenuItem title="Settings" icon="setting" />
          <MenuItem title="Log Out" icon="logout" />
        </div>
        <FooterSidebar />
      </div>
    </section>
  );
};

export default MemberSidebar;
