const isPresent = (string) => {
    return typeof string === 'string' && string.trim() !== '';
  };
  
  export default isPresent;