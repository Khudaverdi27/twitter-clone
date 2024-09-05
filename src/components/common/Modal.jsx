import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "./Button";

export default function MyModal({
  children,
  isOpen,
  closeModal,
  closeModalWithConfirim,
  title,
}) {
  return (
    <>
      <div>{children}</div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-80 max-w-md transform overflow-hidden rounded-2xl bg-black p-8 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-white"
                  >
                    Unfollow
                    <p className="py-1">{title}?</p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Their posts will no longer show up in your For You
                      timeline. You can still view their profile, unless their
                      posts are protected.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col space-y-2">
                    <Button
                      size="medium"
                      variant="white"
                      onClick={closeModalWithConfirim}
                    >
                      Unfollow
                    </Button>
                    <Button
                      size="medium"
                      followActive="true"
                      onClick={closeModal}
                    >
                      Cancel
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
