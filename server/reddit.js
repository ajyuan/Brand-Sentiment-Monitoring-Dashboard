var rawjs = require('raw.js');
var reddit = new rawjs("WatsonBot");
reddit.setupOAuth2("ZweJ_5vnHiceww", "ntESUzk15C07el8yIvMzyVfFV9E");

let options = {
    q: 'IBM Cloud'
}

let out = []
reddit.search(options, function(err, resp) {
    for (var i = 0; i < resp.children.length; i++) {
        out.push([resp.children[i].data.selftext, resp.children[i].data.created_utc])
        //console.log(resp.children[i].data)
        //console.log(resp.children[i].data.url)
        const permurl = resp.children[i].data.permalink
        //console.log(permurl.substring(permurl.indexOf('/comments/')+10))
        let commentOptions = {
            link : permurl.substring(permurl.indexOf('/comments/')+10)
        }
        reddit.comments(commentOptions, function(err, comments) {
            if (comments) {
                const children = comments.data.children
                for (let i = 0; i < children.length; i++) {
                    if (children[i].data) {
                        out.push([children[i].data.body, children[i].data.created_utc])
                    }
                }
            }
        })
    }
})