// ===== EventCard Component =====
function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center p-6 bg-gray-50">
          <img src={event.certificateImage} alt={event.title} className="rounded-lg max-h-64 shadow-md" />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
          <p className="text-gray-600 mb-1">Organized by {event.organization}</p>
          <p className="text-gray-500 text-sm mb-3">{event.date}</p>
          <p className="text-gray-600">{event.description}</p>
        </div>
      </div>
    </div>
  );
}


export default EventCard;