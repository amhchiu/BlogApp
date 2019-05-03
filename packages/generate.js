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

module.exports = { URLFriendly };