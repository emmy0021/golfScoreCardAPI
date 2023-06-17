# golfScoreCardAPI

## TODO
reach out to golf youtubers see if they would be interested in creating a gamemode and promoting it
### Feature
- [x] When player added start in edit mode
- [x] when you click 10-18 holes button then the scores should be updated
- [ ] Website can receive url arguments or input to initialize player names and scores
  - Can be used to save a session scores without logging in
- [ ] google sign in to save previous scores
- [ ] export scores to email or text
- [ ] Help button to help navigate page
- [ ] Enable private room communication with other palyers
  - [x] Basic websocket chat for users to send messages
  - [ ] Allow user to create private group/rooms so not all users are in same chat/golf game
  - [ ] Allow user to send scores over websocket chat so we can update all scores for other players real time
  - [ ] Make the chat UI look prettier also allow user to maximize and minimize chat
  - [ ] allow users to send private messages to players within the chat (optional)
- [ ] Indicator to show which player is T-ing off first
  - [ ] Enable websocket chat to support real time update to rest of players
- [ ] Indicator to show which hole we are on(only room creator can control this)
  - [ ] Enable websocket chat to support real time update to rest of players
- [ ] Add a timer of currently elapsed time that can keep track of your pace per hole and such things
- [ ] Enable location services to keep track of how far you shot and give you statistics
  - [ ] storing the statistics in google account we can show you how you did compared to last run or how you improved over time and show distances
- [ ] Golf courses should be able to easily onboard their golf course complete with par info and maps to where the hole is
- [ ] Find a way to implement a payment method so that users get charged like $3 per month to use it
- [ ] Create different fun gamemodes like a beer drinking gamemode or others
- [ ] Add a way to increment or decrement a score so you can use it as a clicker for couting scores
### bug fix
- [ ] IMPORTANT: fix cookies
- [ ] When player name in edit mode and you use slider you cannot use edit mode on that player again
- [x] When you click 10-18 holes button and sticky scores is enabled the first row's sticky score disappears
- [ ] minor: When you click 10-18 holes button the size of first column changes
- [x] When you change a score you should also update scores array so that when you switch holes the scores stay present


## Future goals
- Create an IOS app that allows you to use it on your phone and on your apple watch too for counting strokes
