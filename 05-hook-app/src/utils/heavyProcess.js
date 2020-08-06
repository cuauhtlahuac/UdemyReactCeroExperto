const heavyProcess = (iterations) => {
  const recursion = (n) => {
    if (n === 1) return 0;
    console.log('wating for...');
    return (n = recursion(n - 1));
  };

  recursion(iterations);
  return `${iterations} iteraciones realizadas`;
};

export default heavyProcess;
