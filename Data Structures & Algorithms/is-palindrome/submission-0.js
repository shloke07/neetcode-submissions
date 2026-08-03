class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let trimmedStr = s.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');;
        console.log(trimmedStr)
        let formattedStr = trimmedStr.split('').reverse().join('').toLowerCase().replace(/[^a-zA-Z0-9]/g, '');;
        console.log(formattedStr)

        if (trimmedStr === formattedStr) {
            return true
        }
        else {
            return false
        }
    }
}
