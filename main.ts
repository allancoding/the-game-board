enum RadioMessage {
    message1 = 49434,
    startgame = 3438,
    sis = 4150,
    rock = 22024,
    pap = 30648,
    start = 56380
}
function maingame () {
    if (rock == true) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (pap == true) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (sis == true) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
}
function mainstartscr () {
    if (cacu == true) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (rps == true) {
        basic.showLeds(`
            # # # # #
            # # # # .
            . . . . .
            . # # . .
            . # # . .
            `)
    }
}
radio.onReceivedMessage(RadioMessage.startgame, function () {
    if (startgame2 == true) {
        startgame = false
        game2 = true
    }
})
function startsrc () {
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            . . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            . # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # . # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # . # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # . # #
            # # # # #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . .
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . .
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # .
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # . #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # . # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # . # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            . # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            . # # # #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            . . # . #
            # . . . #
            # # # # #
            `)
    }
}
function papdw () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.clearScreen()
}
function rockdw () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.clearScreen()
}
function sendrps () {
    if (rock == true) {
        radio.sendMessage(RadioMessage.rock)
    } else if (pap == true) {
        radio.sendMessage(RadioMessage.pap)
    } else if (sis == true) {
        radio.sendMessage(RadioMessage.sis)
    }
}
function maincacu () {
    if (cacul1 == true) {
        basic.showNumber(cacuvar1)
    } else if (cacul2 == true) {
        basic.showNumber(cacuvar2)
    } else if (cacul3 == true) {
        basic.showNumber(cacuvar3)
    } else if (cacul4 == true) {
        basic.showNumber(cacuvar4)
    } else if (cacul5 == true) {
        basic.showNumber(cacuvar5)
    }
    if (cacuop1 == true) {
        showcacuop()
    } else if (cacuop2 == true) {
        showcacuop()
    } else if (cacuop3 == true) {
        showcacuop()
    } else if (cacuop4 == true) {
        showcacuop()
    }
}
radio.onReceivedMessage(RadioMessage.start, function () {
    if (startscreen == true) {
        startgame = true
        startscreen = false
    }
    if (startgame2 == true) {
        radio.sendMessage(RadioMessage.startgame)
    }
})
function changecaucop1 () {
    if (C == true) {
        C = false
        C2 = true
    } else if (C2 == true) {
        C2 = false
        C3 = true
    } else if (C3 == true) {
        C3 = false
        Cx = true
    } else if (Cx == true) {
        Cx = false
        C3 = true
        if (cacuop1 == true) {
            C = true
        } else {
            C4 = true
        }
    } else if (C4 == true) {
        C4 = false
        C = true
    }
}
input.onButtonPressed(Button.A, function () {
    if (rungame == true) {
        if (rock == true) {
            rock = false
            sis = true
        } else if (pap == true) {
            pap = false
            rock = true
        } else if (sis == true) {
            sis = false
            pap = true
        }
    }
    if (mainstartscreen == true) {
        if (rps == true) {
            rps = false
            cacu = true
        } else if (cacu == true) {
            cacu = false
            rps = true
        }
    }
    if (startcacu == true) {
        if (cacul1 == true) {
            cacuvar1 += -1
        } else if (cacuop1 == true) {
            changecaucop12()
        } else if (cacul2 == true) {
            cacuvar2 += -1
        } else if (cacuop2 == true) {
            changecaucop12()
        } else if (cacul3 == true) {
            cacuvar3 += -1
        } else if (cacuop3 == true) {
            changecaucop12()
        } else if (cacul4 == true) {
            cacuvar4 += -1
        } else if (cacuop4 == true) {
            changecaucop12()
        } else if (cacul5 == true) {
        	
        }
        basic.clearScreen()
    }
})
function showcacuop () {
    if (C == true) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (C2 == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (C3 == true) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (Cx == true) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (C4 == true) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
}
radio.onReceivedMessage(RadioMessage.sis, function () {
    if (rungame2 == true) {
        loadingtic = false
        rungame2 = false
        if (rock == true) {
            rockdw()
            rocky = true
        } else if (pap == true) {
            papdw()
            papn = true
        } else if (sis == true) {
            sisdw()
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        }
        resetrps = true
    }
})
function loadtic () {
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        sendrps()
    }
}
function resetgamerps () {
    startscreen = false
    game2 = false
    startgame = true
    startgame2 = true
    rungame = false
    pap = false
    rock = false
    sis = false
    loadingtic = false
    typeit = randint(0, 2)
    papn = false
    papy = false
    rockn = false
    rocky = false
    sisn = false
    sisy = false
    resetrps = false
    rungame2 = false
    if (typeit == 0) {
        rock = true
    } else if (typeit == 1) {
        pap = true
    } else if (typeit == 2) {
        sis = true
    }
}
radio.onReceivedMessage(RadioMessage.pap, function () {
    if (rungame2 == true) {
        loadingtic = false
        rungame2 = false
        if (rock == true) {
            rockdw()
            rockn = true
        } else if (pap == true) {
            papdw()
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if (sis == true) {
            sisdw()
            sisy = true
        }
        resetrps = true
    }
})
input.onButtonPressed(Button.AB, function () {
    if (startscreen == true) {
        startscreen = false
        startgame = true
    } else if (startgame == true) {
        startgame2 = true
    }
    if (rungame == true) {
        startgame2 = false
        loadingtic = true
        rungame = false
        rungame2 = true
        sendrps()
    }
    if (resetrps == true) {
        basic.clearScreen()
        resetgamerps()
    }
    if (mainstartscreen == true) {
        mainstartscreen = false
        if (rps == true) {
            startscreen = true
        } else if (cacu == true) {
            startcacu = true
        }
    }
    if (startcacu == true) {
        if (cacul1 == true) {
            cacul11 = false
            cacul1 = false
            cacuop1 = true
        } else if (cacuop1 == true) {
        	
        } else if (cacul2 == true) {
        	
        } else if (cacuop2 == true) {
        	
        } else if (cacul3 == true) {
        	
        } else if (cacuop3 == true) {
        	
        } else if (cacul4 == true) {
        	
        } else if (cacuop4 == true) {
        	
        } else if (cacul5 == true) {
        	
        }
        if (cacul11 == true) {
            cacul1 = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (rungame == true) {
        if (rock == true) {
            rock = false
            pap = true
        } else if (pap == true) {
            pap = false
            sis = true
        } else if (sis == true) {
            sis = false
            rock = true
        }
    }
    if (mainstartscreen == true) {
        if (rps == true) {
            rps = false
            cacu = true
        } else if (cacu == true) {
            cacu = false
            rps = true
        }
    }
    if (startcacu == true) {
        if (cacul1 == true) {
            cacuvar1 += 1
        } else if (cacuop1 == true) {
            changecaucop1()
        } else if (cacul2 == true) {
            cacuvar2 += 1
        } else if (cacuop2 == true) {
            changecaucop1()
        } else if (cacul3 == true) {
            cacuvar3 += 1
        } else if (cacuop3 == true) {
            changecaucop1()
        } else if (cacul4 == true) {
            cacuvar4 += 1
        } else if (cacuop4 == true) {
            changecaucop1()
        } else if (cacul5 == true) {
        	
        }
        basic.clearScreen()
    }
})
radio.onReceivedMessage(RadioMessage.rock, function () {
    if (rungame2 == true) {
        loadingtic = false
        rungame2 = false
        if (rock == true) {
            rockdw()
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if (pap == true) {
            papdw()
            papy = true
        } else if (sis == true) {
            sisdw()
            sisn = true
        }
        resetrps = true
    }
})
function startg () {
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
function sisdw () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        # . # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        # . # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.clearScreen()
}
function changecaucop12 () {
    if (C == true) {
        if (cacuop1 == true) {
            Cx = true
        } else {
            C4 = true
        }
        C = false
    } else if (C2 == true) {
        C2 = false
        C = true
    } else if (C3 == true) {
        C3 = false
        C2 = true
    } else if (Cx == true) {
        Cx = false
        C3 = true
    } else if (C4 == true) {
        C4 = false
        C = true
    }
}
let C4 = false
let C3 = false
let C2 = false
let C = false
let Cx = false
let cacul11 = false
let cacuop4 = false
let cacuop3 = false
let cacuop2 = false
let cacuop1 = false
let cacul5 = false
let cacul4 = false
let cacul3 = false
let cacul2 = false
let cacul1 = false
let cacuvar5 = 0
let cacuvar4 = 0
let cacuvar3 = 0
let cacuvar2 = 0
let cacuvar1 = 0
let cacu = false
let rps = false
let rungame2 = false
let resetrps = false
let sisy = false
let sisn = false
let rocky = false
let rockn = false
let papy = false
let papn = false
let typeit = 0
let loadingtic = false
let sis = false
let rock = false
let pap = false
let rungame = false
let startcacu = false
let startgame2 = false
let startgame = false
let game2 = false
let mainstartscreen = false
let startscreen = false
let typeitg2 = false
radio.setTransmitPower(7)
radio.setGroup(190)
startscreen = false
mainstartscreen = true
game2 = false
startgame = false
startgame2 = false
startcacu = false
rungame = false
pap = false
rock = false
sis = false
loadingtic = false
typeit = randint(0, 2)
papn = false
papy = false
rockn = false
rocky = false
sisn = false
sisy = false
resetrps = false
rungame2 = false
rps = false
cacu = false
let maintypeit = randint(0, 1)
if (maintypeit == 0) {
    rps = true
} else if (maintypeit == 1) {
    cacu = true
}
if (typeit == 0) {
    rock = true
} else if (typeit == 1) {
    pap = true
} else if (typeit == 2) {
    sis = true
}
cacuvar1 = 0
cacuvar2 = 0
cacuvar3 = 0
cacuvar4 = 0
cacuvar5 = 0
cacul1 = false
cacul2 = false
cacul3 = false
cacul4 = false
cacul5 = false
cacuop1 = false
cacuop2 = false
cacuop3 = false
cacuop4 = false
cacul11 = true
Cx = false
C = true
C2 = false
C3 = false
C4 = false
basic.forever(function () {
    if (startscreen == true) {
        startsrc()
    }
    if (mainstartscreen == true) {
        mainstartscr()
    }
    if (startgame == true) {
        startg()
    }
    if (game2 == true) {
        basic.clearScreen()
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        rungame = true
        game2 = false
    }
    if (rungame == true) {
        maingame()
    }
    if (loadingtic == true) {
        loadtic()
    }
    if (papn == true) {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (papy == true) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (rockn == true) {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (rocky == true) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (sisn == true) {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (sisy == true) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (startcacu == true) {
        maincacu()
    }
})
