import React from 'react';

function Feature() {
  return (
    <div className="bg-yellow-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="relative">
          <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
            <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
              <img
                className="absolute h-full w-full object-cover"
                src="https://stripe.com/img/v3/payments/overview/photos/slack.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-yellow-500 opacity-50" />
            </div>
            <div className="relative lg:w-7/12 bg-white">
              {/* <svg
                className="absolute h-full text-white w-24 -ml-12"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg> */}
              <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                  Netin paras
                </h2>
                <p className="mt-2 mb-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Sangria ohje
                </p>
                <p>
                  Joko olet maistanut parasta sangria reseptiamme? Sangria
                  soveltuu hyvin esimerkiksi booliksi.
                </p>
                <p className="mt-6">
                  <a
                    href="google.com"
                    className="font-medium text-red-600 hover:text-red-900"
                  >
                    Katso sangria resepti &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feature;
