/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
import Profile from './Profile';
import FooterSidebar from './FooterSidebar';
import MenuItem from './MenuItem';

interface MemberSidebarProps {
  activeMenu:
    | 'overview'
    | 'transaction'
    | 'setting'
    | 'message'
    | 'member'
    | 'card';
}

const MemberSidebar = (props: MemberSidebarProps) => {
  const { activeMenu } = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="overview"
            active={activeMenu === 'overview'}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="transaction"
            href="/member/transactions"
            active={activeMenu === 'transaction'}
          />
          <MenuItem
            title="Messages"
            icon="messages"
            href="/member"
            active={activeMenu === 'message'}
          />
          <MenuItem
            title="Card"
            icon="card"
            href="/member"
            active={activeMenu === 'card'}
          />
          <MenuItem
            title="Rewards"
            icon="reward"
            href="member"
            active={activeMenu === 'member'}
          />
          <MenuItem
            title="Settings"
            icon="setting"
            href="/member/edit-profile"
            active={activeMenu === 'setting'}
          />
          <MenuItem title="Log Out" icon="logout" href="signin" />
        </div>
        <FooterSidebar />
      </div>
    </section>
  );
};

export default MemberSidebar;
