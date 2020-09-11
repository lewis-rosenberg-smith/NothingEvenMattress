
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Positions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Positions').insert([
        {id: 1, img_name:'The Heat Wave', position_name:'The Heat Wave', position_description:'Flat on the back spread eagled for maximum air flow', temperature:'', participants:'2', rating:'4', animal:'', img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 2, img_name:'The Octopus', position_name:'The Octopus', position_description:'Completely enveloping your sleeping partner with all of your limbs intertwined', temperature:'', participants:'2', rating:'1', animal:'', img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 3, img_name:'Insomniac', position_name:'Insomniac', position_description:'On your back or side browsing the internet on your phone while your partner soundly sleeps next to you	2', temperature:'', participants:'', rating:'', animal:'', img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 4, img_name:'The Cold War', position_name:'The Cold War', position_description:'On your back or side facing away from each other. Often with a blanket  or pillow between, while quietly feeling your anger.2', temperature:'', participants:'', rating:'', animal:'', img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 5, img_name:'The Hair Monster', position_name:'The Hair Monster', position_description:'Any position can become the hair monster when your face becomes enveloped by your partners hair.	2', temperature:'', participants:'', rating:'', animal:'', img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 6, img_name:'The Pervert', position_name:'The Pervert', position_description:'Snuggled up extremely close to your sleeping partner, performing a reacharound hoping they will wake up.	2', temperature:'', participants:'', rating:'', animal:'', img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 7, img_name:'BUTT-erfly', position_name:'BUTT-erfly', position_description:'Facing away from your partner to ensure not over heating, but maintaining a connection with your behinds.	2	5', temperature:'', participants:'', rating:'', animal:'', img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 8, img_name:'Pillow of Heaven', position_name:'Pillow of Heaven', position_description:'Snuggled up beside your partner with your head resting gently on their bosom, while they hold you in with their arm.', temperature:'', participants:'2', rating:'5', animal:'', img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 9, img_name:'Fetus', position_name:'Fetus', position_description:'Lying on your side with knees bent up in front of you and your arms bent with your hands on the same level with your face.', temperature:'', participants:'1', rating:'5', animal:'', img_url:'https://i.redd.it/179by4qpm6rx.jpg'},
        {id: 10, img_name:'Log', position_name:'Log', position_description:'On your side, completely straight with your arms underneath and on top of you.', temperature:'', participants:'1', rating:'2', animal:'', img_url:'https://i.redd.it/179by4qpm6rx.jpg'},
        {id: 11, img_name:'Yearner', position_name:'Yearner', position_description:'On your side reaching out for a non existent partner', temperature:'', participants:'1', rating:'2', animal:'', img_url:'https://i.redd.it/179by4qpm6rx.jpg'},
        {id: 12, img_name:'Soldier', position_name:'Soldier', position_description:'Flat on your back with your legs straight and arms by your side.', temperature:'1', participants:'4', rating:'', animal:'', img_url:'https://i.redd.it/179by4qpm6rx.jpg'},
        {id: 13, img_name:'Freefaller', position_name:'Freefaller', position_description:'Face down with legs splayed and arms up beside or above your head, sometimes hugging the pillow.', temperature:'', participants:'1', rating:'5', animal:'', img_url:'https://i.redd.it/179by4qpm6rx.jpg'},
        {id: 14, img_name:'Starfish', position_name:'Starfish', position_description:'Flat on your back with your arms and legs spread out wide.', temperature:'', participants:'1-2(if ya selfish) ', rating:'5', animal:'', img_url:'https://i.redd.it/179by4qpm6rx.jpg'},
        {id: 15, img_name:'Quoping', position_name:'Quoping', position_description:'Simultaneously on your back, side, and front with arms above and below you, with one leg spread out behind and the other foot being held by the lower hand.', temperature:'', participants:'1', rating:'1', animal:'', img_url:'https://i.redd.it/179by4qpm6rx.jpg'},
        {id: 16, img_name:'Baby Positions', position_name:'Baby Positions', position_description:'', temperature:'', participants:'', rating:'', animal:'', img_url:'https://i.pinimg.com/originals/5c/4d/83/5c4d83b8c037d12b7241930c29ba861d.jpg'},




        // {id: 1, img_name:'', position_name:'', position_description:'', temperature:'', participants:'', rating:'', animal:'', img_url:''},



      ]);
    });
};


// Name	Image URL	Description	Qty	Comfort	Companions						
		
