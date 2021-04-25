import React, { FC } from "react";
import { IModalContext, IShowModalState } from "./types";
export const INITIALIZED_MODAL: IShowModalState = {
  state: false,
  item: {},
  items: []
};
export const ModalContext = React.createContext<IModalContext>({});
export const ModalProvider: FC = ({ children }) => {
  const [showModal, setShowModal] = React.useState<IShowModalState>(
    INITIALIZED_MODAL
  );
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
