export interface ReadingItem {
  title: string;
  url: string;
}

export interface Reading {
  id: string;
  title: string; // e.g., "June 2025"
  date: string;
  items: ReadingItem[];
}

export const readings: Reading[] = [
  {
    id: "september-2025",
    title: "September 2025",
    date: "September 2025",
    items: [
      {
        title: "You Have To Be In The Water - chris@pacecapital.com",
        url: "https://docs.google.com/document/d/1UBodINa93Tf7s5xTnXN5-ckrWI_HMwOv9bZXi3eYRaU/edit?tab=t.0"
      }
    ]
  },
  {
    id: "august-2025",
    title: "August 2025",
    date: "August 2025",
    items: [
      {
        title: "Don't get one shotted",
        url: "https://writing.nikunjk.com/p/dont-get-one-shotted"
      },
      {
        title: "ast-grep for claude",
        url: "https://x.com/alxfazio/status/1962801127251915011"
      },
      {
        title: "A clock that doesn't snap - React",
        url: "https://ethanniser.dev/blog/a-clock-that-doesnt-snap/"
      }
    ]
  },
  {
    id: "july-2025",
    title: "July 2025",
    date: "July 2025",
    items: [
      {
        title: "Asymmetry of verification and verifiers law",
        url: "https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law"
      }
    ]
  },
  {
    id: "june-2025",
    title: "June 2025",
    date: "June 2025",
    items: [
      {
        title: "Software 2.0 (2017)",
        url: "https://karpathy.medium.com/software-2-0-a64152b37c35"
      },
      {
        title: "RLHF",
        url: "https://rlhfbook.com/c/11-policy-gradients.html"
      },
      {
        title: "Night Crazies Substack - Whoop Head of Product",
        url: "https://hils.substack.com/"
      }
    ]
  },
  {
    id: "may-2025",
    title: "May 2025",
    date: "May 2025",
    items: [
      {
        title: "God Mode",
        url: "https://sahillavingia.com/god"
      },
      {
        title: "A SWE's guide to reading research papers",
        url: "https://blog.codingconfessions.com/p/a-software-engineers-guide-to-reading-papers?utm_source=substack&utm_content=feed%3Arecommended%3Acopy_link"
      }
    ]
  },
  {
    id: "mar-2025",
    title: "March 2025",
    date: "March 2025",
    items: [
      {
        title: "CUDA for Python devs",
        url: "https://www.pyspur.dev/blog/introduction_cuda_programming"
      },
      {
        title: "Hackscrapped - Hackathon calendar",
        url: "https://hackscrapped.vercel.app"
      },
      {
        title: "The psychology of waiting, loading animations and Facebook",
        url: "https://blog.mercury.io/the-psychology-of-waiting-loading-animations-and-facebook/"
      },
      {
        title: "System design GH",
        url: "https://github.com/donnemartin/system-design-primer"
      },
      {
        title: "Raymond Woo's Blog",
        url: "https://raymondyoo.com/blog/"
      },
      {
        title: "AI Engineer Pack",
        url: "https://www.aiengineerpack.com/#firecrawl"
      },
      {
        title: "shl - PMing with O1 pro",
        url: "https://www.youtube.com/embed/EBosnqXWxYI"
      },
      {
        title: "Framer portfolio",
        url: "https://www.framer.com/marketplace/templates/smooth/"
      },
      {
        title: "OCaml - Gameboy emulator",
        url: "https://linoscope.github.io/writing-a-game-boy-emulator-in-ocaml/"
      }
    ]
  },
  {
    id: "dec-2024",
    title: "December 2024",
    date: "December 2024",
    items: [
      {
        title: "System Design complete checklist",
        url: "https://medium.com/@shivambhadani_/system-design-for-beginners-everything-you-need-in-one-article-c74eb702540b"
      },
      {
        title: "@neuralnets blog",
        url: "https://cneuralnets.netlify.app/mlblogs"
      },
      {
        title: "Building a ball tracking system with SAM",
        url: "https://www.sievedata.com/blog/ball-tracking-with-sam2"
      },
      {
        title: "AI engineer pack",
        url: "https://www.aiengineerpack.com"
      },
      {
        title: "Curated YT feed - tokin.tv",
        url: "https://tokin.tv"
      },
      {
        title: "ML Interview checklist",
        url: "https://huyenchip.com/ml-interviews-book/contents/0-about-the-questions.html"
      },
      {
        title: "Transformers from scratch",
        url: "https://e2eml.school/transformers.html"
      },
      {
        title: "Cold email handbook for businesses",
        url: "https://www.za-zu.com/blog/playbook"
      },
      {
        title: "@delian 30 observations at 30",
        url: "https://delian.io/thirty"
      }
    ]
  },
  {
    id: "aug-2021",
    title: "August 2021",
    date: "August 2021",
    items: [
      {
        title: "Spotify themed resume",
        url: "https://twitter.com/emvutweets/status/1367221816985407488?s=20"
      },
      {
        title: "@gaganbiyani - The story of Udemy",
        url: "https://twitter.com/gaganbiyani/status/1352714283323437057?s=20"
      },
      {
        title: "Public Speaking",
        url: "https://twitter.com/swapnilbhatkar7/status/1335502697085202432?s=20"
      },
      {
        title: "ML concepts as GIFs",
        url: "https://twitter.com/ChristophMolnar/status/1332255132613013507?s=20"
      },
      {
        title: "Make a video resume",
        url: "https://twitter.com/michaelaubry/status/1290938991190011905?s=20"
      },
      {
        title: "@randallkanna - Job Hunt and Interview prep thread",
        url: "https://twitter.com/RandallKanna/status/1285630729850953729?s=20"
      },
      {
        title: "@githubNext - Visualize a codebase",
        url: "https://twitter.com/GitHubNext/status/1423280465755115520?s=20"
      },
      {
        title: "@markmanson",
        url: "https://twitter.com/IAmMarkManson/status/1427210781989425153?s=20"
      },
      {
        title: "Something Strava should have - or I could build",
        url: "https://twitter.com/mwichary/status/1427007100845060096?s=20"
      },
      {
        title: "@sriramk - Podcasts on science and history",
        url: "https://twitter.com/sriramk/status/1424083072090132481?s=20"
      },
      {
        title: "@businessbarista - Books on human psychology and behaviour",
        url: "https://twitter.com/businessbarista/status/1418592142130352129?s=20"
      },
      {
        title: "@blader - Super mario onboarding experience",
        url: "https://twitter.com/blader/status/1418401927830794243?s=20"
      },
      {
        title: "@micheal_nielsen - book recs",
        url: "https://twitter.com/michael_nielsen/status/1432919969654665219?s=20"
      },
      {
        title: "@eric_jorgenson - course on leverage",
        url: "https://twitter.com/EricJorgenson/status/1361444421892526081?s=20"
      },
      {
        title: "@tobi_lutke - latency gif",
        url: "https://twitter.com/tobi/status/1432450870646542337?s=20"
      },
      {
        title: "@sriramk - Friday evening thriller/action movie reccomendations",
        url: "https://twitter.com/sriramk/status/1431440075615703041?s=20"
      },
      {
        title: "@businessbarrista - single best essay you've read",
        url: "https://twitter.com/businessbarista/status/1431064381014650885?s=20"
      },
      {
        title: "@quincy_larson - rust course on repl.it",
        url: "https://twitter.com/ossia/status/1429853894285344768?s=20"
      },
      {
        title: "@balajis - best decentralised social media options as of August 2021",
        url: "https://twitter.com/balajis/status/1429724746397093901?s=20"
      },
      {
        title: "@mark_reidl - AI story generation",
        url: "https://twitter.com/hardmaru/status/1429427422303178758?s=20"
      },
      {
        title: "Netflix jump scare avoider",
        url: "https://twitter.com/alyssaxuu/status/1428737404970614790?s=20"
      },
      {
        title: "create sigils",
        url: "https://twitter.com/mmckain_/status/1428485764468207618?s=20"
      }
    ]
  },
  {
    id: "jul-2021",
    title: "July 2021",
    date: "July 2021",
    items: [
      {
        title: "@visakanv's notes on teaching an intern to write copy",
        url: "https://twitter.com/visakanv/status/1006536538090557440"
      },
      {
        title: "@balajis - Helm personal server for $300",
        url: "https://twitter.com/balajis/status/1420567062104088582"
      },
      {
        title: "Talk b/w @garrytan and Gigi Sreenivas (Founder)",
        url: "https://www.youtube.com/watch?v=3csq0h59wuE&feature=youtu.be"
      },
      {
        title: "@shaanvp - Build a personal brand in any big company",
        url: "https://twitter.com/ShaanVP/status/1418355948268130308?s=20"
      },
      {
        title: "Script to delete old tweets",
        url: "https://twitter.com/ddonia_/status/1416059513145339905?s=20"
      },
      {
        title: "@blader - Best guide on presentations",
        url: "https://twitter.com/blader/status/1145862466687008768?s=20"
      }
    ]
  },
  {
    id: "jun-2021",
    title: "June 2021",
    date: "June 2021",
    items: [
      {
        title: "Real time voice changer",
        url: "https://twitter.com/smsunarto/status/1413948969965678593?s=20"
      },
      {
        title: "Etsy - Debit card skins",
        url: "https://twitter.com/nicoletters/status/1412163914201063424?s=20"
      },
      {
        title: "@balajis recommendation - YT channel for ML concepts",
        url: "https://twitter.com/balajis/status/1412290749652111361?s=20"
      },
      {
        title: "@packyM - Book recommendation: The cult of We",
        url: "https://twitter.com/packyM/status/1412045046782758913?s=20"
      },
      {
        title: "@JuceboxCA - Go to meetings with your boss to learn",
        url: "https://twitter.com/JuiceboxCA/status/1409882071141699610?s=20"
      },
      {
        title: "Start DMs with Drink water instead of Hi",
        url: "https://twitter.com/katherinecodes/status/1409266549190402048?s=20"
      },
      {
        title: "@waitbutwhy - comment a graph that fascinates you",
        url: "https://twitter.com/waitbutwhy/status/1407390418980032528?s=20"
      },
      {
        title: "@david__perell - Pixar's guide to storytelling",
        url: "https://twitter.com/david_perell/status/1402416871408914440?s=20"
      },
      {
        title: "Best onboarding flows in games",
        url: "https://twitter.com/Tocelot/status/1399752363389296641?s=20"
      }
    ]
  },
  {
    id: "may-2021",
    title: "May 2021",
    date: "May 2021",
    items: [
      {
        title: "@waitbutwhy - Friend alignments",
        url: "https://twitter.com/waitbutwhy/status/1411694379920674821?s=20"
      },
      {
        title: "@shreyas - Evaluate big offers",
        url: "https://twitter.com/shreyas/status/1410989291895869445?s=20"
      },
      {
        title: "@turnernovak - AR pong on snapchat",
        url: "https://twitter.com/TurnerNovak/status/1404055851158097927?s=20"
      },
      {
        title: "Remove personal information from Google",
        url: "https://twitter.com/kashhill/status/1402986015107653647?s=20"
      },
      {
        title: "@visakanv - Describe when you deliverately took the harder way",
        url: "https://twitter.com/visakanv/status/1403383021500211201?s=20"
      },
      {
        title: "Drunk post - Reddit - Senior engineer",
        url: "https://twitter.com/RebeccaSlatkin/status/1398981370488266753?s=20"
      },
      {
        title: "Better twitter images",
        url: "https://twitter.com/scholz_felix/status/1394308239655936003?s=20"
      },
      {
        title: "@joulee good interview questions to get to know someone",
        url: "https://twitter.com/joulee/status/1392504865352417284?s=20"
      }
    ]
  },
  {
    id: "apr-2021",
    title: "April 2021",
    date: "April 2021",
    items: [
      {
        title: "@garrytan - the hedonic ramp and \"never quite being there\"",
        url: "https://twitter.com/garrytan/status/1392868457398497293"
      },
      {
        title: "@10kdiver - Markov chains",
        url: "https://twitter.com/10kdiver/status/1383471136868995079?s=20"
      },
      {
        title: "Setting up a new mac",
        url: "https://twitter.com/francisalturas/status/1383069595473379337"
      },
      {
        title: "Generate Mesh gradients",
        url: "https://twitter.com/smashingmag/status/1381512276944023553?s=20"
      },
      {
        title: "Skills to have - Great googling, Make pretty ppts, Communicate well",
        url: "https://twitter.com/viraj_sheth/status/1380090426812559365?s=20"
      },
      {
        title: "Generate stripe blobs",
        url: "https://twitter.com/ProductHunt/status/1378467609167945729?s=20"
      },
      {
        title: "@producthunt - Spotify music voting parties",
        url: "https://twitter.com/ProductHunt/status/1378256464133906433?s=20"
      },
      {
        title: "@gaganbiyani - On the early days of Udemy",
        url: "https://twitter.com/kunksed/status/1378245894227718150?s=20"
      }
    ]
  },
  {
    id: "mar-2021",
    title: "March 2021",
    date: "March 2021",
    items: [
      {
        title: "@abnux - Everything is figureoutable",
        url: "https://twitter.com/abnux/status/1367501744595427330?s=20"
      },
      {
        title: "Download all of Wikipedia because you're deranged like that",
        url: "https://twitter.com/engineers_feed/status/1375040561627955200?s=20"
      }
    ]
  },
  {
    id: "feb-2021",
    title: "February 2021",
    date: "February 2021",
    items: [
      {
        title: "@ankitkr0 - Best online course you've done so far",
        url: "https://twitter.com/ankitkr0/status/1361299461956276228?s=20"
      },
      {
        title: "Graphic Design - Tiktoks",
        url: "https://twitter.com/spookyshep/status/1358953223911006212?s=20"
      },
      {
        title: "@gaganbiyani - Solving the chicken egg problem at Udemy",
        url: "https://twitter.com/gaganbiyani/status/1352714283323437057?s=20"
      },
      {
        title: "@shreyas - Visa founder's notes",
        url: "https://twitter.com/shreyas/status/1351279379578458112?s=20"
      },
      {
        title: "@sarah_edo - Javascript array/object methods",
        url: "https://twitter.com/sarah_edo/status/1336342835017105415?s=20"
      }
    ]
  },
  {
    id: "jan-2021",
    title: "January 2021",
    date: "January 2021",
    items: [
      {
        title: "3 Cold emails to beat ATS",
        url: "https://twitter.com/anmelano/status/1349035021751865345?s=20"
      }
    ]
  },
  {
    id: "ancient-stuff",
    title: "Ancient Stuff",
    date: "Various",
    items: [
      {
        title: "@david__perell on Getting to yes",
        url: "https://twitter.com/david_perell/status/1037406877926256641"
      },
      {
        title: "@producthunt - Isometric cloud diagrams",
        url: "https://www.producthunt.com/posts/isoflow"
      },
      {
        title: "On building for the next billion users",
        url: "https://twitter.com/pacificleo/status/1309094508911525889"
      },
      {
        title: "Make a video resume",
        url: "https://twitter.com/michaelaubry/status/1290938991190011905?s=20"
      },
      {
        title: "@randallkanna - Improve your resume in any amount of time",
        url: "https://twitter.com/RandallKanna/status/1287950733380218880?s=20"
      },
      {
        title: "Serverless ELI5",
        url: "https://twitter.com/tucker_dev/status/1264949731861467146?s=20"
      },
      {
        title: "One movie line you'll never forget",
        url: "https://twitter.com/NetflixIndia/status/1260123984697241600?s=20"
      }
    ]
  }
]; 