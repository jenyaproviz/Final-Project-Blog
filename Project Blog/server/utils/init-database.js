import Comment from "../models/Comment.js";
import User from "../models/User.js";
import Post from "../models/Post.js";
import bcrypt from "bcrypt";

const initializeDatabase = async () => {
  try {
    // Create three users
    const user1 = await User.create({
      username: "user1",
      password: await bcrypt.hash("password1A@", 10),
      isAdmin: false,
    });

    const user2 = await User.create({
      username: "user2",
      password: await bcrypt.hash("password2B@", 10),
      isAdmin: false,
    });

    const admin = await User.create({
      username: "admin",
      password: await bcrypt.hash("Admin@123456", 10),
      adminCode: "admin",
      isAdmin: true,
    });

    // Create the first post for user1
    const post1 = await Post.create({
      username: user1.username,
      title: "Arashiyama Bamboo Grove, Japan",
      text: "Every traveler should experience the ethereal glow and seemingly endless heights of this bamboo grove on the outskirts of Kyoto. The experience even extends beyond the visual realm: In 1996, Japan’s Ministry of the Environment included the sounds here—wood creaking, leaves rustling—as one of the top 100 Soundscapes of Japan.",
      imgUrl: "../uploads/Arashiyama-Japan.webp",
      author: user1, // Use user1 object as the author
    });

    // Create three comments for the first post
    const comments1 = await Comment.create([
      {
        comment:
          "Arashiyama (嵐山) is a pleasant, touristy district in the western outskirts of Kyoto. The area has been a popular destination since the Heian Period (794-1185), when nobles would enjoy its natural setting. Arashiyama is particularly popular during the cherry blossom and fall color seasons.",
        author: user1, // Use user1 object as the author
      },
      {
        comment:
          "An additional section of the grove extends to nearby Nonomiya Shrine, where daughters from the Imperial family used to purify themselves before becoming shrine maidens at Ise Jingu, regarded as the most important shrine in Japan.",
        author: user1, // Use user1 object as the author
      },
      {
        comment:
          "Nonomiya Shrine may be quite busy with yukata-clad young women who come here to pray for a love match, while thick-calved rickshaw drivers pause to explain a bit of history to their riders.",
        author: user1, // Use user1 object as the author
      },
    ]);

    // Attach comments to the first post
    post1.comments = comments1.map((comment) => comment._id);

    // Save the changes
    await post1.save();

    // Create the second post for user2
    const post2 = await Post.create({
      username: user2.username,
      title: "The Azores, Portugal",
      text: "Roughly 900 miles off the coast of Lisbon, this Portuguese archipelago can inspire wanderlust with a single photo. The verdant valleys, steep oceanside cliffs, rows of blue hydrangeas, and scattering of waterfalls make the Azores a paradise worth exploring. Just make sure you visit before everyone you know beats you to it.",
      imgUrl: "../uploads/Azores.webp",
      author: user2, // Use user2 object as the author
    });

    // Create three new comments for the second post
    const comments2 = await Comment.create([
      {
        comment:
          "In the Western group, on the island of Flores, the beauty of the natural waterfalls and lakes carved out by volcanoes is dazzling. The tiny island of Corvo has a broad, beautiful crater at its centre, and attracts many species of birds coming from both Europe and America.",
        author: user2, // Use user2 object as the author
      },
      {
        comment:
          "These are the Azores. Nine islands, nine small worlds that have as many similarities as differences, but where the friendliness of their inhabitants is shared by all.",
        author: user2, // Use user2 object as the author
      },
      {
        comment:
          "In the Central Group, the islands of Terceira, São Jorge, Pico, Faial and Graciosa are set harmoniously in the deep blue sea, where whales and dolphins can be spotted, to the delight of visitors. On Terceira, the World Heritage town of Angra do Heroísmo, as well as its festivals, is steeped in history. Faial is the cool blue of the hydrangeas, the marina painted colourfully by yachtsmen from all over the world and the extinct Capelinhos volcano, which resembles a lunar landscape. In front is Pico, a mountain that emerges from the sea, with vineyards planted in black lava fields, a unique culture that also has World Heritage status. On São Jorge, the highlights are the Fajãs and the cheese, a unique specialty with an unmistakable flavour. Graciosa, graceful in both name and appearance, is an island of green fields covered with vineyards that contrast with its peculiar windmills.",
        author: user2, // Use user2 object as the author
      },
    ]);

    // Attach new comments to the second post
    post2.comments = comments2.map((comment) => comment._id);

    // Save the changes
    await post2.save();

    // Create the third post for admin
    const post3 = await Post.create({
      username: admin.username,
      title: "Saint-Tropez, France",
      text: "The small fishing village of Saint-Tropez became a glamorous seaside resort in the 1950s. Yet the town has retained its historic Provençal character, seen in the pastel-painted houses and tree-shaded squares. Opportunities for stunning photos abound at the yacht-filled harbor, within La Ponche (the original village) and at dazzling beaches.",
      imgUrl:
        "../uploads/france-in-pictures-beautiful-places-to-photograph-st-tropez-street.jpg",
      author: admin,
    });

    // Create three comments for the third post
    const comments3 = await Comment.create([
      {
        comment:
          "Saint-Tropez was a military stronghold and fishing village until the beginning of the 20th century. It was the first town on its coast to be liberated during World War II as part of Operation Dragoon. After the war, it became an internationally known seaside resort, renowned principally because of the influx of artists of the French New Wave in cinema and the Yé-yé movement in music. It later became a resort for the European and American jet set and tourists.",
        author: admin,
      },
      {
        comment:
          "The town owes its current name to the early martyr Saint Torpes. Legend tells of his decapitation at Pisa during Nero's reign, with his body placed in a rotten boat along with a rooster and a dog. The body landed at the present-day location of the town of Saint-Tropez.",
        author: admin,
      },
      {
        comment:
          "Toward the end of the ninth century, long after the fall of the Roman Empire in the West, pirates and privateers began a hundred years of attacks and sackings. In the tenth century, the village of La Garde-Freinet was founded 15 km (9 mi) to the north of Saint-Tropez. From 890 to 972, Saint-Tropez and its surroundings became an Arab Muslim colony dominated by the nearby Saracenic settlement of Fraxinet;[10][11] in 940, Saint-Tropez was controlled by Nasr ibn Ahmad.[11] From 961 to 963, Adalbert, son of Berengar, the pretender to the throne of Lombardy who was pursued by Otto I, hid at Saint-Tropez.[11] In 972, the Muslims of Saint-Tropez held Maïeul, the abbot of Cluny, for ransom.",
        author: admin,
      },
    ]);

    // Attach comments to the first post
    post3.comments = comments3.map((comment) => comment._id);

    // Save the changes
    await post3.save();

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error.message);
    throw error;
  }
};

export default initializeDatabase;
