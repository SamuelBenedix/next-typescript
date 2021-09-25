/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface TableContentProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: 'Failed' | 'Pending' | 'Success';
  image: string;
}

const TableRow = (props: TableContentProps) => {
  const { image, title, category, item, price, status } = props;
  const classTitle = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    failed: status === 'Failed',
    success: status === 'Success',
  });

  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image
            src={`/img/${image}.png`}
            width={80}
            height={60}
            alt="game thumnail"
          />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{`${item}gold`}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          Rp
          {price}
        </p>
      </td>
      <td>
        <div>
          <span className={classTitle} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href="/member/transactions/details">
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
