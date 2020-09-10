
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, img_name:'The Swastika', position_name:'The Swastika', position_description:'Face down with arms and legs all pointing the same direction in a circle around the torso	3 max	3	Dachshund Friendly', temperature: , participants: , rating: , animal: , img_url:'https://img-9gag-fun.9cache.com/photo/aR7vddq_700bwp.webp'},
        {id: 2, img_name:'The Heat Wave', position_name:'The Heat Wave', position_description:'Flat on the back spread eagled for maximum air flow	2	4', temperature: , participants: , rating: , animal: , img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 3, img_name:'The Octopus', position_name:'The Octopus', position_description:'Completely enveloping your sleeping partner with all of your limbs intertwined	2	1', temperature: , participants: , rating: , animal: , img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 4, img_name:'Insomniac', position_name:'Insomniac', position_description:'On your back or side browsing the internet on your phone while your partner soundly sleeps next to you	2', temperature: , participants: , rating: , animal: , img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 5, img_name:'The Cold War', position_name:'The Cold War', position_description:'On your back or side facing away from each other. Often with a blanket  or pillow between, while quietly feeling your anger.2', temperature: , participants: , rating: , animal: , img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 6, img_name:'The Hair Monster', position_name:'The Hair Monster', position_description:'Any position can become the hair monster when your face becomes enveloped by your partners hair.	2', temperature: , participants: , rating: , animal: , img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},
        {id: 7, img_name:'The Pervert', position_name:'The Pervert', position_description:'Snuggled up extremely close to your sleeping partner, performing a reacharound hoping they will wake up.	2', temperature: , participants: , rating: , animal: , img_url:'https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg'},



        // {id: 1, img_name:'', position_name:'', position_description:'', temperature: , participants: , rating: , animal: , img_url:''},
      ]);
    });
};


// Name	Image URL	Description	Qty	Comfort	Companions			
// BUTT-erfly	https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg	Facing away from your partner to ensure not over heating, but maintaining a connection with your behinds.	2	5	
// Pillow of Heaven	https://i.pinimg.com/originals/9f/4e/7a/9f4e7a5544c3b5193098679cf91c95ff.jpg	Snuggled up beside your partner with your head resting gently on their bosom, while they hold you in with their arm.	2	5	
// Fetus	https://i.redd.it/179by4qpm6rx.jpg	Lying on your side with knees bent up in front of you and your arms bent with your hands on the same level with your face.	1	5	
// Log	https://i.redd.it/179by4qpm6rx.jpg	On your side, completely straight with your arms underneath and on top of you.	1	1	
// Yearner	https://i.redd.it/179by4qpm6rx.jpg	On your side reaching out for a non existent partner	1	3	
// Soldier	https://i.redd.it/179by4qpm6rx.jpg	Flat on your back with your legs straight and arms by your side.	1	4	
// Freefaller	https://i.redd.it/179by4qpm6rx.jpg	Face down with legs splayed and arms up beside or above your head, sometimes hugging the pillow.	1		
// Starfish	https://i.redd.it/179by4qpm6rx.jpg	Flat on your back with your arms and legs spread out wide.	1		
// Quoping	https://i.redd.it/179by4qpm6rx.jpg	Simultaneously on your back, side, and front with arms above and below you, with one leg spread out behind and the other foot being held by the lower hand.	1	1	
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
