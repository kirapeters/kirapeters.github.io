import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Portrait from "./Portrait";
import FadeTextSlider from "./FadeTextSlider";
import kiraPortrait from "../assets/kira-portrait.png";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className="portraitWrapper">
          <Portrait src={kiraPortrait} alt="Kira Peter's face" />
          <FadeTextSlider
            slides={[
              { text: "Hi there!" },
              { text: "My name is Kira" },
              { text: "Scroll down to learn a little about me!" },
            ]}
          />
        </div>
          <h1>Introduction</h1>
          <p>
            Hello! My name is Kira and I'm a software engineer. I earned my
            bachelor's degree in Software Engineering at BYU-Idaho in June 2021.
            I've worked at FamilySearch, served as a missionary, and work on{" "}
            <a href="https://www.estudioguitar.com">this website</a> on the
            side!
          </p>
          <p>
            When I'm not coding, you can find me practicing the piano or
            painting for fun!
          </p>

          <p>If you want to learn more about what I am learning and doing, check out my <Link to="blog">✨Blog✨</Link>!</p>

          <h1>
            Enjoy some <a href="http://www.catipsum.com/index.php">catipsum</a>
          </h1>
          <small>{"<just for fun>"}</small>
          <p>
            Destroy couch howl uncontrollably for no reason, yet man running
            from cops stops to pet cats, goes to jail jump around on couch, meow
            constantly until given food, . Cccaaattttsss your pillow is now my
            pet bed yet rub face on everything see brother cat receive pets,
            attack out of jealousy fight an alligator and win. More napping,
            more napping all the napping is exhausting allways wanting food.
            Hiss and stare at nothing then run suddenly away find empty spot in
            cupboard and sleep all day, for there's a forty year old lady there
            let us feast. Is good you understand your place in my world woops
            poop hanging from butt must get rid run run around house drag poop
            on floor maybe it comes off woops left brown marks on floor human
            slave clean lick butt now making bread on the bathrobe where is it?
            i saw that bird i need to bring it home to mommy squirrel! so stuff
            and things or kitty power so run off table persian cat jump eat
            fish. Disappear for four days and return home with an expensive
            injury; bite the vet hell is other people and use lap as chair.
            Kitty stand in front of the computer screen, morning beauty routine
            of licking self mew meow meow you are my owner so here is a dead
            bird so stare at wall turn and meow stare at wall some more meow
            again continue staring .
          </p>

          <p>
            Howl on top of tall thing munch, munch, chomp, chomp, when owners
            are asleep, cry for no apparent reason all of a sudden cat goes
            crazy. Sit in window and stare oooh, a bird, yum hide when guests
            come over hunt anything, meow to be let out but hack up furballs
            meowing non stop for food. Sees bird in air, breaks into cage and
            attacks creature. Taco cat backwards spells taco cat love and coo
            around boyfriend who purrs and makes the perfect moonlight eyes so i
            can purr and swat the glittery gleaming yarn to him (the yarn is
            from a $125 sweater) so cough yet pretend not to be evil i love cats
            i am one wake up scratch humans leg for food then purr then i have a
            and relax. Proudly present butt to human wake up wander around the
            house making large amounts of noise jump on top of your human's bed
            and fall asleep again, cats woo. do not try to mix old food with new
            one to fool me! sit on human they not getting up ever. Toy mouse
            squeak roll over flex claws on the human's belly and purr like a
            lawnmower somehow manage to catch a bird but have no idea what to do
            next, so play with it until it dies of shock. Plop down in the
            middle where everybody walks meowing non stop for food paw at your
            fat belly kitty time. Do doodoo in the litter-box, clickityclack on
            the piano, be frumpygrumpy eats owners hair then claws head. Leave
            hair everywhere. Eat an easter feather as if it were a bird then
            burp victoriously, but tender groom yourself 4 hours - checked, have
            your beauty sleep 18 hours - checked, be fabulous for the rest of
            the day - checked but meow meow pee in shoe. Rub face on everything
            try to hold own back foot to clean it but foot reflexively kicks you
            in face, go into a rage and bite own foot, hard eat the rubberband
            scratch so owner bleeds scratch the furniture, the best thing in the
            universe is a cardboard box.
          </p>

          <p>
            Swat turds around the house lick the curtain just to be annoying,
            put butt in owner's face or bite off human's toes. Bathe private
            parts with tongue then lick owner's face mew mew and jump around on
            couch, meow constantly until given food, attempt to leap between
            furniture but woefully miscalibrate and bellyflop onto the floor;
            what's your problem? i meant to do that now i shall wash myself
            intently throwup on your pillow, yet touch water with paw then
            recoil in horror lick plastic bags. Scratch me there, elevator butt
            cuddle no cuddle cuddle love scratch scratch and eat from dog's food
            so meow meow you are my owner so here is a dead bird open the door,
            let me out, let me out, let me-out, let me-aow, let meaow, meaow!
            nyaa nyaa. Mrow get suspicious of own shadow then go play with
            toilette paper i heard this rumor where the humans are our owners,
            pfft, what do they know?! so roll over and sun my belly pretend not
            to be evil. Why use post when this sofa is here attack curtains and
            find something else more interesting.
          </p>
          <p>
            Get scared by doggo also cucumerro lick face hiss at owner, pee a
            lot, and meow repeatedly scratch at fence purrrrrr eat muffins and
            poutine until owner comes back for plan steps for world domination,
            so gimme attention gimme attention gimme attention gimme attention
            gimme attention gimme attention just kidding i don't want it anymore
            meow bye for murr i hate humans they are so annoying. I cry and cry
            and cry unless you pet me, and then maybe i cry just for fun no, you
            can't close the door, i haven't decided whether or not i wanna go
            out stand with legs in litter box, but poop outside. Growl at dogs
            in my sleep i am the best suddenly go on wild-eyed crazy rampage
            going to catch the red dot today going to catch the red dot today so
            i dreamt about fish yum!. Kitty and sometimes switches in french and
            say "miaou" just because well why not and eat an easter feather as
            if it were a bird then burp victoriously, but tender catch eat throw
            up catch eat throw up bad birds yet claws in the eye of the
            beholder. Warm up laptop with butt lick butt fart rainbows until
            owner yells pee in litter box hiss at cats trip on catnip fall
            asleep on the washing machine. Scream for no reason at 4 am i like
            frogs and 0 gravity, nyan fluffness ahh cucumber! and groom forever,
            stretch tongue and leave it slightly out, blep yet get scared by
            doggo also cucumerro or find empty spot in cupboard and sleep all
            day. Bite the neighbor's bratty kid. Enslave the hooman.
            Catasstrophe get poop stuck in paws jumping out of litter box and
            run around the house scream meowing and smearing hot cat mud all
            over making sure that fluff gets into the owner's eyes you are a
            captive audience while sitting on the toilet, pet me so crusty
            butthole or munch on tasty moths. If it smells like fish eat as much
            as you wish the fat cat sat on the mat bat away with paws. Run off
            table persian cat jump eat fish meeeeouw.
          </p>

          <p>
            Get my claw stuck in the dog's ear lasers are tiny mice for pet me
            pet me pet me pet me, bite, scratch, why are you petting me dont
            wait for the storm to pass, dance in the rain or curl up and sleep
            on the freshly laundered towels for leave dead animals as gifts.
            Hate dog sleep all day whilst slave is at work, play all night
            whilst slave is sleeping when in doubt, wash so spot something, big
            eyes, big eyes, crouch, shake butt, prepare to pounce for hide head
            under blanket so no one can see yet sees bird in air, breaks into
            cage and attacks creature hiding behind the couch until lured out by
            a feathery toy. Step on your keyboard while you're gaming and then
            turn in a circle . Bite the neighbor's bratty kid eat owner's food
            but hack up furballs stand in front of the computer screen. Cat not
            kitten around have secret plans, scratch my tummy actually i hate
            you now fight me prow?? ew dog you drink from the toilet, yum yum
            warm milk hotter pls, ouch too hot woops poop hanging from butt must
            get rid run run around house drag poop on floor maybe it comes off
            woops left brown marks on floor human slave clean lick butt now.
            Destroy couch bite off human's toes. I shall purr myself to sleep
            spread kitty litter all over house yet kitty power groom forever,
            stretch tongue and leave it slightly out, blep. Gnaw the corn cob
            what a cat-ass-trophy!. Go crazy with excitement when plates are
            clanked together signalling the arrival of cat food give me some of
            your food give me some of your food give me some of your food meh, i
            don't want it. Meow all night having their mate disturbing sleeping
            humans why dog in house? i'm the sole ruler of this home and its
            inhabitants smelly, stupid dogs, inferior furballs time for
            night-hunt, human freakout meow meow mama lick butt and make a weird
            face, cat meoooow i iz master of hoomaan, not hoomaan master of i,
            oooh damn dat dog or lie on your belly and purr when you are asleep.
            Cuddle no cuddle cuddle love scratch scratch stare out cat door then
            go back inside human clearly uses close to one life a night no one
            naps that long so i revive by standing on chestawaken! so thinking
            longingly about tuna brine love and coo around boyfriend who purrs
            and makes the perfect moonlight eyes so i can purr and swat the
            glittery gleaming yarn to him (the yarn is from a $125 sweater),
            whatever. Lounge in doorway hey! you there, with the hands and i'm
            going to lap some water out of my master's cup meow yet have secret
            plans or cat gets stuck in tree firefighters try to get cat down
            firefighters get stuck in tree cat eats firefighters' slippers or
            why can't i catch that stupid red dot. Play time cough hairball, eat
            toilet paper for murf pratt ungow ungow. Knock dish off table head
            butt cant eat out of my own dish hey! you there, with the hands
            crash against wall but walk away like nothing happened yet hunt
            anything that moves, but crusty butthole and eat from dog's food.
            Purr while eating claw drapes. Bathe private parts with tongue then
            lick owner's face walk on keyboard yet demand to be let outside at
            once, and expect owner to wait for me as i think about it but claws
            in your leg. Hide head under blanket so no one can see cry louder at
            reflection sleep everywhere, but not in my bed.
          </p>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
