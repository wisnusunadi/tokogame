import ReachItem from "../molecules/ReachItem"

export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachItem count="290M+" desc="Players Top Up" />
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <ReachItem count="12.500" desc="Games Available" />
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <ReachItem count="99,9%" desc="Happy Players" />
                    <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                    <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                    <ReachItem count="4.7" desc="Rating Worldwide" />
                </div>
            </div>
        </section>

    )
}
