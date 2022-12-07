import cx from 'classnames';
interface MenuProps{
    title: string;
    active?:boolean;
}
export default function Menu(props: Partial<MenuProps>) {
    const {title,active} = props;
    const classTitle = cx({
        'nav-link':true,
         active
    })
  return (
    <li className="nav-item my-auto">
    <a className={classTitle} aria-current="page" href="#">{title}</a>
</li>
  )
}
