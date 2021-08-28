class Form{
    constructor(){
       this.title = createElement('h2')
       this.input = createInput("Enter ur name")
       this.button = createButton("PLAY");
       this.greeting = createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide();
    }

    display(){
        
        this.title.position(displayWidth/2-50,0)
        this.title.html("CAR RACING GAME")

       
        this.input.position(displayWidth/2-40,displayHeight/2-80);

        
        this.button.position(displayWidth/2+30,displayHeight/2);

        this. button.mousePressed( ()=>{//arrow function is used to bind the function to the rrot class object rather than the calling object
            this.input.hide()
            this.button.hide()
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;

            player.update()
            player.updateCount(playerCount)

            
            this.greeting.position(displayWidth/2-70,displayHeight/4);
            this.greeting.html("Hello "+player.name)


        })
    }
}