// Baby Positions	https://i.pinimg.com/originals/5c/4d/83/5c4d83b8c037d12b7241930c29ba861d.jpg				
// The Faithful	https://i.pinimg.com/originals/bd/f8/b9/bdf8b96a18971b8c7f2cb9ad0a29afb1.jpg	Physically in any position with your trusty puuper keeping watch over you while you slumber.			
// The Knee Nuzzle	https://i.pinimg.com/originals/bd/f8/b9/bdf8b96a18971b8c7f2cb9ad0a29afb1.jpg	On the side with your knees bent, with your cat curled up in the space created preventing your legs from ever being straightened			
// The Donut Divider	https://i.pinimg.com/originals/bd/f8/b9/bdf8b96a18971b8c7f2cb9ad0a29afb1.jpg	Flat on your back with legs slightly spread, the space between occupied by a curled up critter.			
// The Wall	https://i.pinimg.com/originals/bd/f8/b9/bdf8b96a18971b8c7f2cb9ad0a29afb1.jpg	What better way to enjoy sleeping with your partner than to be seperated by mans best friend?			
// The Dog House	https://i.pinimg.com/originals/db/85/a0/db85a07601857082dab52840424de39d.jpg	Dutifully sleeping on the couch, because you know what you did			
// Donkey Kong	https://i.pinimg.com/originals/db/85/a0/db85a07601857082dab52840424de39d.jpg	Taking up what little space left afforded to you that has not been taken up by the spacehogging infant			
// The Neck Scarf	https://i.pinimg.com/originals/db/85/a0/db85a07601857082dab52840424de39d.jpg	Lying on your back with your infant dutifully keeping your neck warm. (Infant can be swapped out for a cat)			
// The Roundhouse Kick	https://i.pinimg.com/originals/db/85/a0/db85a07601857082dab52840424de39d.jpg	Don't you love the tiny extremeties of your precious little one? Well that's lucky because you get to sleep with a foot in the face.			
// The Astronaut	https://i.pinimg.com/originals/ee/b8/67/eeb867bedd70ed3b26ad283c2e87f081.jpg	Floating above the bed because "Screw Gravity"			
// The Princess	https://i.pinimg.com/originals/ee/b8/67/eeb867bedd70ed3b26ad283c2e87f081.jpg	There will never be enough mattresses, however even the deepest sleep can be interrupted by an errant pea			
// The Basketballer	https://i.pinimg.com/originals/ee/b8/67/eeb867bedd70ed3b26ad283c2e87f081.jpg	Unable to find a bed to contain your length, you spill gracefully over the ends.			
// The Boogie Man	https://i.pinimg.com/originals/ee/b8/67/eeb867bedd70ed3b26ad283c2e87f081.jpg	Lying in wait under the bed waiting for your partner to get in bed, so you can jump out and scare them			
// The Programmer	https://i.pinimg.com/originals/ee/b8/67/eeb867bedd70ed3b26ad283c2e87f081.jpg	Of course we all know programmers run on caffeine, but when the caffeine runs dry, a keyboard makes a wonderful pillow.			
// The Cowboy	https://cdn3.miragestudio7.com/wp-content/uploads/2007/10/architecture_comic_funny_architect_comics_architects4.jpg	A man of the west needs to be ready to go at all times, So boots and hat must remain on at all times.			
// The Skipper	https://cdn3.miragestudio7.com/wp-content/uploads/2007/10/architecture_comic_funny_architect_comics_architects4.jpg	Sleeping restfully in a hammock			
// The Prostitute	https://cdn3.miragestudio7.com/wp-content/uploads/2007/10/architecture_comic_funny_architect_comics_architects4.jpg	Lying under a "John". (Also called the Senator)			
// The Senator	https://cdn3.miragestudio7.com/wp-content/uploads/2007/10/architecture_comic_funny_architect_comics_architects4.jpg	Sweating and grunting on top of a lady of the night. (Also called the Prostitute)			
// Homeless	https://cdn3.miragestudio7.com/wp-content/uploads/2007/10/architecture_comic_funny_architect_comics_architects4.jpg	Devoid of a bed, you lie wherever you can.			
// The Prisoner	https://cdn3.miragestudio7.com/wp-content/uploads/2007/10/architecture_comic_funny_architect_comics_architects4.jpg	Three Hots and a cot more than make up for sharing a bunk bed as an adult surely.			
