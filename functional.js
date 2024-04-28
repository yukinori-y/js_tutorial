let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URL生成: 命令型バージョン
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
console.log(imperativeUrls(states));

// URL生成: 関数型バージョン
function functionalUrls(elements) {
  return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
}
console.log(functionalUrls(states));

// 1単語の文字列抽出: 命令型バージョン
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// 1単語の文字列抽出: 関数型バージョン
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// function UrLs(urls) {
//   return urls.map(urls => "https://example.com/"+urls);
// }
// console.log(UrLs(functionalUrls(states)));