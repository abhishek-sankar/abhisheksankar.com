import website from "../assets/hack_cmu_2025/website.png";
import img1 from "../assets/hack_cmu_2025/stage.jpeg";
import img2 from "../assets/hack_cmu_2025/IMG_2564.jpeg";
import img3 from "../assets/hack_cmu_2025/IMG_2570.jpeg";
import img4 from "../assets/hack_cmu_2025/IMG_2575.jpeg";
import video1 from "../assets/hack_cmu_2025/backpack.mov";
import video2 from "../assets/hack_cmu_2025/HackCMUVid.mp4";
import demo1 from "../assets/hack_cmu_2025/demo_1.jpeg";
import demo2 from "../assets/hack_cmu_2025/demo_2.jpeg";


export const Blog_Hack_CMU_2025: React.FC = () => (
  <article>
    <h3 className="text-2xl font-bold mb-4">Hack CMU 2025</h3>
    <hr className="mb-6" />
    
    <p className="mb-4">
      Random day, Prachi texted me if I wanna do a hackathon together and sent 2 links.
    </p>
    
    <p className="mb-4">
      I'd seen one of these on the bulletins and kinda wanted to join in.
    </p>

    <p className="mb-4">
      Said yes, had a discussion in Swartz and tried to use the Bloomberg terminal - failed miserably cause login.
    </p>

    {/* [IMAGE PLACEHOLDER 1: Bloomberg terminal attempt or hackathon bulletin] */} 
    <figure className="mb-4">
      <img src={website} alt="The website" />
    </figure>

    <p className="mb-4">
      We talked for a bit, and I think we had a couple of ideas such as generating content - Veo3 and nano-banana kind of come out around this time so we thought we'd maybe customize any product-based website with you using the product, something of that sort.
    </p>

    <p className="mb-4">
      Kind of wanted a nicer team and we called Akshay and Janny to join. They were cool with it. We had a discussion, invited Prachi over, had Maggie and talked over a couple more ideas the night before.
    </p>

    <figure className="mb-4">
      <img src={img2} alt="Team discussion" />
    </figure>

    <p className="mb-4">
      One of the core themes that we talked about was how we're all tech support for our parents, grandparents and extended family. How they call us whenever they actually have issues. But turns out it's actually a very straightforward thing to solve. It's just that they lack the necessary tech nativeness to be able to figure it out. And it leads to a situation of dependence. And this idea was about enabling anybody who is not directly tech native to be able to become close to digital natives.
    </p>

    <p className="mb-4">
      Went in on the actual night, evening was busy because we were tired from assignments, scrambled over the ones we had to do and then initially started discussions around what we should be doing.
    </p>


    <p className="mb-4">
      There was a point where we met Choo Young from Anthropic. We got a bit cocky and said, "Can we get a referral if we win?" We were hopeful at that point, but unfortunately the tide didn't go our way.
    </p>

    <p className="mb-4">
      We approached this one with the idea that code is cheap. We will see later that that did not fully end up being the case because we were trying to do something entirely different when not doing traditional software engineering, so it kind of got weird.
    </p>

    <p className="mb-4">
      We did know that we were essentially looking forward to a chill hackathon and not one where we just burn ourselves out because life was not at that sort of a point where we could commit that way. Nonetheless, we ended up doing that where we kept discussing ideas till about 12, had a couple of flow diagrams and started executing.
    </p>

    <figure className="mb-4">
      <img src={img3} alt="Flow diagrams" />
    </figure>

    <p className="mb-4">
      So one of the key things that we discussed was around the usage of modern websites for old people, where it's just extremely hard to cancel your Prime membership or to return an order or anything of that sort if you don't, if you've not really used an Amazon website in recent days.
    </p>

    <figure className="mb-4">
      <img src={demo1} alt="Demo 1" />
    </figure>

    <figure className="mb-4">
      <img src={demo2} alt="Demo 2" />
    </figure>

    <p className="mb-4">
      The whole pain point was that I don't want to deal with Amazon's or in that sense, in the broader sense, the modern Internet's clutter. I get that there's UX design for a reason and that they tried to simplify all of that clutter. But even so, there are things that you have to do that may not be as obvious to somebody who is not tech native. So it's a dwindling audience, but it's still something that we wanted to hit.
    </p>

    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">Demo Videos</h3>
      <div className="mb-4">
        <video controls style={{ width: "100%", borderRadius: "8px" }}>
          <source src={video1} type="video/quicktime" />
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-500 mt-1">Pink backpack demo - you can see the extension on the right</p>
      </div>
      <div>
        <video controls style={{ width: "100%", borderRadius: "8px" }}>
          <source src={video2} type="video/mp4" />
          <source src={video2} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-500 mt-1">Amazon refund demo</p>
      </div>
    </div>

    <p className="mb-4">
      We kept attacking the idea, we faced a couple of hurdles where we kept it hackathon-sized. So, essentially anything that you want to do, any action that you want to do, you take the intent and then we render a separate UI on top of the actual website. So that you don't have to deal with everything else that's going on. And you can just make choices when necessary. We didn't want it to be an agentic browser for a couple of reasons. Primarily one being, we don't want it to just do the thing for you. We want to get you to a point where you're digitally native. It's less of ignorance and more of enablement and education.
    </p>

    <p className="mb-4">
      The whole idea coalesced into a flow where the actual website would enter, we'd take it through an iframe and then essentially reduce that down using the intent into just the steps that need to be executed. And it was a Chrome extension and the layer on top, the UI buildout would be connected to the actual website. So any clicks that you perform on our layer would actually trigger actions on the real website. And for every new thing that happens on the real website, we generate or we update our current UI. So the user doesn't have to deal with the chaos, they just have to make the choices that they absolutely have to. And we did put a lot of defaults in it so they don't have to make every single choice.
    </p>


    <p className="mb-4">
      We demoed and the demo actually went really well. People were pretty happy with what we built. It was very crude, but the concept still stands that it's something that we want to try to execute on. And I think we will.
    </p>
    <figure className="mb-4">
      <img src={img4} alt="Demo 3" />
    </figure>

 

    <p className="mb-4">
      With that, signing off. That was one hell of a weekend. Well spent.
    </p>

    {/* Add images section when ready */}
    {/* 
    <figure className="mb-4">
      <img src={yourImage} alt="Description of your image" />
      <figcaption className="text-sm text-gray-500">Caption for your image</figcaption>
    </figure>
    */}
    <figure className="mb-4">
      <div style={{ aspectRatio: "16/9", maxWidth: "100%", overflow: "hidden", borderRadius: "8px" }}>
        <img
          src={img1}
          alt="The final ceremony"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />
      </div>
    </figure>
  </article>
);
