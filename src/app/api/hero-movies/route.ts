//import helper from "@/utils/helper";
import helper from "@/utils/helper";
import { NextRequest, NextResponse } from "next/server";

// next js GET request
export async function GET(request: NextRequest) {
  //const searchParams = request.nextUrl.searchParams;
  //const count = searchParams.get("count");

  // for movies grab the poster and trailer link from www.imdb.com
  const games = [
    {
      id: 1,
      name: "Portal 2",
      year: 2011,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/ss_6a4f5afdaa98402de9cf0b59fed27bab3256a6f4.1920x1080.jpg?t=1725487730",
      poster: "/posters/portal2.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/5787/movie480.webm?t=1682715616",
      description:
        "Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.",
      rating: 95,
    },
    {
      id: 2,
      name: "The Witcher 3: Wild Hunt",
      year: 2015,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg?t=1726045366",
      poster: "/posters/witcher3.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256927226/movie480_vp9.webm?t=1674829926",
      description:
        "In this epic RPG, take on the role of Geralt of Rivia, a monster hunter with supernatural abilities. Explore vast landscapes, battle fearsome creatures, and uncover a rich storyline filled with intrigue and danger.",
      rating: 92,
    },
    {
      id: 3,
      name: "Dying Light",
      year: 2015,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/239140/ss_a3771358b8eb4ea4c8f99c5850711f55b87804de.1920x1080.jpg?t=1724252444",
      poster: "/posters/dying-light.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/257022021/movie480_vp9.webm?t=1715275593",
      description:
        "Dying Light is an open-world, first-person action game set in a zombie-infested city. Parkour mechanics allow players to navigate the urban environment with ease, while combat focuses on dismembering zombies.",
      rating: 87,
    },
    {
      id: 4,
      name: "Stardew Valley",
      year: 2016,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg?t=1711128146",
      poster: "/posters/stardew.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256660296/movie480.webm?t=1454099186",
      description:
        "Build your dream farm, explore mysterious caves, and help the townspeople in this charming farming simulation game.",
      rating: 92,
    },
    {
      id: 5,
      name: "Cuphead",
      year: 2017,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.1920x1080.jpg?t=1709068852",
      poster: "/posters/cuphead.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256894191/movie480_vp9.webm?t=1656595223",
      description:
        "Run and gun action-adventure game set in the 1930s. Players control Cuphead and Mugman as they battle against a variety of bosses based on classic cartoons.",
      rating: 88,
    },
    {
      id: 6,
      name: "Celeste",
      year: 2018,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_4b0f0222341b64a37114033aca9994551f27c161.1920x1080.jpg?t=1714089525",
      poster: "/posters/celeste.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256706951/movie480.webm?t=1516898311",
      description:
        "A challenging platformer about climbing a mountain while dealing with mental health issues. Features tight gameplay, beautiful pixel art graphics, and a compelling narrative.",
      rating: 89,
    },
    {
      id: 7,
      name: "Red Dead Redemption 2",
      year: 2018,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.1920x1080.jpg?t=1720558643",
      poster: "/posters/red-dead.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256768371/movie480.webm?t=1574881352",
      description:
        "An epic tale of outlaws, gunslingers, and gangsters in America's dying Wild West. Experience the story of Arthur Morgan and his gang as they face decline and betrayal.",
      rating: 97,
    },
    {
      id: 8,
      name: "Control",
      year: 2019,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/ss_8376498631b089e52fb5c75ffe119e0de5e6aed1.1920x1080.jpg?t=1726554320",
      poster: "/posters/control.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256795678/movie480_vp9.webm?t=1599146473",
      description:
        "Explore a mysterious government agency filled with supernatural forces and conspiracies. Control features a blend of third-person shooter combat and psychological horror elements.",
      rating: 87,
    },
    {
      id: 9,
      name: "Death Stranding",
      year: 2019,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850570/ss_f64a1140651ff5af30eb63bb6e5b41753d00a98e.1920x1080.jpg?t=1725036030",
      poster: "/posters/death.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256878920/movie480_vp9.webm?t=1683196663",
      description:
        "Embark on a journey across post-apocalyptic America to reconnect isolated cities and save humanity. Features innovative traversal mechanics and a deep storyline.",
      rating: 86,
    },
    {
      id: 10,
      name: "Cyberpunk 2077",
      year: 2020,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_4eb068b1cf52c91b57157b84bed18a186ed7714b.1920x1080.jpg?t=1726188854",
      poster: "/posters/cyber.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256987121/movie480_vp9.webm?t=1701872779",
      description:
        "Experience life in a dystopian cyberpunk world. Explore vast open worlds, engage in hacking and combat, and uncover a complex storyline filled with moral choices.",
      rating: 84,
    },
    {
      id: 11,
      name: "Hades",
      year: 2020,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_68300459a8c3daacb2ec687adcdbf4442fcc4f47.1920x1080.jpg?t=1715722799",
      poster: "/posters/hades.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256801252/movie480_vp9.webm?t=1600353465",
      description:
        "Navigate the underworld as Zagreus, son of Hades, attempting to escape the House of Hades. Features roguelike gameplay with procedurally generated levels and a rich narrative.",
      rating: 93,
    },
    {
      id: 12,
      name: "It Takes Two",
      year: 2021,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/ss_a15164ddd357ab3c0b2aff575a6b215b2d91b406.1920x1080.jpg?t=1725585631",
      poster: "/posters/takes-two.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256827093/movie480_vp9.webm?t=1616514535",
      description:
        "A cooperative action-adventure game where players control a couple whose relationship is put to the test through various challenges and obstacles.",
      rating: 88,
    },
    {
      id: 13,
      name: "Resident Evil Village",
      year: 2021,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_8113ec993ec474055c4cdce5ee86f91f7cf6663f.1920x1080.jpg?t=1719197703",
      poster:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg?t=1719197703",
      trailer: "/posters/village.webp",
      description:
        "Survive in a creepy village filled with monsters and uncover the dark secrets behind the sinister forces controlling the area.",
      rating: 85,
    },
    {
      id: 14,
      name: "Elden Ring",
      year: 2022,
      image:
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.1920x1080.jpg?t=1726158298",
      poster: "/posters/ring.webp",
      trailer:
        "https://video.akamai.steamstatic.com/store_trailers/256889456/movie480_vp9.webm?t=1654109241",
      description:
        "Explore a vast open world filled with magic, monsters, and legendary lore. Engage in challenging combat and uncover the mysteries of the Lands Between.",
      rating: 92,
    },
  ];

  // const data = games.filter((game: any, index: number) => {
  //   if (index < Number(count)) return game;
  // });

  const randomData = helper.shuffleArray(games);
  console.log("------------------------------------");
  console.log("/hero-movies");
  console.log(randomData[0]?.name);
  console.log("------------------------------------");

  return NextResponse.json(
    {
      data: randomData,
    },
    { status: 200 }
  );
}
