import React, { useState } from 'react';
import DogCarousel from './DogCarousel';
import PartnerCarousel from './PartnerCarousel';
import ComingSoonDialog from './ComingSoonDialog';
export default function OurRescue({ color, type }) {
  const buttonClass = color === '#991B1E'
    ? 'bg-[#F9EDD2] hover:bg-[#991B1E] hover:text-[#F9EDD2] text-[#991B1E] border-[#991B1E]'
    : color === '#AF1E3C'
      ? 'bg-[#F9EDD2] hover:bg-[#AF1E3C] hover:text-[#F9EDD2] text-[#AF1E3C] border-[#AF1E3C]'
      : color === '#F08122'
        ? 'bg-[#F9EDD2] hover:bg-[#F08122] hover:text-[#F9EDD2] text-[#F08122] border-[#F08122]'
        : color === '#FAA627'
          ? 'bg-[#F9EDD2] hover:bg-[#FAA627] hover:text-[#F9EDD2] text-[#FAA627] border-[#FAA627]'
          : 'bg-[#F9EDD2] hover:bg-[#FAA627] hover:text-[#F9EDD2] text-[#FAA627] border-[#FAA627]';
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dogs = [
    {
      imageUrl: './images/dogs/An.png',
      name: 'An',
      subname: ['One fang', 'Loves treats', 'Silent ninja'],
      gender: 'male',
    },
    {
      imageUrl: './images/dogs/Beep.png',
      name: 'Beep',
      subname: ['White fur boy', 'Curious about his friends', 'Loves gentle cuddles'],
      gender: 'male',
    },
    {
      imageUrl: './images/dogs/Bunny.png',
      name: 'Bunny',
      subname: ['Hobby', 'Cautious stare', 'Loves hiding'],
      gender: 'female',
    },
    {
      imageUrl: './images/dogs/Coca.png',
      name: 'Coca',
      subname: ['Playful', "Mama Gấu's child", 'Loving and loyal'],
      gender: 'male',
    },
    {
      imageUrl: './images/dogs/Gau.png',
      name: 'Gấu',
      subname: ['Our security baby', 'Our security baby', 'Loves to play'],
      gender: 'female',
    },
    {
      imageUrl: './images/dogs/Hugo.png',
      name: 'Hugo',
      subname: ['Oppa', 'Beautiful black fur', 'Being invisible at night'],
      gender: 'male',
    },
    {
      imageUrl: './images/dogs/Jerry.png',
      name: 'Jerry',
      subname: ['The howling-cow', 'A bit Alpha', 'Laughs a lot'],
      gender: 'male',
    },
    {
      imageUrl: './images/dogs/Lulu.png',
      name: 'Lulu',
      subname: ['Island girl', 'Full chocolate fur', 'A momshie of 6 puppies'],
      gender: 'female',
    },
    {
      imageUrl: './images/dogs/MamaGau.png',
      name: 'Mama gấu',
      subname: ['Loyal and loving', 'Growly and barky', 'Snappish'],
      gender: 'female',
    },
    {
      imageUrl: './images/dogs/Muc.png',
      name: 'Mực',
      subname: ['Grey eyes', 'Shy boy', 'Introvert'],
      gender: 'male',
    },
    {
      imageUrl: './images/dogs/Pepsi.png',
      name: 'Pepsi',
      subname: ['Loves treats', "Another Mama Gấu's child", 'Loves chewing up things'],
      gender: 'male',
    },
    {
      imageUrl: './images/dogs/Soda.png',
      name: 'Soda',
      subname: ['Lovely face', "Also Mama Gấu's child", 'Loyal and cuti'],
      gender: 'male',
    },
    {
      imageUrl: './images/dogs/Milo.png',
      name: 'Milo',
      subname: ['Mailo or Meelo?', "Friendly", 'Hanging out at the couch'],
      gender: 'male',
    },
  ];
  const cats = [
    {
      imageUrl: './images/cats/Bob.png',
      name: 'Bob',
      subname: ['Diaper baby.', 'One broken leg.', 'Pro at stealing food!'],
      gender: '',
    },
    {
      imageUrl: './images/cats/La.png',
      name: 'La',
      subname: ['KOL.', 'Cute fat face.', 'Will sneak into your bag.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/Fa.png',
      name: 'Fa',
      subname: ['Faaaaaa.', "Lies on her back becauseshe thinks she's a dog.", 'Bites you after cuddling.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/4.Lula.png',
      name: 'Lula',
      subname: ['Smiley cat.', 'Half white, half tabby.', 'A real night owl.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/5.Lumi.png',
      name: 'Lumi',
      subname: ['Nhú nhi.', 'Short tail & wet eye.', 'Loves hiding in corners.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/6. Bắc.png',
      name: 'Bắc',
      subname: ['Dummy boy.', 'Has “tatoo” on both front legs.', 'Loves sleeping on the moon.'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/Taro.png',
      name: 'Taro',
      subname: ['Fluffy Ball.', 'Round face & Left ear piercing.', 'In her carton penthouse most of the time.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/8. Mai.png',
      name: 'Mai',
      subname: ['Phillipin girl.', 'Walks unsteadily.', 'Loves being cuddled.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/Bo.png',
      name: 'Bo',
      subname: ['Photogenic model', 'Super friendly', 'Leg disability '],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/10. Shin.png',
      name: 'Shin',
      subname: ['Shin chan.', 'Looks like Bo but orange.', 'Bites his tounge in while sleeping.'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/11. Nene.png',
      name: 'Nene',
      subname: ['Princes.', 'Will answer your call with her birdy voice.', 'Shoe rack is her favorite spot.'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/12. Noah.png',
      name: 'Noah',
      subname: ['Leggings pants.', 'Black and white fur.', 'Clingy when he want a pet!'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/13. Moon.png',
      name: 'Moon',
      subname: ['Mun.', 'A very tabby baby.', '“I hate boy cats!”'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/14.Vie.png',
      name: 'Vie',
      subname: ['Pole dancer.', 'A calico cat - mom of 4 kittens.', 'Being extra sometimes.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/15.Vivo.png',
      name: 'Vivo',
      subname: ['The orange cat.', 'Cute mouth.', 'Loves yapping!'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/16. Vivu.png',
      name: 'Vivu',
      subname: ['Introvert girl.', 'A smoll tabby cat.', 'Gently touches you when she want your food.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/17. Lilah.png',
      name: 'Lilah',
      subname: ['Super thief.', 'Big dots on her back that look like balls.', 'Sleeps next to your workplace.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/18.Thu.png',
      name: 'Thu',
      subname: ['Autumn.', 'Big head with a long body.', 'Eat, eat and eatttt!'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/19. Minnie.png',
      name: 'Minnie',
      subname: ['Mini.', 'Has mustache.', 'Yapping alot.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/20.Mica.png',
      name: 'Mica',
      subname: ['Charlot.', 'Nicer shape of mustache.', 'Enjoys playing with his sister.'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/21. Ronin.png',
      name: 'Ronin',
      subname: ['Melon.', 'Big muscle boy.', 'Act like a puppy.'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/22. Bobeo.png',
      name: 'Bobeo',
      subname: ['BoBeoooooo.', 'Nail painted. Slayyy~', 'Reacts chaotically when startled or scared.'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/23. Chanh.png',
      name: 'Chanh',
      subname: ['Sassy girl.', 'Loves cats that bigger than her.', 'Appears in places where customers order freeze drinks.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/Ổi 1.png',
      name: 'Ổi',
      subname: ['Pirena.', 'Wears white boots.', 'Chewing on a stuffed toy.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/25. Xoài.png',
      name: 'Xoài',
      subname: ['Mango.', 'Pretty calico girl.', 'Loves watching lizzards.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/26. Mochie.png',
      name: 'Mochie',
      subname: ['Mi Chô.', 'Wears a mask.', 'Loves playing with cats as same as her size.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/27.Happy.png',
      name: 'Happy',
      subname: ['Dummy Happy.', 'Gray fur with big eyes.', 'Loves making biscuits.'],
      gender: 'male',
    },
    {
      imageUrl: './images/cats/28. Scully.png',
      name: 'Scully',
      subname: ['Toothless.', 'Mysterious black fur.', 'Anti meow-cial.'],
      gender: 'female',
    },
    {
      imageUrl: './images/cats/29. Mulder.png',
      name: 'Mulder',
      subname: ['Mún Đơ.', 'Round face with slim body.', 'Bites you after you pet his head.'],
      gender: 'male',
    },
  ];
  return (
    <div className='bg-[#F9EDD2] py-8 md:px-2 lg:px-8'>
      <h1 className="text-3xl md:text-5xl mb-4 text-center" style={{
        color: color
      }}>OUR RESCUES {type === 'dog' ? 'DOG' : type === 'cat' ? 'CAT' : ''}</h1>
      {type === 'cat' ? null : <div>
        <div className="text-center  md:text-lg text-xs">
          {type === 'dog' || type === 'cat' ? null : <h2 className="text-2xl md:text-3xl text-[#F08122] font-semibold py-5">
            CANINE </h2>}
        </div>
        <DogCarousel backgroundImage="url('./images/Rectangle 128.png')" input={dogs} color={color}></DogCarousel>
        <div className='flex justify-center py-4'>
          <button className={`${buttonClass} md:w-52 border-2 border-solid py-2 px-6 rounded-full transition`}
            onClick={() => setIsDialogOpen(true)}>
            MORE DETAIL
          </button>
        </div>
      </div>}

      {type === 'dog' ? null : <div>
        {type === 'dog' || type === 'cat' ? null :
        <div className="text-center py-5 md:text-lg text-xs">
           <h2 className="text-2xl md:text-3xl text-[#F08122] font-semibold py-5">
            FELINE </h2>
        </div>}
        <DogCarousel backgroundImage="url('./images/MBackground.png')" input={cats} color={color}></DogCarousel>
        <div className='flex justify-center py-4'>
          <button className={`${buttonClass} md:w-52 border-2 border-solid py-2 px-6 rounded-full transition`}
            onClick={() => setIsDialogOpen(true)}>
            MORE DETAIL
          </button>
        </div>
      </div>}
      <ComingSoonDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>

  )
}
