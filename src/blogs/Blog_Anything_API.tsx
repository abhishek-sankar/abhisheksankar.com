import React from 'react';
import img1 from '../assets/anythingapi_1_tweet.png';
import img2 from '../assets/anythingapi_2_team.jpeg';
import img3 from '../assets/anythingapi_4_work.jpeg';
import img4 from '../assets/anythingapi_3_pitch.jpeg';

export const Blog_Anything_API: React.FC = () => (
  <article className="max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">There was an idea</h2>
    <p className="mb-4">
      It was a busy October week with a bunch of deadlines I was almost sure to miss. Just two days ago, I'd gone through 2 all nighters for a hackathon and I really didn't know how much more I had in me.
    </p>
    <p className="mb-4">
      Akshay, my roommate tells me there's this competition called{' '}
      <a href="https://www.cs.cmu.edu/calendar/170441233" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 underline">Hack a startup</a>{' '}
      happening this Saturday and he was teaming up with Jack, and I check it out - seemed legit. I was like - damn, another hackathon? So that's another all nighter weekend? I should probably skip this one. There's other pressing items that need my attention.
    </p>
    <p className="mb-4">
      Over the next two days I get calls from Shreyas and Adithi - both really talented people, asking if I want to team up. To top this off, at the same time, Jack asked me if I have some time to talk. You get the idea. People were looking for teammates cause this was apparently a thing at CMU. To be honest, I was gonna skip participating but I think I got FOMO'd into trying it out. After all, what's a couple missed deadlines compared to the excitement of building something real.
    </p>
    <p className="mb-4">
      All I knew was that I'm in the United States and I'm never saying no to an opportunity that presents itself.
    </p>
    <figure className="mb-4">
      <img src={img1} alt="In retrospect, my friends had called it ages ago" className="rounded shadow" />
      <figcaption className="text-sm text-gray-500">In retrospect, my friends sent this to me ages ago</figcaption>
    </figure>
    <p className="mb-4">
      I go over to Jack's and he tells me that there's 3 others already in - Tyler, Prachi and Akshay. He tells me about this scrappy script he's built over the past week where if you put in a JSON structure, it fills it in, and in Jack fashion, asked for a JSON which asked for which country Messi was from. A little bit of handholding here and there and presto, it gave Argentina. While the example was rather simple, I could see the potential of such an idea. He called it - The Anything API.
    </p>
    <p className="mb-4">
      Sidenote - I'm a big fan of solopreneurs like <span className="text-indigo-500">@levelsio</span> and <span className="text-indigo-500">@danny-postma</span>, who make a portfolio of bets and the ones which pay off, pay off well. The first thing that hit me when I heard the idea was how something like this could be used to aggregate data for their products like nomadlist.com and sites like levels.fyi;
    </p>
    <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-4">
      I believe that the internet is the world's largest database, but it's unstructured. With LLMs, it can be different.<br />
      <span className="not-italic">~ Jack Regueiro</span>
    </blockquote>
    <p className="mb-4">
      We geared up toward the event, attended a bunch of "workshops" and very quickly learnt that this was less of a hackathon in its raw sense and more of a pitch competition; Your product being real didn't matter as much as the proposed business opportunity.
    </p>
    <p className="mb-4">
      Welp, that's new for me. We pitched a bunch of versions of what this could be on Day 1,
    </p>
    <figure className="mb-4">
      <img src={img2} alt="Day 1 Pitch" className="rounded shadow" />
      <figcaption className="text-sm text-gray-500">The team at the event - Week 0/Day 2</figcaption>
    </figure>
    <figure className="mb-4">
      <img src={img3} alt="Final Pitch" className="rounded shadow" />
      <figcaption className="text-sm text-gray-500">The night before our final pitch - Week 2/Day 6</figcaption>
    </figure>
    <figure className="mb-4">
      <img src={img4} alt="Team Photo" className="rounded shadow" />
      <figcaption className="text-sm text-gray-500">Our final pitch at the event - Week 2/Day 7</figcaption>
    </figure>
    <div className="mt-8">
      <a href="https://pittsburghstartupnews.substack.com/p/cmus-hack-a-startup-kickoff-a-two" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 underline">Read more: Pittsburgh Startup News - CMU's Hack a Startup Kickoff</a>
    </div>
  </article>
);

