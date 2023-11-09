import React from "react";
import Button from "@/components/Button.jsx";

export default function Modal({ children, header }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <Button type="button" onClick={() => setShowModal(true)}>
        Edit
      </Button>
      {showModal ? (
        <div className="flex fixed inset-0 items-center justify-center z-50">
          {/*Outer dark background*/}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowModal(false)}
          ></div>

          {/*SimpleModal content*/}
          <div className="bg-white p-8 rounded-md z-50 w-1/4">
            <div className="flex justify-center text-2xl mb-6">{header}</div>
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
