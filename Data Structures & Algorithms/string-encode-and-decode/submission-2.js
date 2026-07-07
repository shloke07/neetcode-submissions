class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let singleString = '';
        strs.forEach(x=>singleString+=x+';');
        let encodedString = encodeURI(singleString);
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedString = decodeURI(str);
        let decodedArray =  decodedString.split(';')
        decodedArray.splice(decodedArray.length-1,1);
        return decodedArray;
    }
}
