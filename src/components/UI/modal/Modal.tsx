import React from "react";
import ReactDom from "react-dom";
import { useTranslation } from "react-i18next";
import classes from "./Modal.module.scss";
import Card from "../card/Card";
import Button from "../button/Button";

interface IBackdrop {
  onConfirm: () => void;
}
const Backdrop: React.FC<IBackdrop> = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

// interface IModalOverlay {
//   title: string;
//   message: string;
// }

interface IModal {
  title: string;
  message: string;
  onConfirm: () => void;
}

const ModalOverlay: React.FC<IModal> = (props) => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h3>{props.title}</h3>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button outline={true} onClick={props.onConfirm}>
            {t("cancel")}
          </Button>
          <button className={classes.delete} onClick={props.onConfirm}>
            {t("delete")}
          </button>
        </footer>
      </div>
    </Card>
  );
};

const Modal: React.FC<IModal> = (props) => {
  const backdropRoot = document.getElementById("backdrop-root") as HTMLElement;
  const modalOverlay = document.getElementById("overlay-root") as HTMLElement;
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        backdropRoot
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        modalOverlay
      )}
    </>
  );
};

export default Modal;
