
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Positions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Positions').insert([
        {id: 1, img_name:'The Connor', position_name:'The Connor', position_description:'for only the most hansom and bendy', temperature:'', participants:'2', rating:'0', animal:'cat', img_url:'/imgs/connor.png'},
        {id: 2, img_name:'The Back In a Mo', position_name:'The Back In a Mo', position_description:'for that friend that lift mid party', temperature:'', participants:'2', rating:'1', animal:'Octopus', img_url:'/imgs/backinamo.png'},
        {id: 3, img_name:'Crash Lander', position_name:'Crash Lander', position_description:'dont know looks cool tho', temperature:'', participants:'1', rating:'2', animal:'cat', img_url:'/imgs/crashlander.png'},
        {id: 4, img_name:'The Cold War', position_name:'The Cold War', position_description:'On your back or side facing away from each other. Often with a blanket  or pillow between, while quietly feeling your anger.2', temperature:'', participants:'', rating:'', animal:'cat', img_url:'/imgs/camoflage.png'},
        {id: 5, img_name:'The Dabber', position_name:'The Dabber', position_description:'for the coolest of dudes', temperature:'', participants:'2', rating:'2', animal:'cat', img_url:'/imgs/dabber.png'},
        {id: 6, img_name:'Donkey Kong', position_name:'Donkey Kong', position_description:'can you get the high score?', temperature:'', participants:'3', rating:'10000', animal:'cat', img_url:'/imgs/donkeykong.png'},
        {id: 7, img_name:'Down for the count', position_name:'Down for the count', position_description:'Basic AF', temperature:'', participants:'1', rating:'4', animal:'cat', img_url:'/imgs/downforcount.png'},
        {id: 8, img_name:'Force Field', position_name:'Force Field', position_description:'Look at this cutie!', temperature:'', participants:'', rating:'10', animal:'', img_url:'/imgs/forcefield.png'},
        {id: 9, img_name:'Fetus', position_name:'Fetus', position_description:'Lying on your side with knees bent up in front of you and your arms bent with your hands on the same level with your face.', temperature:'', participants:'1', rating:'5', animal:'cat', img_url:'/imgs/Fetus.png'},
        {id: 10, img_name:'Log', position_name:'Log', position_description:'On your side, completely straight with your arms underneath and on top of you.', temperature:'', participants:'1', rating:'2', animal:'cat', img_url:'/imgs/Log.png'},
        {id: 11, img_name:'Yearner', position_name:'Yearner', position_description:'On your side reaching out for a non existent partner', temperature:'', participants:'1', rating:'2', animal:'cat', img_url:'/imgs/Yearner.png'},
        {id: 12, img_name:'Soldier', position_name:'Soldier', position_description:'Flat on your back with your legs straight and arms by your side.', temperature:'', participants:'1', rating:'4', animal:'', img_url:'/imgs/Soldier.png'},
        {id: 13, img_name:'Joey', position_name:'Joey', position_description:'How you are you madem', temperature:'', participants:'1', rating:'5', animal:'', img_url:'/imgs/joey.png'},
        {id: 14, img_name:'Starfish', position_name:'Starfish', position_description:'Flat on your back with your arms and legs spread out wide.', temperature:'', participants:'1', rating:'5', animal:'', img_url:'/imgs/Starfish.png'},
        {id: 15, img_name:'Quoping', position_name:'Quoping', position_description:'Simultaneously on your back, side, and front with arms above and below you, with one leg spread out behind and the other foot being held by the lower hand.', temperature:'', participants:'1', rating:'1', animal:'cat', img_url:'/imgs/Qwoping.png'},
        {id: 16, img_name:'lewis', position_name:'lewis', position_description:'hElLo I knOw YoU dOnT lIkE tHIs', temperature:'', participants:'1', rating:'10', animal:'cat', img_url:'/imgs/lewis.png'},




        // {id: 1, img_name:'', position_name:'', position_description:'', temperature:'', participants:'', rating:'', animal:'', img_url:''},



      ]);
    });
};


// Name	Image URL	Description	Qty	Comfort	Companions													
// The Knee Nuzzle	../	On the side with your knees bent, with your cat curled up in the space created preventing your legs from ever being straightened			
// The Donut Divider	../	Flat on your back with legs slightly spread, the space between occupied by a curled up critter.			
// The Wall	../	What better way to enjoy sleeping with your partner than to be seperated by mans best friend?			
// The Dog House	../	Dutifully sleeping on the couch, because you know what you did			
// Donkey Kong	../	Taking up what little space left afforded to you that has not been taken up by the spacehogging infant			
// The Neck Scarf	../	Lying on your back with your infant dutifully keeping your neck warm. (Infant can be swapped out for a cat)			
// The Roundhouse Kick	../	Don't you love the tiny extremeties of your precious little one? Well that's lucky because you get to sleep with a foot in the face.			
// The Astronaut	../	Floating above the bed because "Screw Gravity"			
// The Princess	../	There will never be enough mattresses, however even the deepest sleep can be interrupted by an errant pea			
// The Basketballer	../	Unable to find a bed to contain your length, you spill gracefully over the ends.			
// The Boogie Man	../	Lying in wait under the bed waiting for your partner to get in bed, so you can jump out and scare them			
// The Programmer	../	Of course we all know programmers run on caffeine, but when the caffeine runs dry, a keyboard makes a wonderful pillow.			
// The Cowboy	../.jpg	A man of the west needs to be ready to go at all times, So boots and hat must remain on at all times.			
// The Skipper	../.jpg	Sleeping restfully in a hammock			
// The Prostitute	../.jpg	Lying under a "John". (Also called the Senator)			
// The Senator	../.jpg	Sweating and grunting on top of a lady of the night. (Also called the Prostitute)			
// Homeless	../.jpg	Devoid of a bed, you lie wherever you can.			
// The Prisoner	../.jpg	Three Hots and a cot more than make up for sharing a bunk bed as an adult surely.			
