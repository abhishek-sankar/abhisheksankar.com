import img1 from "../assets/screenshotty/screenshotty_1_gallery.png";
import img2 from "../assets/screenshotty/screenshotty_2_brain_meme.jpeg";
import img3 from "../assets/screenshotty/screenshotty_3_demo.png";
import img4 from "../assets/screenshotty/screenshotty_4_spotify.png";
import photo1 from "../assets/screenshotty/PHOTO-2024-07-27-15-31-21.jpg";
import photo2 from "../assets/screenshotty/PHOTO-2024-07-27-15-31-22.jpg";
import photo3 from "../assets/screenshotty/PHOTO-2024-07-27-15-31-22 2.jpg";
import photo4 from "../assets/screenshotty/PHOTO-2024-07-27-15-33-54.jpg";

export const Blog_Screenshotty: React.FC = () => (
  <article>
    <h3 className="text-2xl font-bold mb-4">Screenshotty</h3>
    <hr className="mb-6" />
    
    <p className="mb-4">
      So there's always been this idea about going through all the screenshots in your gallery and then making something useful out of those screenshots, right? Because it's a very natural way for us to save information for later where we see something useful, we do a "chack-chack" and then yeah, it's just there in our gallery. We never go back to it.
    </p>

    <figure className="mb-4">
      <img src={img1} alt="Screenshot gallery example showing accumulated screenshots" />
      <figcaption className="text-sm text-gray-500">For example, if I check mine, it says</figcaption>
    </figure>

    <p className="mb-4">
      I remember seeing a tweet about it at some point, but then it came through my head. I had some big assignment for my Intro to Machine Learning class and then I just went away with it.
    </p>

    <p className="mb-4">
      Last week I was sitting around and I remember that one of my friends had sent me a couple of songs, but then in the same fashion, because they didn't want to type it out or they didn't have it saved as a specific playlist, they sent a couple of screenshots of a bunch of random playlists that they have. then in the same fashion, because they didn't want to type it out or they didn't have it saved as a specific playlist, they sent a couple of screenshots of a bunch of random playlists that they have.
    </p>

    <p className="mb-4">
      Now, what does my engineer brain do? It just says, what if you could have personal software that takes all of this and creates a playlist for you? And in extension, make a useful screenshot app. But for now, let's start with the playlist idea. extension, make a useful screenshot app. But for now, let's start with the playlist idea.
    </p>

    <figure className="mb-4">
      <img src={img2} alt="Meme about software engineers making products" />
      <figcaption className="text-sm text-gray-500">Obligatory "obviously this is how software engineers make products."</figcaption>
    </figure>

    <p className="mb-4">
      Anyways, at this point, Building personal software is less about actually knowing how to code and more about thinking through with the idea and saving if it's actually viable to vibe code it. And that's what I did. I popped up Cursor and here we are. what I did. I popped up Cursor and here we go.
    </p>

    <p className="mb-4">
      My initial extremely crude prompt was something like this.
    </p>

    <blockquote className="mb-4 pl-4 border-l-4 border-phthalo-green-500 italic text-gray-700">
      So my friend sent me a couple of playlist screenshots and I want to make an app that takes the screenshots and extracts the song name and artist name from them and then makes it called the Spotify API and the YouTube music API and creates a playlist for me. creates a playlist for me.
    </blockquote>

    <p className="mb-4">
      Surprisingly, Cursor got a good amount of it right. The initial implementation tried using Tesseract to perform OCR on the images and kind of get a hang of what the song and artists are. But then the problem was that the screenshots contained way more information than just the song names; and obviously I don't want to deal with actually parsing out exactly what is what for every different kind of screenshot, be it as a YouTube screenshot, be it Spotify screenshot, be it an Apple Music screenshot. out exactly what is what for every different kind of screenshot, be it as a YouTube screenshot, be it Spotify screenshot, be it an Apple Music screenshot.
    </p>

    <p className="mb-4">
      Monkey brain went, okay, let's just pass it to a VLLM and then be run with it. The initial passing should be the easiest step. So I did that and I had like an old project on Spotify that had API keys already created. So I pulled that in, pulled in the YouTube API keys and my open API key and boom, we kind of have a working prototype ready. API key and boom, we kind of have a working prototype ready.
    </p>

    <figure className="mb-4">
      <img src={img3} alt="Screenshotty app demo showing playlist creation" />
      <figcaption className="text-sm text-gray-500">This is what was generated</figcaption>
    </figure>

    <p className="mb-4">
      Now I said to use the images from the screenshots that I had gotten a couple of months back. And voila, we have what we need.
    </p>

    <div className="grid grid-cols-4 gap-4 mb-4">
      <figure>
        <img src={photo1} alt="Playlist screenshot 1" className="w-full h-auto rounded shadow" />
        <figcaption className="text-sm text-gray-500">These are the screenshots</figcaption>
      </figure>
      <figure>
        <img src={photo2} alt="Playlist screenshot 2" className="w-full h-auto rounded shadow" />
      </figure>
      <figure>
        <img src={photo3} alt="Playlist screenshot 3" className="w-full h-auto rounded shadow" />
      </figure>
      <figure>
        <img src={photo4} alt="Playlist screenshot 4" className="w-full h-auto rounded shadow" />
      
      </figure>
    </div>

    <figure className="mb-4">
      <img src={img4} alt="Screenshotty app demo showing playlist creation" />
      <figcaption className="text-sm text-gray-500">This is what was generated</figcaption>
    </figure>


    <div className="mb-6">
      <p className="mb-2">
        <strong>Spotify Playlist:</strong>{" "}
        <a 
          href="https://open.spotify.com/playlist/2vKO7RqxLRxVWdmTpNGvjD" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-phthalo-green-500 hover:underline"
        >
          View on Spotify
        </a>
      </p>
      <p>
        <strong>Code:</strong>{" "}
        <a 
          href="https://github.com/abhishek-sankar/spotify-screenshot-to-playlist" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-phthalo-green-500 hover:underline"
        >
          GitHub Repository
        </a>
      </p>
    </div>
  </article>
);
