import blg1 from "../images/blg1.png";
import blg2 from "../images/blg2.png";
import blg3 from "../images/blg3.png";
import blg4 from "../images/blg4.png";
import blg5 from "../images/blg5.png";
import blg6 from "../images/blg6.png";
import Image, { StaticImageData }  from "next/image";


interface Blogs {
  id: number;
  title: string;
  category: string[];
  comments: string;
  description: string;
  highlights: string;
  lower: string;
  bneath: string;
  image: StaticImageData;
}

const blogs:Blogs[] = [
  {
    id: 1,
    title: "Beautiful aurora in the sky over the city, a spectacular sight.",
    category: ["sight", "views", "nature"],
    comments: "3",
    description: "The night sky lit up with a stunning aurora, casting waves of green, purple, and pink light over the city. The vibrant colors moved gracefully, shifting and swirling across the horizon, creating a surreal, magical atmosphere. It felt as though the universe was putting on a performance, turning the night into something extraordinary. The entire city seemed to pause, captivated by the natural beauty unfolding above.",
    highlights: "People gathered in open spaces, on rooftops, and along streets, all looking up in awe. The usual distractions of city life faded away as everyone focused on the sky. Cameras and phones tried to capture the display, but no image could truly convey the breathtaking sight of the aurora in person. The colors seemed alive, moving in harmony with the stars, filling the night with a sense of wonder and mystery. It was a scene that drew people together, united in their amazement at the rare event.",
    lower: "The city itself took on a new, softer glow under the aurora. The bright lights of buildings and streets seemed dim compared to the brilliance overhead. Cars slowed, and people stood still, mesmerized by the colors. It was as though the city had quieted, giving full attention to the display in the sky. Strangers exchanged smiles, sharing in the beauty of the moment as the aurora continued its celestial dance",
    bneath: "As the night went on, the colors gradually began to fade. The waves of light that had once dominated the sky slowly retreated, returning the night to its normal, starry calm. Even as the aurora disappeared, the memory of its beauty lingered in the minds of those who had seen it. The event left a lasting impression, a reminder of the wonders of nature, offering a rare glimpse of magic in the midst of everyday life. People stood quietly for a while longer, still gazing at the sky as if hoping for one last burst of color. There was a shared understanding that they had experienced something rare and special—something that would stay with them long after the lights had faded. The night sky returned to its normal state, but the awe and wonder of the moment continued to resonate. It was a powerful reminder of the natural worlds beauty and mystery, showing that even in the midst of our everyday lives, there are moments of pure magic that can leave a lasting impression. For those who had been lucky enough to see it, the aurora would be a cherished memory, a brief yet unforgettable glimpse of natures extraordinary powers.",
    image: blg1
  },
{
  id: 2, // Assuming this is the second blog entry
  title: "Life is as free as eagles soaring high, or is it just endless loneliness?",
  category: ["life", "philosophy", "emotions"], // Inferred categories
  comments: "03", // Taken from your component's display
  description: "Life can feel as free as eagles soaring high, with moments full of adventure, excitement, and endless possibilities. In these moments, we experience a sense of liberation and joy that seems to lift us above any obstacles. The world is full of opportunities, and it feels as though we have no boundaries, capable of achieving anything. The freedom we feel in these times is exhilarating, allowing us to embrace each new experience without hesitation. This sense of openness makes the world seem vast and full of potential, with the winds of possibility beneath us.",
  highlights: "However, life is not always about soaring high. There are moments when it feels like an endless stretch of loneliness, where the vastness of the world can feel empty and disconnected. In these times, the noise of everyday life fades, and we may feel isolated, as though the freedom we once experienced is slipping away. Loneliness can make the world feel smaller, and the weight of being alone can overshadow the excitement of the highs. The moments of solitude can bring deep introspection, but they can also be disorienting and challenging, leaving us questioning our purpose.",
  lower: "Despite these contrasting emotions, life is about finding a balance between freedom and solitude. The interplay between these two forces helps us grow and evolve. While moments of freedom give us the energy to explore and create, the times of loneliness allow us to reflect, recharge, and reconnect with ourselves. Its during these quieter times that we uncover the strength to move forward, guiding us to appreciate the highs more fully and navigate the lows with grace.",
  bneath: "In the end, life is not just about the soaring highs or the deep lows. Its about learning to embrace both. The beauty of life lies in the balance between these extremes, shaping us into more complete individuals. Both freedom and loneliness offer lessons, and by accepting them, we unlock a deeper understanding of who we are and our place in the world.",
  image: blg2 // Using the imported blg2 image
},

{
  id: 3, // Assuming this is the third blog entry
  title: "Unique architectural designs but not lacking in solid structure",
  category: ["architecture", "design", "innovation"], // Inferred categories
  comments: "03",
  description: "Unique architectural designs blend creativity with function, transforming spaces into works of art while maintaining a solid structural foundation. These designs are often a reflection of both cultural influences and modern innovation, creating structures that stand out for their originality. From sweeping curves to sharp angles, the architecture pushes the boundaries of what is traditionally seen, offering fresh perspectives on how we view buildings and spaces. However, despite the artistic flair, the importance of a strong, reliable structure is never compromised.",
  highlights: "In designing these remarkable structures, architects carefully balance aesthetics with engineering principles. While the exterior may feature bold, unconventional forms, the internal structure is built to withstand the forces of nature and everyday wear. Materials are selected not only for their visual appeal but also for their durability and strength. Steel, concrete, glass, and wood are often used in combination, allowing the architect to create something visually striking while ensuring the buildings safety and longevity.",
  lower: "The challenge in creating such designs lies in integrating beauty and function. Architects often have to think outside the box, using cutting-edge technology and innovative techniques to realize their vision without sacrificing stability. From the iconic, twisting towers of skyscrapers to residential homes with complex, angular facades, these designs show that architecture is not just about the building itself, but about the experience it offers to its inhabitants. Spaces are made to feel open, fluid, and dynamic, offering an immersive environment while still being safe and secure.",
  bneath: "What makes these designs truly special is their ability to break from traditional patterns while still adhering to the laws of engineering. The result is a built environment that inspires, elevates, and endures. These unique structures serve as testaments to human creativity and ingenuity, offering both beauty and stability for generations to come. Ultimately, the fusion of artistic vision and sound construction principles ensures that these buildings will remain relevant, functional, and admired for years into the future.",
  image: blg3
},

{
  id: 4, // Assuming this is the fourth blog entry
  title: "The sky dances with colors at dusk, is it beauty or a fading dream?",
  category: ["nature", "dusk", "contemplation"], // Inferred categories
  comments: "03",
  description: "As the sun dips below the horizon, the sky comes alive, dancing with hues of orange, pink, and purple. The colors blend and shift in a breathtaking display, filling the sky with a vibrant energy that seems to tell a story. This moment, fleeting and transient, holds a kind of magic that feels both real and dreamlike. The colors, intense yet soft, appear to paint the sky with strokes of wonder. The scene can evoke a sense of awe, as if the heavens are putting on a show, offering a visual feast for anyone fortunate enough to witness it. But beneath the beauty, there lies a question — is this brilliance truly a beauty, or is it simply a fading dream?",
  highlights: "The sky at dusk has always held a sense of mystery. It is a moment where day and night meet, and time seems to slow down. The colors appear to be alive, constantly changing, reminding us of the impermanence of each day. Its as if the sky is bidding farewell to the sunlight, offering one last display before the night takes over. This transition feels like a dream in itself, where the lines between reality and imagination blur. One cant help but wonder if this dazzling array of colors is something real or just a beautiful illusion, destined to fade away as the evening sets in.",
  lower: "Yet, this fleeting beauty is what makes it special. The briefness of the moment adds to its allure. Its a reminder that all things, no matter how beautiful, are temporary. The sky at dusk doesnt need to last forever to leave an impression. In its short-lived grandeur, it touches something deep within us — the realization that beauty is often found in moments that pass us by, leaving only the memory behind.",
  bneath: "As the last colors of the sky fade into the night, we are left with the feeling of having witnessed something rare, something that exists between the boundaries of beauty and a fading dream. Its this ephemeral nature that makes dusk so captivating. The sky, with its ever-changing palette, reminds us that beauty doesnt always need to endure; sometimes, it is enough to simply be.",
  image: blg4
},

{
  id: 5,
  title: "Clouds drift aimlessly across the blue, is it freedom or endless wandering?",
  category: ["nature", "philosophy", "contemplation"],
  comments: "03",
  description: "The clouds drift aimlessly across the vast blue sky, their shapes constantly changing, moving without destination. Some appear fluffy and serene, others dark and brooding. Their soft, slow journey evokes a sense of freedom, as if they are untethered, floating on a gentle breeze. Theres no rush, no obligation—just a tranquil, effortless movement through the endless expanse. In moments like these, its easy to imagine that the clouds embody a kind of pure freedom, unburdened by time or purpose, just existing in the flow of the atmosphere.",
  highlights: "Yet, theres also something poignant about their endless wandering. Unlike birds that seem to soar with intent or airplanes that follow clear paths, clouds appear to move without direction. They are swept by the wind, always changing, but never truly arriving anywhere. Is this freedom, or is it a kind of aimless existence? The clouds seem to drift from one moment to the next, never lingering, never truly rooted. Theres a certain beauty in their journey, but also an underlying sadness, as though they are constantly searching for something they can never find.",
  lower: "In the quiet, vast expanse of the sky, the clouds reflect a part of us all—the desire to move freely, to explore, to be unconfined. But the question lingers: is this freedom or just an endless wandering with no clear end in sight? Freedom is often seen as purposeful, with the ability to choose a path, to determine ones direction. The clouds, however, seem to lack that agency. They are caught in the current of the wind, carried from place to place, without ever having the chance to decide their destination. In this sense, their wandering feels less like freedom and more like an endless search, a journey with no end, a quiet longing for something more.",
  bneath: "As the clouds continue their slow drift across the sky, we are left to ponder the nature of their existence. Are they truly free, or are they just drifting endlessly, carried by forces beyond their control? Maybe, in the end, the beauty lies in the ambiguity. They remind us that freedom, in its purest form, can sometimes be as uncertain and elusive as the clouds themselves.",
  image: blg5
},
{
id: 6,
  title: "A child sits wide-eyed before the screen, is it wonder or a world lost to pixels?",
  category: ["technology", "childhood", "modern_life"],
  comments: "03",
  description: "A child sits wide-eyed before the screen, the soft glow illuminating their face as they are drawn into the world unfolding in front of them. Their eyes sparkle with wonder, captivated by the images, colors, and movements that shift before them. For a moment, it seems as though time stands still, and the child is lost in a realm of endless possibilities. The screen offers a universe of learning, entertainment, and discovery, sparking the imagination and curiosity of a young mind. Its a magical moment, where every swipe, click, and tap opens a new door to a world they have never seen before. In this moment, its hard to deny the beauty of that wonder—a wonder that only a child, untainted by the complexities of life, can fully experience.",
  highlights: "But as the minutes and hours pass, one begins to wonder: is this wonder, or is it something deeper—perhaps a world lost to pixels? The screen, with its endless stream of images and sounds, becomes an all-encompassing force. The child, once immersed in the magic of play and discovery, is now disconnected from the physical world around them. Their attention, once so focused on the tangible things of life, is now held captive by the flickering pixels. The real world—its textures, sounds, and sensations—seems to fade into the background as the digital realm pulls them in further. The innocent wonder that once sparkled in their eyes begins to blur with the constant consumption of content, leaving behind a sense of detachment from the present moment.",
  lower: "As the child continues to stare at the screen, a question lingers: Is this wonder, or is it a loss of connection to the world beyond the pixels? The question is not one of blame, but rather of understanding. Technology has brought about incredible advancements and opportunities for growth, but it has also created a world where reality is often overshadowed by the artificial. In this delicate balance, the screen becomes both a window to new experiences and a barrier, separating the child from the beauty of the world outside. The wonder is still there, but its hidden behind the glow of the pixels, waiting to be rediscovered.",
  bneath: "As the childs gaze remains fixed on the screen, the world around them continues to move on. The sound of laughter, the rustle of leaves in the wind, the touch of a loved ones hand—all these real, tangible experiences fade into the background, replaced by the artificial stimulation of the digital world. The childs interactions become more focused on whats happening on the screen than on the vibrant life unfolding just beyond it. Theres a subtle shift, a quiet transformation, as the boundary between the real and the virtual begins to blur. The wonder is still there, but the depth of connection to the outside world begins to wane, replaced by the allure of the endless, captivating digital landscape. Its a delicate moment of change—one that calls for reflection on how we, as a society, navigate the balance between wonder and detachment, engagement and escape.",
  image: blg6
}


  
]

export default blogs
