// src/Components/VideoGrid.jsx
import Categories from "../Categories";
import VideoCard from "../cards/VideoCard";

export default function VideoGrid() {
  // Dummy video data (replace with API call later)
  const videos = [
    {
      id: 1,
      title: "Amazing Nature",
      thumbnail:
        "https://media.istockphoto.com/id/2118058845/photo/portrait-of-two-male-engineers-looking-at-the-camera-and-the-thumbnails-of-their-successful.webp?a=1&b=1&s=612x612&w=0&k=20&c=j8Sq93YFyKz8Po8ydFGezLgEADqcTWrrwPzQeYrVYYM=",
      hoverThumbnail:
        "https://media.istockphoto.com/id/2118058845/photo/portrait-of-two-male-engineers-looking-at-the-camera-and-the-thumbnails-of-their-successful.webp?a=1&b=1&s=612x612&w=0&k=20&c=j8Sq93YFyKz8Po8ydFGezLgEADqcTWrrwPzQeYrVYYM=",
      channel: "Nature Channel",
      views: "1M views",
      published: "1 week ago",
    },
    {
      id: 2,
      title: "Best Footballers in World",
      thumbnail:
        "https://media.istockphoto.com/id/1865900831/photo/male-football-player-kicking-ball.jpg?s=612x612&w=0&k=20&c=VZPlykhQdRI_eJ-2BQZNgpT8xHkBSU1d62VvjpbTqHs=",
      hoverThumbnail:
        "https://media.istockphoto.com/id/1865900831/photo/male-football-player-kicking-ball.jpg?s=612x612&w=0&k=20&c=VZPlykhQdRI_eJ-2BQZNgpT8xHkBSU1d62VvjpbTqHs=",
      channel: "Tech Guru",
      views: "500K views",
      published: "2 days ago",
    },
    {
      id: 3,
      title: "Cooking with Love",
      thumbnail:
        "https://media.istockphoto.com/id/1560609530/photo/indian-girl-preparing-food-magnificent-young-woman-preparing-delicious-home-cooked.jpg?s=612x612&w=0&k=20&c=HopfqmGV4CFzH8GkzDUu_hyF37pRuba-K-AVx1bLFKM=",
      hoverThumbnail:
        "https://media.istockphoto.com/id/1560609530/photo/indian-girl-preparing-food-magnificent-young-woman-preparing-delicious-home-cooked.jpg?s=612x612&w=0&k=20&c=HopfqmGV4CFzH8GkzDUu_hyF37pRuba-K-AVx1bLFKM=",
      channel: "Chef's Special",
      views: "750K views",
      published: "3 weeks ago",
    },
    {
      id: 4,
      title: "Travel Vlog: Japan",
      thumbnail:
        "https://media.istockphoto.com/id/1004186904/photo/the-african-man-basketball-player-jumping-with-ball.jpg?s=612x612&w=0&k=20&c=QW_fdTSTDC1DZXbTkhrhWqLsnpcoq_yoV6ECUMBtkiw=",
      hoverThumbnail:
        "https://media.istockphoto.com/id/1004186904/photo/the-african-man-basketball-player-jumping-with-ball.jpg?s=612x612&w=0&k=20&c=QW_fdTSTDC1DZXbTkhrhWqLsnpcoq_yoV6ECUMBtkiw=",
      channel: "Wanderlust",
      views: "2M views",
      published: "1 month ago",
    },
    {
      id: 5,
      title: "Cooking with Love",
      thumbnail:
        "https://media.istockphoto.com/id/1560609530/photo/indian-girl-preparing-food-magnificent-young-woman-preparing-delicious-home-cooked.jpg?s=612x612&w=0&k=20&c=HopfqmGV4CFzH8GkzDUu_hyF37pRuba-K-AVx1bLFKM=",
      hoverThumbnail:
        "https://media.istockphoto.com/id/1560609530/photo/indian-girl-preparing-food-magnificent-young-woman-preparing-delicious-home-cooked.jpg?s=612x612&w=0&k=20&c=HopfqmGV4CFzH8GkzDUu_hyF37pRuba-K-AVx1bLFKM=",
      channel: "Chef's Special",
      views: "750K views",
      published: "3 weeks ago",
    },
    {
      id: 6,
      title: "Travel Vlog: Japan",
      thumbnail:
        "https://media.istockphoto.com/id/1004186904/photo/the-african-man-basketball-player-jumping-with-ball.jpg?s=612x612&w=0&k=20&c=QW_fdTSTDC1DZXbTkhrhWqLsnpcoq_yoV6ECUMBtkiw=",
      hoverThumbnail:
        "https://media.istockphoto.com/id/1004186904/photo/the-african-man-basketball-player-jumping-with-ball.jpg?s=612x612&w=0&k=20&c=QW_fdTSTDC1DZXbTkhrhWqLsnpcoq_yoV6ECUMBtkiw=",
      channel: "Wanderlust",
      views: "2M views",
      published: "1 month ago",
    },
    {
      id: 7,
      title: "Best Footballers in World",
      thumbnail:
        "https://media.istockphoto.com/id/1865900831/photo/male-football-player-kicking-ball.jpg?s=612x612&w=0&k=20&c=VZPlykhQdRI_eJ-2BQZNgpT8xHkBSU1d62VvjpbTqHs=",
      hoverThumbnail:
        "https://media.istockphoto.com/id/1865900831/photo/male-football-player-kicking-ball.jpg?s=612x612&w=0&k=20&c=VZPlykhQdRI_eJ-2BQZNgpT8xHkBSU1d62VvjpbTqHs=",
      channel: "Tech Guru",
      views: "500K views",
      published: "2 days ago",
    },
    {
      id: 8,
      title: "Best Footballers in World",
      thumbnail:
        "https://media.istockphoto.com/id/1865900831/photo/male-football-player-kicking-ball.jpg?s=612x612&w=0&k=20&c=VZPlykhQdRI_eJ-2BQZNgpT8xHkBSU1d62VvjpbTqHs=",
      hoverThumbnail:
        "https://media.istockphoto.com/id/1865900831/photo/male-football-player-kicking-ball.jpg?s=612x612&w=0&k=20&c=VZPlykhQdRI_eJ-2BQZNgpT8xHkBSU1d62VvjpbTqHs=",
      channel: "Tech Guru",
      views: "500K views",
      published: "2 days ago",
    },
  ];
  const categories = ["All", "Nature", "Tech", "Cooking", "Travel"];

  return (
    <div className="px-4  flex flex-col gap-4">
      <div className="flex items-center justify-start gap-4 py-2 ">
        {categories.map((category) => (
          <Categories key={category} text={category} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
