import Image from 'next/image';
import React, { ReactNode } from 'react'
interface CategoryProps {
    img: 'Desktop' | 'Mobile' | 'Categories';
    children: ReactNode;
    amount: number;
}

export default function Category(props: CategoryProps) {
    const { img, amount, children } = props;
    return (
        <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
            <div className="categories-card">
                <div className="d-flex align-items-center mb-24">
                    <Image src={`/icon/${img}.svg`} width={60} height={60} alt="icon-overviews" />
                    <p className="color-palette-1 mb-0 ms-12">{children}</p>
                </div>
                <div>
                    <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                    <p className="text-2xl color-palette-1 fw-medium m-0">Rp {amount}</p>
                </div>
            </div>
        </div >
    )
}
