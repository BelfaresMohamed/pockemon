class Pockemone{
    constructor(nom , initiative , pv ,attack ){
        this.nom = nom ,
        this.initiative = initiative , 
        this.pv = pv;
        this.attack = attack;
    }
}


class Attacks{
    constructor(nom , damage , number){
        this.nom = nom;
        this.damage = damage;
        this.number = number;
    }
}

let thunderbolt = new Attacks("thunderbolt",90,3);
let volt_tackle = new Attacks("volt_tackle",120,6);
let quick_attack = new Attacks("quick_attack",40,2);
    let thunder = new Attacks("thunder",100,2);
    let iron_tail = new Attacks("iron_tail",60,3);
    let shock_wove = new Attacks("shock_wove",110,3);
    let thunder_wove = new Attacks("thunder_wove",0,6);
    let singnal_beam = new Attacks("singnal_beam",75,3);

let attacks = [thunderbolt,volt_tackle,quick_attack,thunder,iron_tail,shock_wove,thunder_wove,singnal_beam];
let attkc1 = [thunder,volt_tackle,quick_attack,thunder_wove]
let attk2 = [thunder,iron_tail,shock_wove,singnal_beam]
let pickachu = new Pockemone("pickachu",90,550,attkc1)
let voltali = new Pockemone("voltali",100,550,attk2)

let attack1 = document.querySelector("#alt1")
let attack2 = document.querySelector("#alt2")
let attack3 = document.querySelector("#alt3")
let attack4 = document.querySelector("#alt4")

function combat() {
    while(pickachu.pv >0 && voltali.pv>0){
        if(pickachu.initiative > voltali.initiative){
            attack1.addEventListener("click",()=>{
              let rondom = attkc1[0];
              voltali.pv -= rondom;
              console.log("tga3d");

            })
        }
    }
}


combat();