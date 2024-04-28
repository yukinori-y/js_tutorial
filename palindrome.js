// 文字列を逆順にする
function reverse(string) {
  return string.split("").reverse().join("");
}

// パリンドロームならtrueを、違うならfalseを返す
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
