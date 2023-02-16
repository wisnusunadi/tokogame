import cx from "classnames";
interface ButtonTabProps {
  active: boolean;
  title: string;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { active, title } = props;
  const ButtonClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <a href="../member/transactions-detail.html" className={ButtonClass}>
      {title}
    </a>
  );
}
