import ReactDom from 'react-dom';

const ModalPortal = ({ children }) => {
  return ReactDom.createPortal(children, document.body);
};

export default ModalPortal;
