import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import userActions from '../../reducers/userReducer/userActions.ts';

import classes from './ModalFailWindow.module.scss';

const ModalFailWindow = () => {
  const dispatch = useDispatch();
  const fetchFail = useSelector((state) => state.user.fetchFail);
  const positionClass = fetchFail ? `${classes.visible}` : `${classes.hiden}`;

  const opacityAnimate = useSpring({
    opacity: fetchFail ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  if (fetchFail) {
    setTimeout(() => dispatch(userActions.changeFetchFeil(false)), 3500);
  }

  return (
    <animated.div style={opacityAnimate} className={`${classes.modalWindow} ${positionClass}`}>
      <p className={classes.message}>Something was wrong...</p>
      <p className={classes.message}>Check your internet connection and the authentication status on the site.</p>
    </animated.div>
  );
};
export default ModalFailWindow;
