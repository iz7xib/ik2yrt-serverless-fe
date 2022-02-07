import ClassName from 'models/classname';

import styles from './Container.module.scss';

const Container = ({ children, className, sharingBtn }) => {
  const containerClassName = new ClassName(styles.container);

  containerClassName.addIf(className, className);

  return (
    <div className={containerClassName.toString()} data-sharing={sharingBtn}>
      {children}
    </div>
  );
};

export default Container;
