const SimpleSimplex = require('simple-simplex');


const solver = new SimpleSimplex({
    objective: {
      a: 6,
      b: 10,
    },
    constraints: [
      {
        namedVector: { a: -1, b:1},
        constraint: '<=',
        constant: 2,
      },
      {
        namedVector: { a: 1, b:2},
        constraint: '>=',
        constant: 1,
      },

      {
        namedVector: { a: 1, b: 0},
        constraint: '<=',
        constant: 5,
      },

      {
        namedVector: { a: 1, b: 0},
        constraint: '<=',
        constant: 6,
      },

      {
        namedVector: { a: 3, b: 5},
        constraint: '>=',
        constant: 15,
      },

      {
        namedVector: { a: 5, b: 4},
        constraint: '>=',
        constant: 20,
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
