const SimpleSimplex = require('simple-simplex');


const solver = new SimpleSimplex({
    objective: {
      a: 5,
      b: 2,
    },
    constraints: [
      {
        namedVector: { a: 1, b:0},
        constraint: '<=',
        constant: 3,
      },
      {
        namedVector: { a: 1, b:0},
        constraint: '<=',
        constant: 4,
      },
      {
        namedVector: { a: 1, b: 2},
        constraint: '<=',
        constant: 9,
      },
    ],
    optimizationType: 'max',
  });

  const result = solver.solve({
    methodName: 'simplex',
  });


  console.log({
    solution: result.solution,
    isOptimal: result.details.isOptimal,
  });
