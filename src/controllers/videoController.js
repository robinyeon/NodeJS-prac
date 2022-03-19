const videos = [
  {
    title: "Video 1",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 200,
    id: 1,
  },
  {
    title: "Video 2",
    rating: 4,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 100,
    id: 2,
  },
  {
    title: "Video 3",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 20,
    id: 3,
  },
];

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const see = (req, res) =>
  res.render("watch", { pageTitle: "Watch Video" });

export const edit = (req, res) =>
  res.render("edit", { pageTitle: "Edit Video" });

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload video");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete video");
};
