import styles from './styles.module.scss';

function Button({ className, children, onClick, ...addedProps }) {
  return (
    <button
      className={`${className} ${styles['btn']}`}
      onClick={onClick}
      {...addedProps}
    >
      {children}
    </button>
  );
}

export default Button;
