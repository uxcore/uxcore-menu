const isLineClampSupport = (() => {
  const div = document.createElement('div');
  return 'WebkitLineClamp' in div.style;
})();

const getClampProps = ({ mode, lineClamp, className }) => {
  const props = {};
  let clamp = false;
  if (mode === 'inline' && lineClamp > 1 && isLineClampSupport) {
    const style = {};
    style.WebkitLineClamp = lineClamp;
    style.lineClamp = lineClamp;
    style.WebkitBoxOrient = 'vertical';
    props.style = style;
    props.className = className;
    clamp = true;
  }
  return { props, clamp };
};

export default {
  getClampProps,
};
