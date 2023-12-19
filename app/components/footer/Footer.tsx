import React from "react";

const Footer = () => {
 return (
    <footer className="bg-orange-600 text-white mt-3 py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Bize Ulaşın</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="mailto:info@example.com" className="text-white">
                 info@example.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+1234567890" className="text-white">
                 +1234567890
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold mb-2">İletişim</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-white">
                 Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white">
                 Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white">
                 Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="font-bold mb-2">Kurumsal</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-white">
                  İş Ortaklığı
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white">
                 Destek
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white">
                  Şartlar ve Koşullar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
 );
};

export default Footer;