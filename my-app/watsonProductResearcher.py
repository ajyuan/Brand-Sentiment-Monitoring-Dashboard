import praw

def generateData(keyword, subreddits=["all"], resultLimits=5, time='all') -> list:
    out = []
    for subreddit in subreddits:
        for result in reddit.subreddit(subreddit).search(keyword, limit=resultLimits, time_filter=time): 
            if result.selftext:
                out.append([result.selftext,result.created_utc])
            for comment in result.comments.list():
                out.append([comment.body,comment.created_utc])
    return out

if __name__ == '__main__':
    reddit = praw.Reddit(client_id='ZweJ_5vnHiceww',
                     client_secret='ntESUzk15C07el8yIvMzyVfFV9E',
                     user_agent='WatsonBot')
    if not reddit:
        print('Authentication failed')
        exit(1)
    print('Authentication successful')

    output = generateData("IBM Cloud")
    print(output)