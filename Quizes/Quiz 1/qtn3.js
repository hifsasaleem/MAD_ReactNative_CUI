function checkPalindrome(string) {

    const arr = string.split('');
    const reverseArr = arr.reverse();
    const reverseString = reverseArr.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

checkPalindrome("dad")
checkPalindrome('car')

// OUTPUT:
// It is a palindrome
// It is not a palindrome
