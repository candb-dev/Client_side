import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { InformationCircleIcon, UserIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "../../../../assets/logo.png";

const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "WorkShop", href: "/workshop" },
    { name: "Exhibition", href: "/exhibition" },
    { name: "Blog", href: "/blog" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [infoOverlayOpen, setInfoOverlayOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "" });

  const location = useLocation();

  useEffect(() => {
    // Check if the user is logged in
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setIsLoggedIn(true);
    }
  }, []);

   const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("persist:root");
    setUser({ name: "" });
    setIsLoggedIn(false);
    setUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const openInfoOverlay = () => {
    setInfoOverlayOpen(true);
  };

  const closeInfoOverlay = () => {
    setInfoOverlayOpen(false);
  };

  return (
    <div className="bg-red-600">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <RouterLink
                        to={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </RouterLink>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {isLoggedIn ? (
                    <>
                      <div className="flow-root">
                        <a
                          href="#"
                          className="-m-2 flex gap-x-2 p-2 font-medium text-gray-900"
                        >
                          <UserIcon className="h-6 w-6 text-black" aria-hidden="true" />{user.name}
                        </a>
                      </div>
                      <div className="flow-root">
                        <a
                          href="#"
                          onClick={handleLogout}
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Logout
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flow-root">
                        <a
                          href="/auth/login"
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Sign in
                        </a>
                      </div>
                      <div className="flow-root">
                        <a
                          href="/auth/signup"
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Create account
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop mode */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-[#F94C10] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
        {/* Logo on Mobile view*/}
        <div className="lg:hidden text-center flex justify-center items-center">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img className="h-[100px] w-auto" src={Logo} alt="logo" />
          </a>
        </div>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b lg:py-5 py-2 border-gray-200">
            <div className="flex h-16 items-center">
              <div className="flex items-center">
                {/* Logo on desktop view*/}
                <a href="#" className="mr-4 hidden lg:block">
                  <span className="sr-only">Your Company</span>
                  <img className="h-[100px] w-auto" src={Logo} alt="logo" />
                </a>

                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.pages.map((page) => (
                      <RouterLink
                        key={page.name}
                        to={page.href}
                        className={`flex items-center text-sm font-medium text-black hover:text-[#F94C10] relative`}
                        style={{
                          paddingBottom:
                            location.pathname === page.href ? "5px" : "0",
                          borderBottom:
                            location.pathname === page.href
                              ? "3px solid #F94C10"
                              : "none",
                          color:
                            location.pathname === page.href
                              ? "#F94C10"
                              : "black",
                          transition: "padding-bottom 0.3s, border-bottom 0.2s",
                        }}
                      >
                        {page.name}
                      </RouterLink>
                    ))}
                  </div>
                </Popover.Group>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {isLoggedIn ? (
                    <div className="relative">
                      <button
                        type="button"
                        className="lg:block ml-2 p-2 text-black"
                        onClick={toggleUserMenu}
                      >
                        <UserIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      {userMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                          <div className="py-1">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {user.name}
                            </a>
                            <a
                              href="#"
                              onClick={handleLogout}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Logout
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <a
                        href="/auth/login"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Sign in
                      </a>
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                      <a
                        href="/auth/signup"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Create account
                      </a>
                    </>
                  )}
                </div>

                {/* Info logo */}
                <div className="ml-4 flow-root lg:ml-6">
                  {/* Info Overlay Trigger */}
                  <button
                    type="button"
                    className="hidden lg:block ml-2 p-2 text-black"
                    onClick={openInfoOverlay}
                  >
                    <span className="sr-only">Company Info</span>
                    <InformationCircleIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Info Overlay */}
                <Transition.Root show={infoOverlayOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-hidden"
                    onClose={closeInfoOverlay}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-200 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-200 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <div className="absolute inset-0 transition-opacity bg-black bg-opacity-25" />
                      </Transition.Child>

                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                          <div className="w-screen max-w-md">
                            <div className="relative flex flex-col h-full p-6 bg-white shadow-xl">
                              <button
                                type="button"
                                className="absolute top-7 mr-3 right-0 -mt-2 p-2 hover:bg-[#ef986d] text-white hover:text-black"
                                onClick={closeInfoOverlay}
                              >
                                <span className="sr-only">Close</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>

                              {/* Company Info Content */}
                              <div className="mt-20">
                                <div>
                                  <img src="/logo.png" alt="img" />
                                </div>
                                <h1 className="text-2xl font-bold mb-4">
                                  Company Info
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition.Root>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
