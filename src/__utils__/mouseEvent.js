import { fireEvent } from 'react-testing-library';

const mouseDown = el => {
  fireEvent(
    el,
    new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true
    })
  );
};

export default { mouseDown };
