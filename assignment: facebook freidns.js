var facebookProfile = {
  name: ("afif"),
  friends: (50),
  messages:["messages one two", "three four", "five", "six"],

  postMessage: function(msg){
    facebookProfile.messages.push("teeeest")
  },
  deleteMessage: function(msg){
    facebookProfile.messages.splice(msg, 1)
  },
  addFriend: function(){
    facebookProfile.friends = facebookProfile.friends + 1
  },
  removeFriend: function(){
    facebookProfile.friends = facebookProfile.friends - 1
  }
}
