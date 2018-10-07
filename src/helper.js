export const queryParser = (params) => {
  const result = {};
  params.substr(1).split('&').forEach((param) => {
    result[param.split('=')[0]] = param.split('=')[1];
  });
  return result;
};
