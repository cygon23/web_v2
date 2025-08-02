import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("user_consent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    Cookies.set("user_consent", "true", { expires: 365 });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className='fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50 flex justify-between items-center'>
        <p className='text-sm'>
          We use cookies to improve your experience on our site.
        </p>
        <button
          onClick={acceptCookies}
          className='ml-4 px-4 py-2 bg-primary rounded text-sm'>
          Accept
        </button>
      </div>
    )
  );
};

export default CookieConsent;
