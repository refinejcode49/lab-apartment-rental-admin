import React, { useState } from "react";
import PropertyList from "../assets/listings.json";
import { Navbar } from "./Navbar";

const AddProperty = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [neighbordOverview, setNeighbordOverview] = useState("");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [propertyType, setPropertyType] = useState(
    "--Choose a property type--"
  );
  const [roomType, setRoomType] = useState("--Choose a room type--");
  const [numBathroom, setNumBathroom] = useState("");
  const [numBedroom, setNumBedroom] = useState("");
  const [numBedPerRoom, setNumBedPerRoom] = useState("");
  const [amenities, setAmenities] = useState("");
  const [price, setPrice] = useState("0");
  const [minNight, setMinNight] = useState("");
  const [maxNight, setMaxNight] = useState("");
  const [availability, setAvailability] = useState(false);

  const amenitiesArr = [
    "Fire extinguisher",
    "Extra pillows and blankets",
    "Shampoo",
    "Air conditioning",
    "First aid kit",
    "Dishes and silverware",
    "Microwave",
    "TV",
    "Oven",
    "Washer",
    "Hangers",
    "Pocket wifi",
    "Lock on bedroom door",
    "Hot water",
    "Wifi",
    "Cooking basics",
    "Free parking on premises",
    "Iron",
    "Hair dryer",
    "Elevator",
    "Essentials",
    "Refrigerator",
    "Bed linens",
    "Kitchen",
    "Coffee maker",
    "Heating",
    "Luggage dropoff allowed",
    "Host greets you",
    "Stove",
    "Room-darkening shades",
    "Central air conditioning",
    "Coffee maker: Nespresso",
    "Paid parking garage on premises",
    "Long term stays allowed",
    "Heating - split type ductless system",
    "Dedicated workspace",
    "Cleaning available during stay",
    "Clothing storage",
    "Bathtub",
    "Private hot tub",
    "Private patio or balcony",
    "Dishwasher",
    "Ethernet connection",
    "Private entrance",
    "TV with standard cable",
    "Shower gel",
    "Body soap",
    "Hot water kettle",
    "Laundromat nearby",
    "Drying rack for clothing",
    "Paid parking off premises",
    "Smoke alarm",
    "Conditioner",
    "AC - split type ductless system",
    "Freezer",
    "Free washer u2013 In unit",
    "Dining table",
    "Free dryer u2013 In unit",
    "Teka electric stove",
    "Cleaning products",
    "Crib",
    "Baking sheet",
    "Pack u2019n play/Travel crib",
    "Coffee",
    "Toaster",
    "Blender",
    "Clothing storage: closet and dresser",
    "Wine glasses",
    "Courtyard view",
    "Dryer",
    "City skyline view",
    "Childrenu2019s dinnerware",
    "Window AC unit",
    "Portable air conditioning",
    "Breakfast",
    "Smoking allowed",
    "Pets allowed",
    "Wifi u2013 31 Mbps",
    "Shared outdoor pool - available seasonally, open specific hours",
    "Single level home",
    "Free street parking",
    "Portable fans",
    "Clothing storage: closet",
    "Patio or balcony",
    "Carbon monoxide alarm",
    "Shared backyard u2013 Fully fenced",
    "Paid washer u2013 In unit",
    "Paid dryer u2013 In unit",
    "Beach access u2013 Beachfront",
    "Stainless steel oven",
    "High chair",
    "Outdoor shower",
    "Baby bath",
    "Books and reading material",
    "Fast wifi u2013 252 Mbps",
    "HDTV with standard cable",
    "Security cameras on property",
    "Childrenu2019s books and toys",
    "Paid parking on premises",
    "Bidet",
    "Mini fridge",
    "Clothing storage: closet and wardrobe",
    "Electric stove",
    "Childrenu2019s books and toys for ages 5-10 years old",
    "Teka  stainless steel oven",
    "Children's playroom",
    "Building staff",
    "Hot tub",
    "Self check-in",
    '53" HDTV with Netflix, DVD player',
    "Mosquito net",
    "Coffee maker: espresso machine",
    "Piano",
    "Keypad",
    "Radiant heating",
    "Barbecue utensils",
    "Fast wifi u2013 287 Mbps",
    "Bluetooth sound system",
    '50" HDTV with Amazon Prime Video, Netflix',
    "Otro induction stove",
    "Coffee maker: Keurig coffee machine, pour-over coffee",
    "Outdoor dining area",
    "Outdoor furniture",
    "Paid street parking off premises",
    "Balay refrigerator",
    "Washer u2013u00a0In unit",
    "Board games",
    "Instituto Espau00f1ol body soap",
    "Ceiling fan",
    "Clothing storage: walk-in closet and closet",
    "Paid parking lot off premises",
    "Alexa Bluetooth sound system",
    "Babysitter recommendations",
    "Standalone high chair - available upon request",
    "Whirlpool stainless steel induction stove",
    "Smart lock",
    "Crib - available upon request",
    "Paid crib - available upon request",
    '50" HDTV with Netflix, standard cable',
    "AEG electric stove",
    "Backyard",
    "Clothing storage: wardrobe",
    '30" HDTV with standard cable',
    "Fast wifi u2013 298 Mbps",
    "Pool",
    "Gym",
    "Paid pack u2019n play/travel crib - available upon request",
    "Coffee maker: drip coffee maker",
    "Paid parking garage on premises u2013 1 space",
    "Teka refrigerator",
    "Teka oven",
    "Private backyard",
    "Safe",
    "Shared pool",
    "Paid parking garage off premises",
    '32" HDTV with standard cable',
    "Coffee maker: french press",
    "Stainless steel gas stove",
    "Exercise equipment",
    '25" HDTV',
    "Fast wifi u2013 304 Mbps",
    "Garden view",
    "Central heating",
    '36" HDTV',
    "Clothing storage: closet, wardrobe, and dresser",
    "Shared backyard u2013 Not fully fenced",
    "JVC sound system with aux",
    '42" HDTV with standard cable',
    "Private gym in building",
    "Private BBQ grill: charcoal",
    "Mountain view",
    "Pool table",
    "Game console: Nintendo Wii",
    "Exercise equipment: elliptical, free weights",
    "Bosch induction stove",
    "Portable heater",
    "Paid high chair - available upon request",
    '32" HDTV with Chromecast',
    "BBQ grill",
    "Lockbox",
    "Single oven",
    "Coffee maker: espresso machine, Nespresso",
    "Hammock",
    "Legren body soap",
    "Legren conditioner",
    "Sun loungers",
    "Fast wifi u2013 521 Mbps",
    "Induction stove",
    "TV with standard cable, DVD player",
    "Pool view",
    "Other electric stove",
    "Private outdoor pool - available all year, open 24 hours",
    "Paid parking garage on premises u2013 20 spaces",
    "Paid crib - always at the listing",
    "Private backyard u2013 Fully fenced",
    '48" HDTV with standard cable',
    "Indesit refrigerator",
    "Free washer",
    "HDTV",
    "Coffee maker: pour-over coffee",
    "Paid parking garage on premises u2013 90 spaces",
    "Record player",
    '46" HDTV',
    "Babaria conditioner",
    "Clarel body soap",
    "Fagor gas stove",
    "Denon sound system with Bluetooth and aux",
    "Soft cu00edtricos y romero shampoo",
    "Bodyplus body soap",
    "Electrolux electric stove",
    '24" HDTV with DVD player',
    "Philips sound system with aux",
    "Fagor refrigerator",
    "Ikea stainless steel oven",
    "LG  Bluetooth sound system",
    "Bikes",
    '32" HDTV with Disney+, HBO Max, Amazon Prime Video, Apple TV, standard cable, Netflix',
    "Exercise equipment: yoga mat",
    "Shared gym nearby",
    "Dove body soap",
    "Envase de Champu00fa rellenable por razones mediambientales shampoo",
    "Coffee maker: Nespresso, pour-over coffee",
    "Paid clamp on table seat high chair - always at the listing",
    "Envase de Gel de ducha rellenable por razones medioambientales body soap",
    "Indoor fireplace",
    "Gas stove",
    "Yves Rocher body soap",
    "Fast wifi u2013 627 Mbps",
    "Teka  oven",
    "Haier refrigerator",
    "Teka gas stove",
    "Shared patio or balcony",
    "Bonte  conditioner",
    '40" HDTV with Fire TV, standard cable, Netflix',
  ];

  function handleCreateProperty(event) {
    event.preventDefault();
    const newPropertyToAdd = {
      name,
      description,
      neighbordOverview,
      image,
      country,
      city,
      neighborhood,
      propertyType,
      roomType,
      numBathroom,
      numBedroom,
      numBedPerRoom,
      amenities,
      price,
      minNight,
      maxNight,
      availability,
    };
    
  }

  function handleAmenity(e) {
    console.log("handle amenities");
    const { value, checked } = e.target;
    if (checked) {
        setAmenities([...amenities, value]);
    } else {
        setAmenities(amenities.filter((amenity) => amenity !== value));
    }
  }

  return (
    <form onSubmit={handleCreateProperty}>
      <span>Add a property</span>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name of the property"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type a description of the property"
          rows="5"
        ></textarea>
      </div>

      <div className="form-control">
        <label htmlFor="neighbourhood-overview">neighbourhood Overview</label>
        <textarea
          name="neighbourhood-overview"
          placeholder="Type the overview of the property neighbourhood"
          value={neighbordOverview}
          onChange={(e) => setNeighbordOverview(e.target.value)}
          rows="5"
        ></textarea>
      </div>

      <div className="form-control">
        <label htmlFor="image-url">Image URL</label>
        <input
          id="image-url"
          name="image"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <label>
        <input
          name="property-neighbourhood"
          type="text"
          placeholder="type the neighbourhood of the property"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
        />
      </label>

      <div className="form-control">
        <div>
          <input
            type="radio"
            id="private-room"
            name="room-type"
            placeholder="type of room"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          />
          <label htmlFor="room-type">Private room</label>
        </div>
      </div>

      <div className="form-control">
        <div>
          <input
            type="radio"
            id="entire-home"
            name="room-type"
            placeholder="type of room"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          />
          <label htmlFor="entire-home">Entire home</label>
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="num-of-bathroom">Bathroom(s)</label>
        <input
          id="num-of-bathroom"
          name="num-of-bathroom"
          type="number"
          value={numBathroom}
          onChange={(e) => setNumBathroom(e.target.value)}
          min="0"
        />
      </div>

      <div className="form-control">
        <label htmlFor="num-of-bedroom">Bedroom(s)</label>
        <input
          id="num-of-bedroom"
          name="num-of-bedroom"
          type="number"
          value={numBedroom}
          onChange={(e) => setNumBedroom(e.target.value)}
          min="0"
        />
      </div>

      <div className="form-control">
        <label htmlFor="num-of-bedroom-per-room">Bedroom(s)</label>
        <input
          id="num-of-bedroom-per-room"
          name="num-of-bedroom-per-room"
          type="number"
          value={numBedPerRoom}
          onChange={(e) => setNumBedPerRoom(e.target.value)}
          min="0"
        />
      </div>

      <label>
        Amenities:
        {amenitiesArr.map((oneAmenity, index) => {
          // console.log("Mapping : ", oneAmenity, index);
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={oneAmenity}
                onChange={handleAmenity}
                id={`amenity_${index}`}
                name={`amenity_${index}`}
              />
              <label htmlFor={`amenity_${index}`}>{oneAmenity}</label>
            </div>
          );
        })}
      </label>

      <div className="form-control">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="min-nights">Choose the minimum of nights</label>
        <select
          id="min-nights"
          name="min-nights"
          value={minNight}
          onChange={(e) => setMinNight(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">8</option>
          <option value="8">4</option>
          <option value="9">5</option>
          <option value="10">10</option>
          <option value="10+">10+</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="max-nights">Choose the maximum of nights</label>
        <select
          id="max-night"
          name="max-nights"
          value={maxNight}
          onChange={(e) => setMaxNight(e.target.value)}
        >
            <option value="">--Please choose an option--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">8</option>
            <option value="8">4</option>
            <option value="9">5</option>
            <option value="10">10</option>
            <option value="10+">10+</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="availability">Has availability</label>
        <input
          id="availability"
          name="availability"
          type="checkbox"
          value={availability}
          onChange={(e) => setAvailability(e.target.checked)}
        />
      </div>

      <button type="submit">Add property</button>
    </form>
  );
};

export default AddProperty;
