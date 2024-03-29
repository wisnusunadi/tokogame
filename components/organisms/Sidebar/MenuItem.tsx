import classNames from 'classnames';
import Image from 'next/image'
import React from 'react'
import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
    title: string;
    icon: string;
    active?: boolean;
    href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, active, href } = props;
    const classItem = cx({
        item: true,
        'mb-30': true,
        active,
    })
    return (
        <div className={classItem}>
            <div className="me-3">
                <Image src={`/icon/ic-menu-${icon}.svg`} width={25} height={25} alt='s' />
            </div>
            <p className="item-title m-0">
                <Link href={{ pathname: href }} legacyBehavior>
                    <a className="text-lg text-decoration-none">{title}</a>
                </Link>
            </p>
        </div >
    )
}
