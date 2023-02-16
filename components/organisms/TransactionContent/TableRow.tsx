import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface TableRowProps {
  title: string;
  device: string;
  gold: number;
  amount: number;
  status: "Pending" | "Success" | "Failed";
  img: string;
}
export default function TableRow(props: TableRowProps) {
  const { title, device, gold, amount, status, img } = props;
  const statusClass = cx({
    "float-start icon-status": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${img}.png`}
          width={80}
          height={60}
          alt="game-thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {device}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{gold} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">Rp {amount}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href="/member/transactions/detail" legacyBehavior>
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
