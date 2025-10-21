function VideoCard({ title, description, url }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <iframe
        width="100%"
        height="200"
        src={url}
        title={title}
        frameBorder="0"
        allowFullScreen
        className="rounded-md mb-3"
      ></iframe>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default VideoCard;
