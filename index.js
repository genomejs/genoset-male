var gql = require('gql');

module.exports = gql.atLeast(2, [
  gql.exact('rs2032651', 'D'),
  gql.has('rs2032651', 'A'),
  gql.has('rs9341296', 'C'),
  gql.has('rs9341296', 'T'),
  gql.has('rs13304168', 'C'),
  gql.has('rs13304168', 'T'),
  gql.has('rs1118473', 'A'),
  gql.has('rs1118473', 'G'),
  gql.has('rs150173', 'A'),
  gql.has('rs150173', 'C'),
  gql.has('rs16980426', 'G'),
  gql.has('rs16980426', 'T'),
  gql.or([
    gql.exact('rs1558843', 'C'),
    gql.exact('rs1558843', 'A')
  ]),
  gql.or([
    gql.exact('rs17222419', 'C'),
    gql.exact('rs17222419', 'T')
  ])
]);