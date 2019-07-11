import tweepy

auth = tweepy.OAuthHandler('CNhkRnj2G4VBfxNS2muTLVHlA', 'eGwDdvcvZIhQWMpElPNlBZICIwzfPWG8DNFfIoWNmIhyNtN0mY')
auth.set_access_token('2314802384-1DChgFJp5CdAKqIIatRMEJQHCw9AGMIg6evKZ6v', '9NwYMXa1Ted6QgKfbdQWSKLzvZRxUmHLwqOsqgX3dGVnl')
api = tweepy.API(auth)

searchResults = api.search(
        q = 'ibm',
        count = 100
    )
output2 = []
for i in range(len(searchResults)):
    output2.append(searchResults[i].text)