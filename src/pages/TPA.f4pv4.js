import { getDetailedPlan } from 'backend/rapidApi.js';

$w.onReady(function () {
  $w("#getItineraryButton").onClick(async () => {
    const location = $w("#locationInput").value.trim();
    if (!location) return;

    $w("#getItineraryButton").label = "Loading...";

    try {
      const itinerary = await getDetailedPlan(location);

      const formatted = itinerary.map((day, index) => ({
        dayTitle: `Day ${index + 1}`,
        dayDescription: day.day_plan
      }));

      $w("#itineraryRepeater").data = formatted;

      $w("#itineraryRepeater").onItemReady(($item, itemData) => {
        $item("#dayTitle").text = itemData.dayTitle;
        $item("#dayDescription").text = itemData.dayDescription;
      });

    } catch (err) {
      console.error("Failed to load itinerary:", err);
    }

    $w("#getItineraryButton").label = "Get My 3-Day Plan";
  });
});
