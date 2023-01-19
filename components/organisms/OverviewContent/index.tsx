import React from 'react'
import Category from './Category'
import TableRow from './TableRow'

export default function OverviewContent() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <Category img="Desktop" amount={18000500}>
                                Game <br /> Desktop
                            </Category>
                            <Category img="Mobile" amount={2005220}>
                                Game <br /> Mobile
                            </Category>
                            <Category img="Categories" amount={511220}>
                                Other <br /> Categories
                            </Category>

                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow title="Mobile Legends: The New Battle 2021" device="Desktop" gold={205} amount={450000} status="Pending" img='overview-1' />
                                <TableRow title="Call of Duty:Modern" device="Desktop" gold={100} amount={450000} status="Failed" img='overview-2' />
                                <TableRow title="Clash of Clans" device="Desktop" gold={2105} amount={450000} status="Pending" img='overview-3' />
                                <TableRow title="The Royal Game" device="Desktop" gold={15} amount={450000} status="Success" img='overview-4' />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main >
    )
}
