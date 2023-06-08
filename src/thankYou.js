import icon_thank_you from './assets/images/icon_thank_you.svg';

const ThankYou = () => {
    return(
        <>
            <div className="pt-3  mt-5 text-center">
                <img src={ icon_thank_you } alt="icon-thank-you" className="mb-4" />
                <h4 className="heading mb-3">
                    Thank you!
                </h4>
                <p className="text-muted">
                    Thanks for confirming your subscription! We hope you have fun 
                    using our platform. If you ever need support, please feel free 
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </>
    );
}
export default ThankYou;