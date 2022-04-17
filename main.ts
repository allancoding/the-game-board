enum RadioMessage {
    startgame = 3438,
    sis = 4150,
    rock = 22024,
    pap = 30648,
    message1 = 49434,
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
    } else if (pingpong == true) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            . # # . .
            `)
    }
}
// startgame
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
// start
radio.onReceivedMessage(RadioMessage.start, function () {
    if (startscreen == true) {
        startgame = true
        startscreen = false
    }
    if (startgame2 == true) {
        radio.sendMessage(RadioMessage.startgame)
    }
})
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
            pingpong = true
        } else if (pingpong == true) {
            pingpong = false
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
            resetcacu()
        } else if (cacul5 == true) {
            resetcacu()
        }
        basic.clearScreen()
    }
    if (startpingpong == true) {
        if (bar_x > 0) {
            led.unplot(bar_x + 1, 4)
            bar_x = bar_x - 1
            led.plot(bar_x, 4)
        }
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
        Cx = true
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
        } else if (pingpong == true) {
            startpingpong = true
        }
    }
    if (startcacu == true) {
        if (cacul1 == true) {
            cacul11 = false
            cacul1 = false
            cacuop1 = true
        } else if (cacuop1 == true) {
            cacuop1 = false
            cacuop2 = false
            cacul2 = true
        } else if (cacul2 == true) {
            cacul2 = false
            cacuop2 = true
            if (C == true) {
                cacuvar2 = cacuvar1 + cacuvar2
            } else if (C2 == true) {
                cacuvar2 = cacuvar1 - cacuvar2
            } else if (C3 == true) {
                cacuvar2 = cacuvar1 / cacuvar2
            } else if (Cx == true) {
                cacuvar2 = cacuvar1 * cacuvar2
            }
            Cx = false
            C = false
            C2 = false
            C3 = false
            C4 = true
        } else if (cacuop2 == true) {
            if (C4 == true) {
                cacuvar5 = cacuvar2
                cacul5 = true
            } else {
                cacul3 = true
            }
            cacuop2 = false
        } else if (cacul3 == true) {
            cacul3 = false
            if (C == true) {
                cacuvar3 = cacuvar2 + cacuvar3
            } else if (C2 == true) {
                cacuvar3 = cacuvar2 - cacuvar3
            } else if (C3 == true) {
                cacuvar3 = cacuvar2 / cacuvar3
            } else if (Cx == true) {
                cacuvar3 = cacuvar2 * cacuvar3
            }
            Cx = false
            C = false
            C2 = false
            C3 = false
            C4 = true
            cacuop3 = true
        } else if (cacuop3 == true) {
            if (C4 == true) {
                cacuvar5 = cacuvar3
                cacul5 = true
            } else {
                cacul4 = true
            }
            cacuop3 = false
        } else if (cacul4 == true) {
            if (C == true) {
                cacuvar4 = cacuvar3 + cacuvar4
            } else if (C2 == true) {
                cacuvar4 = cacuvar3 - cacuvar4
            } else if (C3 == true) {
                cacuvar4 = cacuvar3 / cacuvar4
            } else if (Cx == true) {
                cacuvar4 = cacuvar3 * cacuvar4
            }
            C = false
            C2 = false
            C3 = false
            Cx = false
            C4 = true
            cacul4 = false
            cacuop4 = true
        } else if (cacuop4 == true) {
            cacuop4 = false
            cacuvar5 = cacuvar4
            cacul5 = true
        } else if (cacul5 == true) {
            resetcacu()
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
            pingpong = true
        } else if (cacu == true) {
            cacu = false
            rps = true
        } else if (pingpong == true) {
            pingpong = false
            cacu = true
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
            resetcacu()
        } else if (cacul5 == true) {
            resetcacu()
        }
        basic.clearScreen()
    }
    if (startpingpong == true) {
        if (bar_x < 3) {
            led.unplot(bar_x, 4)
            bar_x = bar_x + 1
            led.plot(bar_x + 1, 4)
        }
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
function resetcacu () {
    basic.clearScreen()
    startcacu = true
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
}
function pingpongg () {
    point = 0
    interval = 500
    interval_step = 10
    ball_x = 3
    ball_y = 4
    ball_dx = -1
    ball_dy = -1
    bar_x = 0
    led.plot(ball_x, ball_y)
    led.plot(bar_x, 4)
    led.plot(bar_x + 1, 4)
    in_game = true
    while (in_game) {
        if (ball_x + ball_dx > 4) {
            ball_dx = ball_dx * -1
        } else if (ball_x + ball_dx < 0) {
            ball_dx = ball_dx * -1
        }
        if (ball_y + ball_dy < 0) {
            ball_dy = ball_dy * -1
        } else if (ball_y + ball_dy > 3) {
            if (led.point(ball_x + ball_dx, ball_y + ball_dy)) {
                ball_dy = ball_dy * -1
                point = point + 1
                if (interval - interval_step >= 0) {
                    interval = interval - interval_step
                }
            } else {
                in_game = false
            }
        }
        if (in_game) {
            led.plot(ball_x + ball_dx, ball_y + ball_dy)
            led.unplot(ball_x, ball_y)
            ball_x = ball_x + ball_dx
            ball_y = ball_y + ball_dy
            basic.pause(interval)
        } else {
            game.setScore(point)
            game.gameOver()
        }
    }
}
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
let in_game = false
let ball_dy = 0
let ball_dx = 0
let ball_y = 0
let ball_x = 0
let interval_step = 0
let interval = 0
let point = 0
let bar_x = 0
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
let startpingpong = false
let pingpong = false
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
pingpong = false
startpingpong = false
let maintypeit = randint(0, 2)
if (maintypeit == 0) {
    rps = true
} else if (maintypeit == 1) {
    cacu = true
} else if (maintypeit == 2) {
    pingpong = true
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
    if (startpingpong == true) {
        basic.clearScreen()
        pingpongg()
    }
})
