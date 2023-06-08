import { useState } from 'react';

const AddOns = () => {
    const [checked, setChecked] = useState({
        onlineService: false,
        largerStorage: false,
        customizableProfile: false
    });

    const handleOnlineServiceChange = (event) => {
        let newOnlineService = event.target.checked;

        setChecked((prevOnlineService) => ({
            ...prevOnlineService,
            onlineService: newOnlineService
        })) 

        const onlineServiceCard = document.querySelector('#online-service');
        if(newOnlineService){
            onlineServiceCard.classList.add('add-ons-card-checked');
        }else{
            onlineServiceCard.classList.remove('add-ons-card-checked');
        }
    }
    const handleLargerStorageChange = (event) => {
        let newLargerStorage = event.target.checked;

        setChecked((prevLargerStorage) => ({
            ...prevLargerStorage,
            largerStorage: newLargerStorage
        }))

        const largerStorageCard = document.querySelector('#larger-storage');
        if(newLargerStorage){
            largerStorageCard.classList.add('add-ons-card-checked');
        }else{
            largerStorageCard.classList.remove('add-ons-card-checked');
        }
    }
    const handleCustomizableProfileChange = (event) => {
        let newCustomizableProfile = event.target.checked;

        setChecked((prevCustomizableProfile) => ({
            ...prevCustomizableProfile,
            customizableProfile: newCustomizableProfile
        }))

        const customizableProfileCard = document.querySelector('#customizable-profile');
        if(newCustomizableProfile){
            customizableProfileCard.classList.add('add-ons-card-checked');
        }else{
            customizableProfileCard.classList.remove('add-ons-card-checked');
        }
    }

    return (
        <>
            <div className="pt-3  mb-4">
                <h4 className="heading">
                    Pick add-ons
                </h4>
                <p className="text-muted">
                    Add-ons help enhance your gaming experience.
                </p>
            </div>
            <div className="mb-4">
                
                <div className="add-ons-card p-3" id="online-service">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <input type="checkbox" onChange={ handleOnlineServiceChange } 
                            checked={ checked.onlineService } />
                        </div>
                        <div className="col-8">
                            <h6>
                                Online service
                            </h6>
                            <p>Access to multiplayer games</p>
                        </div>
                        <div className="col-3">
                            +$1/mo
                        </div>
                    </div>
                </div>

                <div className="add-ons-card p-3" id="larger-storage">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <input type="checkbox" onChange={ handleLargerStorageChange } 
                            checked={ checked.largerStorage } />
                        </div>
                        <div className="col-8">
                            <h6>
                                Larger storage
                            </h6>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                        <div className="col-3">
                            +$2/mo
                        </div>
                    </div>
                </div>

                <div className="add-ons-card p-3" id="customizable-profile" >
                    <div className="row align-items-center">
                        <div className="col-1">
                            <input type="checkbox" onChange={ handleCustomizableProfileChange } id="customizable-profile" 
                            checked={ checked.customizableProfile } />
                        </div>
                        <div className="col-8">
                            <h6>
                                Customizable Profile
                            </h6>
                            <p>Custom theme on your profile</p>
                        </div>
                        <div className="col-3">
                            +$2/mo
                        </div>
                    </div>
                </div>

            </div>
            { checked.onlineService}
            { checked.largerStorage }
            { checked.customizableProfile }
        </>
    );
}

export default AddOns;