// include node fs module
var fs = require('fs');


// function spacing(items, value) {
//   const range = Array.from({ length: value + 1 }, (_, i) => i)
//   const prefixes = [
//     {
//       name: '',
//     },
//     {
//       name: 't',
//       positions: ['top']
//     },
//     {
//       name: 'b',
//       positions: ['bottom']
//     },
//     {
//       name: 'l',
//       positions: ['left']
//     },
//     {
//       name: 'r',
//       positions: ['right']
//     },
//     {
//       name: 'x',
//       positions: ['left', 'right']
//     },
//     {
//       name: 'y',
//       positions: ['top', 'bottom']
//     },
//   ];
//   const result = prefixes.map(prefix => {
//     return range.map(val => {
//       return items.map(item => {
//         if (prefix.positions != null) {
//           const jointPositions = prefix.positions.map(position => `${item}-${position}: ${val}px;`).join(' ');
//           return `.p-${prefix.name}-${val}{ ${jointPositions}}`
//         }
//         if (prefix.name.length <= 0) {
//           return `.p-${val}{ ${item}: ${val}px; }`
//         }
//         return `.p-${prefix.name}-${val}{ ${item}-${prefix.name}: ${val}px; }`
//       }).join('\n')
//     }).join('\n')
//   }).join('\n')
//   return result;
// }
function padding(value) {
  const range = Array.from({ length: value + 1 }, (_, i) => i)
  const prefixes = [
    {
      name: '',
    },
    {
      name: 't',
      positions: ['top']
    },
    {
      name: 'b',
      positions: ['bottom']
    },
    {
      name: 'l',
      positions: ['left']
    },
    {
      name: 'r',
      positions: ['right']
    },
    {
      name: 'x',
      positions: ['left', 'right']
    },
    {
      name: 'y',
      positions: ['top', 'bottom']
    },
  ];
  const result = prefixes.map(prefix => {
    return range.map(val => {
      if (prefix.positions != null) {
        const jointPositions = prefix.positions.map(position => `padding-${position}: ${val}px;`).join(' ');
        return `.p-${prefix.name}-${val}{ ${jointPositions}}`
      }
      if (prefix.name.length <= 0) {
        return `.p-${val}{ padding: ${val}px; }`
      }
      return `.p-${prefix.name}-${val}{ padding-${prefix.name}: ${val}px; }`
    }).join('\n')
  }).join('\n')
  return result;
}

fs.writeFile('./styles/padding-prefix.css', padding(100), function (err) {
  if (err) throw err;
  console.log('Padding File is created successfully.');
});
// fs.writeFile('/styles/custom-prefix.less', padding(100), function (err) {
//   if (err) throw err;
//   console.log('Padding File is created successfully.');
// }); 