
const Summary = () => {

    return (
        <>
            <div className="pt-3  mb-4">
                <h4 className="heading">
                    Finishing up
                </h4>
                <p className="text-muted">
                    Double-check everything looks OK before confirming.
                </p>
            </div>
            <div className="mb-4 ">
                <div className="summary-wrapper">
                    <div className="d-flex justify-content-between summary-card">
                        <div>
                            <h6>Arcade(Monthly)</h6>
                            <button>change</button>
                        </div>
                        <div>
                            $90/yr
                        </div>
                    </div>

                    <hr />

                    <div className="add-ons-summary">

                        <div className="d-flex justify-content-between">
                            <div>
                                Online service
                            </div>
                            <div>
                                +$10/yr
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div>
                                Larger Storage
                            </div>
                            <div>
                                +$20/yr
                            </div>
                        </div>

                    </div>

                </div>

                <div className="total-price d-flex justify-content-between p-3">
                    <div>
                        Total(<span>per month</span>)
                    </div>
                    <div>
                        $120/yr
                    </div>
                </div>
            </div>
        </>
    );
}

export default Summary;