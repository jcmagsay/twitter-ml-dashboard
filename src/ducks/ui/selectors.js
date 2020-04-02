/* -------------------------------  HELPERS  ------------------------------- */

const getUi = store => store.ui || {};
const getViewport = store => getUi(store).viewport || null;

/* ------------------------------  SELECTORS  ------------------------------ */

/* ---------------  VIEWPORT  --------------- */
const selectorViewport = store => getViewport(store);

export default {
  selectorViewport,
};
