import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddProperty = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [neighbordOverview, setNeighbordOverview] = useState("");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [roomType, setRoomType] = useState("Entire home/apt");
  const [accommodates, setAccommodates] = useState(1);
  const [numBathroom, setNumBathroom] = useState("");
  const [numBedroom, setNumBedroom] = useState("");
  const [numBedPerRoom, setNumBedPerRoom] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [price, setPrice] = useState(0.0);
  const [minNight, setMinNight] = useState("");
  const [maxNight, setMaxNight] = useState("");
  const [bookable, setbookable] = useState(false);

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

  const navigate = useNavigate();

  function handleCreateProperty(event) {
    event.preventDefault();
    const newPropertyToAdd = {
      id: uuidv4(),
      name: name,
      description: description,
      neighborhood_overview: neighbordOverview,
      picture_url:
        image.length <= 0
          ? "https://dchba.org/wp-content/uploads/2020/06/house-placeholder.png"
          : image,
      neighbourhood: `${city}, ${country}`,
      room_type: roomType, //Private room || Entire home/apt
      accommodates: accommodates,
      bathrooms_text:
        numBathroom <= 0
          ? null
          : numBathroom > 1
          ? `${numBathroom} baths`
          : "1 bath",
      bedrooms: Number(numBedroom),
      beds: Number(numBedPerRoom),
      amenities: amenities,
      price: `$${price}`,
      minimum_nights: Number(minNight),
      maximum_nights: Number(maxNight),
      instant_bookable: bookable,
      // default values
      review_scores_rating: 0,
      host_name: "John Doe",
      host_since: "2010-06-21",
      host_location: `${city}, ${country}`,
      host_identity_verified: true,
      host_is_superhost: true,
    };
    // console.log(newPropertyToAdd);
    setData([newPropertyToAdd, ...data]);
    navigate("/");
  }

  function handleAmenity(e) {
    // console.log("handle amenities");
    const { value, checked } = e.target;
    if (checked) {
      setAmenities([...amenities, value]);
    } else {
      setAmenities(amenities.filter((amenity) => amenity !== value));
    }
  }

  return (
    <form onSubmit={handleCreateProperty} className="form-container">
      <h2 className="detail-title">Add a property</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name of the property"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autocomplete="off"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type a description of the property"
          rows="5"
          autocomplete="off"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="neighbourhood-overview" className="label-xl">
          Neighbourhood Overview
        </label>
        <textarea
          name="neighbourhood-overview"
          placeholder="Type the overview of the property neighbourhood"
          value={neighbordOverview}
          onChange={(e) => setNeighbordOverview(e.target.value)}
          rows="5"
          autocomplete="off"
        ></textarea>
      </div>
      <div className="flex-col">
        <div className="form-group">
          <label htmlFor="image-url">Image URL</label>
          <input
            id="image-url"
            name="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            autocomplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            autocomplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            autocomplete="off"
          />
        </div>

        <div className="form-group-radio">
          <p className="form-group-radio-title">Type of room : </p>
          <div className="radio-control">
            <input
              type="radio"
              id="private-room"
              name="room-type"
              placeholder="type of room"
              value="Private room"
              onChange={(e) => setRoomType(e.target.value)}
            />
            <label htmlFor="room-type">Private room</label>
          </div>
          <div className="radio-control">
            <input
              type="radio"
              id="entire-home"
              name="room-type"
              placeholder="type of room"
              value="Entire home/apt"
              onChange={(e) => setRoomType(e.target.value)}
            />
            <label htmlFor="entire-home">Entire home</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="accommodates">Accommodate(s)</label>
          <input
            id="accommodates"
            name="accommodates"
            type="number"
            placeholder="1"
            value={accommodates}
            onChange={(e) => setAccommodates(e.target.value)}
            min="1"
            autocomplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="num-of-bedroom">Bedroom(s)</label>
          <input
            id="num-of-bedroom"
            name="num-of-bedroom"
            type="number"
            placeholder="0"
            value={numBedroom}
            onChange={(e) => setNumBedroom(e.target.value)}
            min="0"
            autocomplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="num-of-bedroom-per-room">Number of bed(s)</label>
          <input
            id="num-of-bedroom-per-room"
            name="num-of-bedroom-per-room"
            type="number"
            placeholder="0"
            value={numBedPerRoom}
            onChange={(e) => setNumBedPerRoom(e.target.value)}
            min="0"
            autocomplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="num-of-bathroom">Bathroom(s)</label>
          <input
            id="num-of-bathroom"
            name="num-of-bathroom"
            type="number"
            placeholder="0"
            value={numBathroom}
            onChange={(e) => setNumBathroom(e.target.value)}
            min="0"
            autocomplete="off"
          />
        </div>
      </div>
      <div className="form-group-radio">
        <p className="form-group-radio-title">Amenities:</p>
        <div className="grid-col">
          {amenitiesArr.map((oneAmenity, index) => {
            return (
              <div key={`amenity_n${index}`}>
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
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          min="0.00"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          autocomplete="off"
        />
      </div>
      <div className="flex-col">
        <div className="form-group-select">
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
            <option value="7">7</option>
          </select>
        </div>

        <div className="form-group-select">
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
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>

        <div className="form-group-check">
          <label htmlFor="bookable">Instant bookable</label>
          <input
            id="bookable"
            name="bookable"
            type="checkbox"
            value={bookable}
            onChange={(e) => setbookable(e.target.checked)}
          />
        </div>
      </div>

      <button type="submit" className="detail-btn btn-success">
        Add property
      </button>
    </form>
  );
};

export default AddProperty;
