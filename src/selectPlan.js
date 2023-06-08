import icon_advanced from './assets/images/icon_advanced.svg';
import icon_arcade from './assets/images/icon_arcade.svg';
import icon_pro from './assets/images/icon_pro.svg';

const SelectPlan = () => {

    return(
        <>
            <div className="pt-3  mb-4">
                <h4 className="heading">
                    Select your plan
                </h4>
                <p className="text-muted">
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <div className="row g-4 mb-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="p-3 d-flex d-md-block align-items-center selectPlan-card">
                            <div className="mb-md-5">
                                <img src={ icon_arcade } alt="icon-arcade" />
                            </div>
                            <div className="ml-3 ml-md-0">
                                <h6>
                                    Arcade
                                </h6>
                                <p>
                                    $9/mo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="p-3 d-flex d-md-block align-items-center selectPlan-card">
                            <div className="mb-md-5">
                                <img src={ icon_advanced } alt="icon-advanced" />
                            </div>
                            <div className="ml-3 ml-md-0">
                                <h6>
                                    Advanced
                                </h6>
                                <p>
                                    $12/mo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="p-3 d-flex d-md-block align-items-center selectPlan-card">
                            <div className="mb-md-5">
                                <img src={ icon_pro } alt="icon-pro" />
                            </div>
                            <div className="ml-3 ml-md-0">
                                <h6>
                                    Pro
                                </h6>
                                <p>
                                    $15/mo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" text-center bg-light-gray rounded mb-5">
                <ul className="inline-list p-2">
                    <li className="list-inline-item active-text">Monthly</li>
                    <li className="list-inline-item">
                        <div className="custom-control custom-switch">
                        <input id="my-input" className="custom-control-input bg-marine-blue" type="checkbox" name="" value="true" />
                        <label for="my-input" className="custom-control-label"></label>
                        </div>
                    </li>
                    <li className="list-inline-item disabled-text">Yearly</li>
                </ul>
            </div>
        </>
    );
}

export default SelectPlan;