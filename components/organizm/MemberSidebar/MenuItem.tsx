/* eslint-disable object-curly-newline */
import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  active?: boolean;
  icon:
    | 'overview'
    | 'messages'
    | 'card'
    | 'reward'
    | 'setting'
    | 'logout'
    | 'transaction';
  href: string;
}

const MenuItem = (props: Partial<MenuItemProps>) => {
  const { title, active, icon, href = '/' } = props;

  const classTitle = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classTitle}>
      <div className="me-3">
        <Image
          width={25}
          height={25}
          alt={icon}
          src={`/icon/ic-menu-${icon}.svg`}
        />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;
