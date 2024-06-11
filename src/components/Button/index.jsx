import styles from './styles.module.scss';

function Button({ className, children, onClick, ...addedProps }) {
  return (
    <button
      className={`${styles['Button']} ${className}`}
      onClick={onClick}
      {...addedProps}
    >
      {children}
    </button>
  );
}

export default Button;
