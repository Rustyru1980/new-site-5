import { Permissions, webMethod } from "wix-web-module";
import { fetch } from 'wix-fetch';

export async function getDetailedPlan(location) {
  const url = 'https://ai-trip-planner.p.rapidapi.com/detailed-plan';

  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'f59aa3c3fcmsh2a7703aed0f68a1p11a471jsn550ee28e41e6',
      'x-rapidapi-host': 'ai-trip-planner.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      days: 4,
      destination: location, // You can pass "London" or any dynamic input
      interests: [
        'fine dining',
        'cuisine'
      ],
      budget: 'medium',
      travelMode: 'public transport'
    })
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("API call failed");

    const result = await response.json();
    return result?.itinerary || []; // returns array of day plans
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
