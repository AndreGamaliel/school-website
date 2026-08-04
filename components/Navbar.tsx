export function Navbar() {
  return (
    <header className="fixed w-full z-20 top-0 start-0">
      <nav className="bg-blue-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              SMP KRISTEN BETUN
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-body hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              href="#"
              className="text-sm font-medium text-fg-brand hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-neutral-secondary-soft border-y border-default bg-white/30 backdrop-blur-md">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-heading hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="relative">
                <details className="group relative">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded py-2 px-3 font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                    Tentang
                    <svg
                      className="w-4 h-4 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div
                    id="dropdownNavbar"
                    className="absolute z-10 mt-1 bg-neutral-primary-medium shadow-lg w-44"
                  >
                    <ul
                      className="p-2 text-sm text-body font-medium"
                      aria-labelledby="dropdownNavbarButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                        >
                          Tentang Sekolah
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                        >
                          Visi & Misi
                        </a>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
              <li>
                <a href="#" className="text-heading hover:underline">
                  Pengumuman
                </a>
              </li>
              <li>
                <a href="#" className="text-heading hover:underline">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
