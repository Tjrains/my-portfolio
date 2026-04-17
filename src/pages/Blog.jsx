import { Link } from "react-router-dom";
import "../Blog.css";

import Yerb from "../assets/Yerb.jpg";
import DeathValley from "../assets/DeathValley.jpg";
import GCanyon from "../assets/GCanyon.jpg";
import RedRocks from "../assets/RedRocks.jpg";
import Waterfall from "../assets/Waterfall.jpg";
import BCanyon from "../assets/BCanyon.jpg";

const posts = [
  {
    id: 1,
    slug: "yerb-break",
    title: "Yerb Break",
    image: Yerb,
    shortDescription: "A quick stop before the sand dunes for caffeine and a cool photo.",
    fullDescription:
      "The first day was a long drive from San Marcos to Death Valley. We left at 3 in the morning," +
      " which meant I was pretty exhausted since night driving is not my forte. To get through the trip," +
      " I grabbed one of my new favorite drinks, a Yerb. We stopped at the gift shop just before the sand dunes," +
      " and I figured it would be a fun place to take a cool photo with it in the sand. After some time in the sand" +
      " we moved to the main part of Death Valley, which is recounted in the next image."
  },
  {
    id: 2,
    slug: "death-valley",
    title: "Death Valley",
    image: DeathValley,
    shortDescription: "Exploring the desert and the odd things found there.",
    fullDescription:
      "Death Valley was the first park on the list for my spring break trip and one I had never been to before. We stopped at a" +
      " view viewpoints and saw some cool things like how they used to refine Borax. It was interesting to see the giant boiler there" +
      " and learn about how they used the land before it became a protected national park. We stopped at the Visitor Center to check out" +
      " some information and so I could get an important pin, I am making a wooden map poster and sticking pins in the national parks I" +
      " have been to. We then drove to Badwater, which is a massive salt flat that suprising had a little bit of water in it. I even tasted" + 
      " a bit of the salt, and it indeed was salty."
    },
  {
    id: 3,
    slug: "red-rocks",
    title: "Red Rocks",
    image: RedRocks,
    shortDescription: "Unique colored formations and my favorite climbing location",
    fullDescription:
      "The first day of the trip also involved a visit to Red Rocks Canyon, a stunning place to visit and is not far from Vegas if" +
      " you are ever in the area. The visitor center is really nice and has one of the best outdoor education centers I have seen." +
      " I have been to this canyon before because it is also a very well known rock climbing area and I came here with the CSUSM" +
      " climbing club a year ago. The sandstone is not only beautifully colored, but is also my favorite material to climb on because" +
      " of the smooth texture. During this trip it was just a quick pitstop, while we made our way to Zion/Bryce Canyon"
    },
  {
    id: 4,
    slug: "bryce-canyon",
    title: "Bryce Canyon",
    image: BCanyon,
    shortDescription: "An amazing view and examples of the longest living trees on the planet.",
    fullDescription:
      "After camping for the night we made it up to Zion, but I have been before and its not my favorite park because of the crowds. However" +
      " Bryce Canyon is a much better place to visit in my opinion if you are in the lower Utah area. I seem to always get there during" +
      " or just after the snow season, so it is quite cold up and I never seem to bring the right cold weather clothes despite knowing this." +
      " This means the hike is usually a short trip, but luckily the Bristlecone Pines aren't a long walk from the parking loop. While the" +
      " Bristlecone Pines here aren't the oldest (that luxury goes to the Great Basin Bristlecone Pines); they are a prime example of what" +
      " the species can look like. These trees coupled with the strange Hoodoos, the tall rock sculptures, make this place always nice to visit."
  },
  {
    id: 5,
    slug: "grand-canyon",
    title: "Grand Canyon",
    image: GCanyon,
    shortDescription: "A view that is hard to take in and even harder to capture with photos",
    fullDescription:
      "At the end of day two we made it to Page Arizona, we got some green chile burgers at a drive through dinner then stopped to eat in the park." +
      " After staying the night at a motel we started the drive to the South Rim of the Grand Canyon, we debated going to the North rim but after" +
      " the recent fire there we opted to skip it. We stopped at Desert View Watchtower, sadly we did not visit the top of the tower because it was" +
      " an hour wait to go up and figured we'd just make our way to other vistas. We visited the visitor center and also went to a geology musuem" +
      " that showed all the layers that formed the canyon and the timelines for it."
  },
  {
    id: 6,
    slug: "tonto-natural-bridge",
    title: "Tonto Natural Bridge",
    image: Waterfall,
    shortDescription: "Hands down the favorite spot of the trip, rain while under rock is insane.",
    fullDescription:
      "After grand canyon we some how made it all the way down to Tonto Forest at 3pm, luckily they stayed open till 5pm so we did have to go through" +
      " the park a bit faster than I would have liked. Sadly the visitor centers registers were down so I could not buy any merch from the shop," +
      " regardless we drove down to the parking lot. The parking lot had day camping that I would love to come back to because the view was amazing." +
      " We followed a long trail down to where the arch actually is, what makes this arch so unique is that it is made from limestone and travertine." +
      " It was formed when a river ran through it making the original hole then the stream that runs over the top allowed for water to make its way" +
      " through the limestone forming travertine as it dripped out from the rock itself. Being underneath the arch was nothing like I had ever experience" +
      " because it was like there was rain while underneath, it also formed pools of water that I wish they allowed people to swim in. After hiking" +
      " through the rest of the arch the view from behind the arch was still amazing. We made it up to the car before 5pm and were able to leave, then" +
      " we drove all the way back to San Marcos; making it back around midnight."
  },
];

function Blog() {
  return (
    <main className="blog-page">
      <h2>My Blog</h2>
      <p className="blog-subtitle">
        Welcome to my blog! This is where I’ll document my spring break adventures.
      </p>

      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.id}>
            <Link to={`/blog/${post.slug}`} className="blog-image-link">
              <img className="blog-card-image" src={post.image} alt={post.title} />
            </Link>

            <div className="blog-card-content">
              <h3>{post.title}</h3>
              <p>{post.shortDescription}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Blog;
export { posts };