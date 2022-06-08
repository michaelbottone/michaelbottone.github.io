let userName = ''

const yourName = () => {
  userName = prompt('What is your name?')
  if (userName === '') {
    alert("what ain't no name I ever hear of say what again")
    yourName()
  } else {
    return userName
  }
}
yourName()

let goToPark = confirm(
  `Your friends arrive at your house, they want to go to the carnival, do you go with them?`
)

let playAgain = () => {
  let again = confirm('Do you want to play again?')
  if (again) {
    playGame()
  } else {
    alert(`Ok ${userName}, bye!`)
  }
}
let activity = ''
let descActivity = ''
const playGame = () => {
  if (goToPark) {
    alert(
      "Mooommmmm I'm going to the carnival with some friends, I'll be home later..."
    )

    let friendsName = ''
    const friendsList = () => {
      friendsName = prompt(
        '*Mom yells from the kitchen* \nWait! Who are you going with? \n(enter a list of names seperated by commas)'
      ).split(',')

      if (friendsName == '') {
        alert(`you can\'t go alone ${userName}, tell me who you're going with!`)
        friendsList()
      } else if (friendsName.length > 3) {
        alert(`you can\'t fit that many people in your car!, try again!`)
        friendsList()
      } else {
        alert('have fun!')
      }
    }
    //account for null answer above

    friendsList()

    alert(`OHH EMMM GEEE ${userName}, we are *like* so glad you are coming!`)

    const firstActivity = () => {
      activity = prompt(
        `OMG, we're finally here! I'm so excited! says ${friendsName[0]} from the front seat. \nWhat do you want to do first? games, food, or rides?`
      )

      switch (activity) {
        case 'games':
          alert(
            `ew ${userName} who likes those kiddy games, we're here to meet boys, and they like rides. \n\nDitched by your friends, you can finally do what you want to do. lets go play ${activity}!`
          )
          descActivity = 'play the games'
          break
        case 'rides':
          alert(
            `Sure ${userName} you go do that, we'll be over at the games, making the boys to win us some stuffed animals \n\nDitched by your friends, you can finally do what you want to do. lets go ride the ride the ${activity}!`
          )
          descActivity = 'ride the rides'
          break
        case 'food':
          alert(
            `ok, ${userName} you do that, but we'll be at the rides, where the boys are. \n\nDitched by your friends, you can finally do what you want to do. lets go ${activity} funnel cake!`
          )
          descActivity = 'eat the food'
          break
        default:
          alert(
            `IDK what that is, there you go, always wantin' to be different.`
          )
          firstActivity()
          break
      }
      let friendsCount = friendsName.length
      switch (friendsCount) {
        case 1:
          {
            alert(
              `You head over to ${descActivity}, but when you get there, you see that ${friendsName[0]} is impaled on the fence post outside of the ${activity} with a note pinned to their chest. You look closely \"You\'re Next\" it reads. You run screaming from the park, however, you remember that ${friendsName[0]} drove so you\'re stuck! you head back into the park to wait for the police. \nWhile you're waiting you decide to checkout the funhouse. You step up to the barker and hand him a ticket, the barker steps aside \"be my guest\" he says.`
            )
            let funHouse = confirm(
              "You peer into the entrance, but suddenly you're unsure that this is the right choice, do you proceed?"
            )
            if (funHouse) {
              alert(
                "You step inside, the first thing that hits you is the smell. \"I didn't know funhouses were supposed to smell bad' you say to yourself... you proceed forward, but the floor suddenly rotates under your feet making you loose your balance and stumble. suddenly you're turned around, \"which way did I come in\" you think to yourself there are mirrors in every direction and that smell, oof that smell, it's getting stronger. "
              )
              let screamOrRun = prompt(
                "You're panicking, do you decide to scream or run?"
              )
              if (screamOrRun == 'scream') {
                alert(
                  'You scream for help, but no one can hear you over the demented, off-key carnival music. The screaming only draws the attention of the murerous carnie. He fires up his chainsaw and dispatches you quickly, straight down the center'
                )
              } else if (screamOrRun == 'run') {
                alert(
                  'You run, but you have no idea which way is out. you hit the hall of mirrors, and *thud* you run straight into a mirror. Disoriented you see the barker from out front, thank god you think to yourself. He extends a hand outward to help you up, but instead, slices your arm with a discrete razor blade, laughing maniacly. He stands over you while you clutch your fresh wound, watching you slowly lose consiousness.'
                )
              } else {
                alert(
                  `You freeze in panic. Just then the lights come up and your entire class is pointing and laughing. It was all an elaborate prank! In fact, there\'s ${friendsName[0]} with fake blood all over himself, having a laugh at your expense!`
                )
              }
            } else {
              alert(
                "Perhaps a wise choice after the previous events. you sit at the food court waiting for the police to arrive, however, you just can't shake the feeling that something inside that funhouse is calling for you"
              )
            }
          }
          break
        case 2:
          {
            alert(
              `You head over to ${descActivity}, but when you get there, you see that ${friendsName[0]} is impaled on the fence post outside of the ${activity} with a note pinned to their chest. You look closely \"${friendsName[1]} is next\" it reads. You run screaming to find ${friendsName[1]}`
            )

            let funHouse = confirm(
              `You catch up to ${friendsName[1]}, out of breath you panickedly try to explain what you just saw. \"slow down, slow down\" says ${friendsName[1]}, you explain yourself once again, this time with more composure; you state to ${friendsName[1]} that you saw the murderer run into the fun house. \n\"let\'s go!\" says ${friendsName[1]}, they were always the advenerous one of the group! \nDo you follow?`
            )
            if (funHouse) {
              alert(
                `You step inside, the first thing that hits you is the smell. \"I didn't know funhouses were supposed to smell bad' you say to ${friendsName[1]}... you proceed forward, but the floor suddenly rotates under your feet making you loose your balance and stumble. suddenly you're turned around and ${friendsName[1]} is nowhere to be found. \"which way did I come in\" you think to yourself there are mirrors in every direction and that smell, oof that smell, it's getting stronger. `
              )
              let screamOrRun = prompt(
                `You're panicking, do you decide to scream for ${friendsName[1]} or run?`
              )
              if (screamOrRun == 'scream') {
                alert(
                  `You scream for help, but ${friendsName[1]} can\'t hear you over the demented, off-key carnival music. The screaming only draws the attention of the murerous carnie. You hear a chainsaw start in the distance`
                )
                let chainsawAction = prompt('run or hide?')
                if (chainsawAction === 'run') {
                  alert(
                    `you run, but you can\'t seem to get anywhere. It\'s like you\'re running in marshmellow. \njust then you identify this feeling \"I\'m in a dream\" you realize. You wake up to your alarm clock beeping, and think to yourself \"school stinks, but at least I'm not being chased by a chainsaw\"`
                  )
                } else {
                  alert(
                    `you slip into a door marked \"private\" you bump into ${friendsName[1]}, who is also hiding in the mechanical room. \"SHHH\" ${friendsName[1]} says, ironically quite loudly. \n chainsaw carnie must\'ve heard the obnoxiously loud shush, as just then the blade rips through the door, bisecting ${friendsName[1]}\'s throat. The door flings open and the carnie cleavs you with an ax. You\'re consious just long enough to see him proudly wipe his hands as if to say \"job well done\"`
                  )
                }
              } else if (screamOrRun == 'run') {
                alert(
                  `You run, but you have no idea which way is out. you hit the hall of mirrors, and *thud* you run straight into a mirror. Disoriented you see ${friendsName[1]}, thank god you think to yourself. Just then ${friendsName[1]} extends a hand outward to help you up, but instead, slices your arm with a razor blade, laughing maniacly. \"it was I who killed ${friendsName[0]} said ${friendsName[1]} they stands over you while you clutch your fresh wound, watching you slowly lose consiousness.`
                )
              } else {
                alert(
                  'You freeze in panic. like a deer in headlights you stand helpless as the carnie butchers you with a hatchet'
                )
              }
            } else {
              alert(
                `Perhaps a wise choice after tonights excitement. you sit at the food court waiting for the police to arrive, however, you just can't shake the feeling that something inside that funhouse is calling for you, the police arrive and take your statement, but you never see ${friendsName[1]} again.`
              )
            }
          }
          break
        default:
          {
            alert(
              `You head over to ${descActivity}, but when you get there, you see that ${friendsName[0]} is impaled on the fence post outside of the ${activity} with a note pinned to their chest. You look closely \"you\'re next\" it reads. You run screaming to call the police`
            )

            let friendsNum = prompt(
              'The police arrive. \nHow many friends did you say you came here with today? Says the push broom mustachiod police man'
            )
            alert(
              `${friendsNum} you say? well, we have one here on the fence post, so what happened to the other ${
                friendsNum - 1
              }?`
            )
            let excuse = prompt('well? what happened?')
            if (excuse) {
              alert(
                `Interesting you should say that ${userName}, cuz from where I'm sitting it sure looks a lot like you\'re the one with motive, means, and opportunity. Stand up, you're under arrest for the murder of your ${friendsNum} friends`
              )
            }
          }
          break
      }
    }
    firstActivity()
  } else {
    alert(`You are no fun! see ya next time! *NOT*`)
  }
  playAgain()
}
playGame()
