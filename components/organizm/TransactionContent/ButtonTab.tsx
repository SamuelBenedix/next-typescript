import cx from 'classnames';
import Link from 'next/link';

interface ButtonTabProps {
  title: string;
  isActive?: boolean;
  href: string;
}

const ButtonTab = (props: Partial<ButtonTabProps>) => {
  const { title, isActive, href = '/' } = props;

  const classTitle = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': isActive,
  });

  return (
    <Link href={href}>
      <a data-filter="*" className={classTitle}>
        {title}
      </a>
    </Link>
  );
};

export default ButtonTab;
