/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false;
    const mST = {};
    const mTS = {};

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];

        if ((mST[c1] && mST[c1] !== c2) || (mTS[c2] && mTS[c2] !== c1)) {
            return false;
        }

        mST[c1] = c2;
        mTS[c2] = c1;
    }

    return true;

};