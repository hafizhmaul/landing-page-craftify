import React from "react";
import { imgDefault } from "../../organisms/ProductSection/ProductSection.constant";
import { ProductType } from "../../organisms/ProductSection/ProductSection.types";

const Modal: React.FC<{
  showModal: boolean;
  selectedProduct: ProductType | null;
  onClose: () => void;
}> = ({ showModal, selectedProduct, onClose }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[rgba(0,0,0,0.54)] outline-none  focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl border-2 border-black shadow-[10px_10px_0px_0px_#000000] mobile:mx-4">
              {/*content*/}
              <div className="relative flex w-full flex-col border-0 bg-white shadow-lg outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-center justify-between border-b-2 border-solid border-black bg-[#ebb136] px-3 py-1">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full border-2 border-black" />
                    <span className="h-3 w-3 rounded-full border-2 border-black" />
                    <span className="h-3 w-3 rounded-full border-2 border-black" />
                  </div>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex flex-auto flex-col items-start p-6 text-xl font-semibold uppercase">
                  <img
                    className="h-[260px] object-cover"
                    src={selectedProduct?.image || imgDefault}
                    alt={`${selectedProduct?.name}-img`}
                  />
                  <div>
                    <span className="text-gray-400">Id:</span>{" "}
                    {selectedProduct?.id}
                  </div>
                  <div>
                    <span className="text-gray-400">Name:</span>{" "}
                    {selectedProduct?.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
