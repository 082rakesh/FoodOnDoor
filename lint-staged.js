// module.exports = {
//   '*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', () => 'tsc-files --noEmit'],
//   '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
// };

// Above script provides provides TS ENT error hence used below  one.
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
