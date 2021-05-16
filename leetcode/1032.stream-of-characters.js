/*
 * @lc app=leetcode id=1032 lang=javascript
 *
 * [1032] Stream of Characters
 */

// @lc code=start
class SuffixTrie {
  constructor(isEow = false) {
    this.trie = new Map();
    this.eow = isEow;
  }

  insert(word) {
    var sTrie = this;
    for (let i = word.length - 1; i >= 0; i--) {
      if (!sTrie.trie.has(word[i])) sTrie.trie.set(word[i], new SuffixTrie());
      sTrie = sTrie.trie.get(word[i]);
    }
    sTrie.eow = true;
  }

  checkPartial(stream) {
    var sTrie = this;
    for (let i = stream.length - 1; i >= 0; i--) {
      if (sTrie.eow) return true;
      if (!sTrie.trie.has(stream[i])) return false;
      sTrie = sTrie.trie.get(stream[i]);
    }
    return sTrie.eow;
  }
}

/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
  this.trie = new SuffixTrie();
  this.stream = [];
  words.forEach((word) => this.trie.insert(word));
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  this.stream.push(letter);
  return this.trie.checkPartial(this.stream);
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
// @lc code=end
