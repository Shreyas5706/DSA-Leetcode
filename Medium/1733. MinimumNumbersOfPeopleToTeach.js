/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
    const userLang = languages.map(langs => new Set(langs));
    const needTeach = new Set();
    for (const [u, v] of friendships) {
        const uSet = userLang[u - 1];
        const vSet = userLang[v - 1];
        let common = false;
        for (let lang of uSet) {
            if (vSet.has(lang)) {
                common = true;
                break;
            }
        }
        if (!common) {
            needTeach.add(u - 1);
            needTeach.add(v - 1);
        }
    }
    let res = needTeach.size;
    for (let lang = 1; lang <= n; lang++) {
        let count = 0;
        for (let user of needTeach) {
            if (userLang[user].has(lang)) {
                count++;
            }
        }
        res = Math.min(res, needTeach.size - count);
    }
    return res;
};