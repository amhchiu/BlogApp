/**
 * Make post title all lowercase and hyphenated for URL
 * @param {string} title - Title of post created
 */
const URLFriendly = (title) => {
    let lower = title.toLowerCase();
    let friendlyURL = '';
    let s = lower.split("");
    let c;
    let prevdash = false;
    for(i = 0; i<s.length; i++){
        c = s[i];
        if((c >= 'a' && c <= 'z') || (c >= '0' && c<='9')){
            friendlyURL = friendlyURL.concat(c);
            prevdash = false;
        }
        else if(c == ' ' || c == ',' || c == '.' || 
        c == '/' || c == '\\' || c == '-' || c == '_' || c == '='){
            if(!prevdash && c.length > 0){
                friendlyURL = friendlyURL.concat('-');
                prevdash = true;       
            }
        }
        //No percentage symbol allowed!
    }
    if(prevdash) return friendlyURL.Substring(0, friendlyURL.length -1);
    else return friendlyURL;
};

/**
 * uid for mongodb. amhchiu.com/:uid/:title /125434/my_first_blogpost
 * 
 */
const generateUID = () => {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);

    return firstPart+secondPart;
};

module.exports = { URLFriendly, generateUID };