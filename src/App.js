import React from 'react';
import Todo from './components/Todo';
import Modal from './components/Modal';
import useModal from './components/useModal';
import StickyColumn from './components/StickyColumn';
import InfiniteScroll from "./components/InfiniteScroll";
import { Container } from "reactstrap";

import logo from "./assets/images/logo.svg";
import photo1 from "./assets/images/photo-1.jpg";
import photo2 from "./assets/images/photo-2.jpg";
import photo3 from "./assets/images/photo-3.jpg";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div className="app">
      <div className="header">
        <h1>React Hooks</h1>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <section>
        <h2>Todo List</h2>
        <Todo />
      </section>
      <section>
        <h2>Modal</h2>
        <button className="button-default" onClick={toggle}>
          Show Modal
        </button>
        <Modal isShowing={isShowing} hide={toggle} />
      </section>
      <section>
        <h2>Sticky Animation</h2>
        <Container fluid>
          <StickyColumn textColumn={"left"} img={photo1}>
            <h3>Cheese Ipsum</h3>
            <p>
              Port-salut cheese strings say cheese. Caerphilly croque monsieur
              manchego caerphilly taleggio cheesy grin everyone loves
              cheeseburger. Edam ricotta jarlsberg squirty cheese stilton
              stilton say cheese swiss. Dolcelatte pecorino cheese and wine
              cheese on toast squirty cheese say cheese cheesy grin halloumi.
              Blue castello cream cheese port-salut.
            </p>
            <p>
              Camembert de normandie roquefort cheesecake. Roquefort feta
              parmesan chalk and cheese lancashire when the cheese comes out
              everybody's happy airedale who moved my cheese. Rubber cheese
              macaroni cheese caerphilly cheese and biscuits manchego cottage
              cheese cheddar jarlsberg. Cheeseburger feta goat parmesan danish
              fontina caerphilly danish fontina chalk and cheese. Mozzarella
              cream cheese mascarpone cheddar pecorino cheesy feet dolcelatte
              stinking bishop. Squirty cheese parmesan monterey jack cow
              cheese and biscuits pepper jack queso camembert de normandie.
              Caerphilly edam paneer jarlsberg cheeseburger the big cheese
              manchego rubber cheese. The big cheese cheesy grin cheese on
              toast fromage cow manchego st. agur blue cheese croque monsieur.
              Airedale danish fontina fromage frais fondue cheese on toast
              goat cheese and wine queso. Hard cheese brie bocconcini pepper
              jack goat airedale.
            </p>
            <p>
              Squirty cheese lancashire mascarpone. Cheese and wine cheesecake
              airedale brie feta cheese slices blue castello macaroni cheese.
              Roquefort paneer monterey jack halloumi babybel port-salut
              taleggio boursin. Cheesy feet swiss cheese and wine cheesy feet
              stinking bishop st. agur blue cheese paneer cut the cheese.
              Chalk and cheese.
            </p>
            <p>
              Red leicester caerphilly cheese and wine. Swiss halloumi the big
              cheese cheesecake dolcelatte cheese triangles hard cheese hard
              cheese. Airedale cheese strings smelly cheese fromage when the
              cheese comes out everybody's happy cheesy feet pecorino boursin.
              Melted cheese pecorino danish fontina bavarian bergkase stilton
              macaroni cheese cheese triangles fromage frais. Fromage
              bocconcini parmesan mozzarella cheesecake caerphilly fromage
              frais rubber cheese. Queso brie cow chalk and cheese brie rubber
              cheese mozzarella fromage frais. Queso everyone loves emmental
              st. agur blue cheese babybel jarlsberg bocconcini dolcelatte.
              Dolcelatte stinking bishop macaroni cheese macaroni cheese
              pecorino stilton squirty cheese manchego. When the cheese comes
              out everybody's happy danish fontina cheesy feet hard cheese
              caerphilly melted cheese pecorino stilton. Cheddar cottage
              cheese edam danish fontina rubber cheese stinking bishop
              halloumi gouda. Lancashire danish fontina macaroni cheese
              bavarian bergkase the big cheese who moved my cheese cheesy feet
              smelly cheese. Blue castello lancashire cottage cheese airedale.
            </p>
            <p>
              Cut the cheese cow monterey jack. Mozzarella ricotta cheese
              triangles bocconcini feta the big cheese cow cheese strings.
              Dolcelatte the big cheese manchego blue castello cut the cheese
              pepper jack blue castello everyone loves. Cheddar bavarian
              bergkase cheesy feet port-salut emmental cheese and wine smelly
              cheese fromage frais. Pecorino goat macaroni cheese cheese
              triangles cheesy grin caerphilly cauliflower cheese hard cheese.
              Cream cheese croque monsieur smelly cheese who moved my cheese
              cheese slices red leicester stilton ricotta. Cauliflower cheese
              chalk and cheese brie cheeseburger melted cheese caerphilly
              boursin melted cheese. Queso port-salut babybel smelly cheese
              cheeseburger pepper jack taleggio goat. Rubber cheese chalk and
              cheese cheesy feet cheddar rubber cheese blue castello melted
              cheese roquefort. Parmesan chalk and cheese dolcelatte taleggio
              emmental stilton queso blue castello. Lancashire bavarian
              bergkase cheesecake smelly cheese.
            </p>
            <p>
              Macaroni cheese bavarian bergkase rubber cheese. Taleggio
              manchego macaroni cheese cheese strings cow cauliflower cheese
              rubber cheese taleggio. Queso cauliflower cheese cheesy feet
              chalk and cheese gouda feta cream cheese fromage frais.
              Cheesecake red leicester red leicester when the cheese comes out
              everybody's happy stinking bishop fondue.
            </p>
          </StickyColumn>
          <StickyColumn textColumn={"right"} img={photo2}>
            <h3>Pirate Ipsum</h3>
            <p>
              Pirate Round hang the jib blow the man down gunwalls hearties
              overhaul bilge rat Barbary Coast fire in the hole crack Jennys
              tea cup. Gunwalls topgallant loot handsomely reef sails lad come
              about crack Jennys tea cup lateen sail Admiral of the Black.
              Hogshead carouser yard main sheet jolly boat run a rig hands
              sutler holystone pillage. Grog swing the lead jib chandler
              wherry draught wench flogging knave yard. Bucko lugger bowsprit
              Sink me code of conduct American Main scourge of the seven seas
              draft come about snow. Haul wind spike fluke Letter of Marque
              lugger Shiver me timbers landlubber or just lubber yard hogshead
              dance the hempen jig. Snow fire in the hole reef sails long
              clothes Admiral of the Black quarterdeck splice the main brace
              handsomely careen Sea Legs. Jib belay mutiny handsomely pillage
              come about bounty cable tackle scuttle. Pieces of Eight coxswain
              Cat o'nine tails clipper spike Arr execution dock draft take a
              caulk fire in the hole.
            </p>
            <p>
              Bucko plunder gibbet Jack Ketch cutlass keel mizzen case shot
              chase guns no prey, no pay. Matey lugsail loaded to the gunwalls
              Plate Fleet quarter Yellow Jack walk the plank snow mutiny
              coxswain. Crow's nest scuppers flogging killick long boat
              man-of-war fluke bucko dance the hempen jig jack.
            </p>
            <p>
              Booty bilged on her anchor jack chantey come about splice the
              main brace overhaul bounty starboard weigh anchor. Maroon crow's
              nest scurvy carouser heave to quarterdeck gangway bilge water
              jury mast dead men tell no tales. Cog yardarm scuppers aye sloop
              loot Spanish Main topmast driver weigh anchor. Shrouds Pieces of
              Eight squiffy Blimey American Main rope's end bucko spirits
              fluke hail-shot. Galleon heave down no prey, no pay hail-shot
              gangway tackle skysail Shiver me timbers bilge rat Nelsons
              folly. Yellow Jack jib weigh anchor hogshead poop deck belaying
              pin take a caulk port maroon lass. Gibbet brig Corsair bring a
              spring upon her cable scuppers to go on account broadside bilge
              water galleon smartly. Maroon belaying pin hearties man-of-war
              booty shrouds hulk flogging chase chase guns. Warp hearties
              coffer Cat o'nine tails black jack stern crow's nest pirate red
              ensign take a caulk.
            </p>
            <p>
              Strike colors Pirate Round keel dead men tell no tales Sink me
              blow the man down pink clipper Jolly Roger rope's end. Lanyard
              Gold Road fluke quarter splice the main brace log hardtack fore
              loaded to the gunwalls gangway. Capstan sheet scurvy interloper
              holystone no prey, no pay salmagundi jury mast grog blossom
              grapple. Gangway fire ship dance the hempen jig main sheet run a
              shot across the bow aye splice the main brace six pounders
              crow's nest blow the man down. Scourge of the seven seas pink
              mizzen careen doubloon long clothes barque handsomely come about
              chase guns. Chantey lanyard prow provost Privateer code of
              conduct quarter spanker jib haul wind.
            </p>
          </StickyColumn>
          <StickyColumn textColumn={"left"} img={photo3}>
            <h3>Samuel L Ipsum</h3>
            <p>
              My money's in that office, right? If she start giving me some
              bullshit about it ain't there, and we got to go someplace else
              and get it, I'm gonna shoot you in the head then and there. Then
              I'm gonna shoot that bitch in the kneecaps, find out where my
              goddamn money is. She gonna tell me too. Hey, look at me when
              I'm talking to you, motherfucker. You listen: we go in there,
              and that nigga Winston or anybody else is in there, you the
              first motherfucker to get shot. You understand?
            </p>
            <p>
              Look, just because I don't be givin' no man a foot massage don't
              make it right for Marsellus to throw Antwone into a glass
              motherfuckin' house, fuckin' up the way the nigger talks.
              Motherfucker do that shit to me, he better paralyze my ass,
              'cause I'll kill the motherfucker, know what I'm sayin'?
            </p>
            <p>
              Look, just because I don't be givin' no man a foot massage don't
              make it right for Marsellus to throw Antwone into a glass
              motherfuckin' house, fuckin' up the way the nigger talks.
              Motherfucker do that shit to me, he better paralyze my ass,
              'cause I'll kill the motherfucker, know what I'm sayin'?
            </p>
            <p>
              Look, just because I don't be givin' no man a foot massage don't
              make it right for Marsellus to throw Antwone into a glass
              motherfuckin' house, fuckin' up the way the nigger talks.
              Motherfucker do that shit to me, he better paralyze my ass,
              'cause I'll kill the motherfucker, know what I'm sayin'?
            </p>
            <p>
              Normally, both your asses would be dead as fucking fried
              chicken, but you happen to pull this shit while I'm in a
              transitional period so I don't wanna kill you, I wanna help you.
              But I can't give you this case, it don't belong to me. Besides,
              I've already been through too much shit this morning over this
              case to hand it over to your dumb ass.
            </p>
            <p>
              The path of the righteous man is beset on all sides by the
              iniquities of the selfish and the tyranny of evil men. Blessed
              is he who, in the name of charity and good will, shepherds the
              weak through the valley of darkness, for he is truly his
              brother's keeper and the finder of lost children. And I will
              strike down upon thee with great vengeance and furious anger
              those who would attempt to poison and destroy My brothers. And
              you will know My name is the Lord when I lay My vengeance upon
              thee.
            </p>

            <p>
              Your bones don't break, mine do. That's clear. Your cells react
              to bacteria and viruses differently than mine. You don't get
              sick, I do. That's also clear. But for some reason, you and I
              react the exact same way to water. We swallow it too fast, we
              choke. We get some in our lungs, we drown. However unreal it may
              seem, we are connected, you and I. We're on the same curve, just
              on opposite ends.
            </p>

            <p>
              Now that there is the Tec-9, a crappy spray gun from South
              Miami. This gun is advertised as the most popular gun in
              American crime. Do you believe that shit? It actually says that
              in the little book that comes with it: the most popular gun in
              American crime. Like they're actually proud of that shit.
            </p>

            <p>
              Your bones don't break, mine do. That's clear. Your cells react
              to bacteria and viruses differently than mine. You don't get
              sick, I do. That's also clear. But for some reason, you and I
              react the exact same way to water. We swallow it too fast, we
              choke. We get some in our lungs, we drown. However unreal it may
              seem, we are connected, you and I. We're on the same curve, just
              on opposite ends.
            </p>

            <p>
              Normally, both your asses would be dead as fucking fried
              chicken, but you happen to pull this shit while I'm in a
              transitional period so I don't wanna kill you, I wanna help you.
              But I can't give you this case, it don't belong to me. Besides,
              I've already been through too much shit this morning over this
              case to hand it over to your dumb ass.
            </p>
          </StickyColumn>
        </Container>
      </section>
      <section>
        <h2>Infinite Scrolling</h2>
        <InfiniteScroll />
      </section>
    </div>
  );
}

export default App;
