/* -------------------------------  VIEWPORT  ------------------------------- */

const setViewport = (payload) => {
  return (
    {
      type: 'UPDATE',
      payload,
    }
  );
};

/* -------------------------------  EXPORT  ------------------------------- */

export default {
  setViewport,
};
