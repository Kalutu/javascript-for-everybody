function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the string is equal to its reverse
  return s === s.split('').reverse().join('');
}

