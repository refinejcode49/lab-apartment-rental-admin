import React, { useState } from 'react'

const AddProperty = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [neighbordOverview, setNeighbordOverview] = useState("");
    const [image, setImage] = useState("");
    const [country, setCountry] = useState(""); 
    const [city, setCity] = useState("");   
    const [neighborhood, setNeighborhood] = useState("");
    const [propertyType, setPropertyType] = useState("--Choose a property type--"); 
    const [roomType, setRoomType] = useState("--Choose a room type--"); 
    const [numBathroom, setNumBathroom] = useState("");
    const [numBedroom, setNumBedroom] = useState("");
    const [numBedPerRoom, setNumBedPerRoom] = useState("");
    const [amenities, setAmenities] = useState("");
    const [price, setPrice] = useState("0");
    const [minNight, setMinNight] = useState("1");
    const [maxNight, setMaxNight] = useState("1");
    const [availability, setAvailability] = useState(false);

    /*0: "Fire extinguisher"
1: "Extra pillows and blankets"2: "Shampoo"
3: "Air conditioning"
4: "First aid kit"
5: "Dishes and silverware"
6: "Microwave"
7: "TV"
8: "Oven"
9: "Washer"
10: "Hangers"
11: "Pocket wifi"
12: "Lock on bedroom door"
13: "Hot water"
14: "Wifi"
15: "Cooking basics"
16: "Free parking on premises"
17: "Iron"
18: "Hair dryer"
19: "Elevator"
20: "Essentials"
21: "Refrigerator"
22: "Bed linens"
23: "Kitchen"
24: "Coffee maker"
25: "Heating"
26: "Luggage dropoff allowed"
27: "Host greets you"
28: "Stove"
29: "Room-darkening shades"
30: "Central air conditioning"
31: "Coffee maker: Nespresso"
32: "Paid parking garage on premises"
33: "Long term stays allowed"
34: "Heating - split type ductless system"
35: "Dedicated workspace"
36: "Cleaning available during stay"
37: "Clothing storage"
38: "Bathtub"
39: "Private hot tub"
40: "Private patio or balcony"
41: "Dishwasher"
42: "Ethernet connection"
43: "Private entrance"
44: "TV with standard cable"
45: "Shower gel"
46: "Body soap"
47: "Hot water kettle"
48: "Laundromat nearby"
49: "Drying rack for clothing"
50: "Paid parking off premises"
51: "Smoke alarm"
52: "Conditioner"
53: "AC - split type ductless system"
54: "Freezer"
55: "Free washer u2013 In unit"
56: "Dining table"
57: "Free dryer u2013 In unit"
58: "Teka electric stove"
59: "Cleaning products"
60: "Crib"
61: "Baking sheet"
62: "Pack u2019n play/Travel crib"
63: "Coffee"
64: "Toaster"
65: "Blender"
66: "Clothing storage: closet and dresser"
67: "Wine glasses"
68: "Courtyard view"
69: "Dryer"
70: "City skyline view"
71: "Childrenu2019s dinnerware"
72: "Window AC unit"
73: "Portable air conditioning"
74: "Breakfast"
75: "Smoking allowed"
76: "Pets allowed"
77: "Wifi u2013 31 Mbps"
78: "Shared outdoor pool - available seasonally, open specific hours"
79: "Single level home"
80: "Free street parking"
81: "Portable fans"
82: "Clothing storage: closet"
83: "Patio or balcony"
84: "Carbon monoxide alarm"
85: "Shared backyard u2013 Fully fenced"
86: "Paid washer u2013 In unit"
87: "Paid dryer u2013 In unit"
88: "Beach access u2013 Beachfront"
89: "Stainless steel oven"
90: "High chair"
91: "Outdoor shower"
92: "Baby bath"
93: "Books and reading material"
94: "Fast wifi u2013 252 Mbps"
95: "HDTV with standard cable"
96: "Security cameras on property"
97: "Childrenu2019s books and toys"
98: "Paid parking on premises"
99: "Bidet"
100: "Mini fridge"
101: "Clothing storage: closet and wardrobe"
102: "Electric stove"
103: "Childrenu2019s books and toys for ages 5-10 years old"
104: "Teka  stainless steel oven"
105: "Children's playroom"
106: "Building staff"
107: "Hot tub"
108: "Self check-in"
109: "53\" HDTV with Netflix, DVD player"
110: "Mosquito net"
111: "Coffee maker: espresso machine"
112: "Piano"
113: "Keypad"
114: "Radiant heating"
115: "Barbecue utensils"
116: "Fast wifi u2013 287 Mbps"
117: "Bluetooth sound system"
118: "50\" HDTV with Amazon Prime Video, Netflix"
119: "Otro induction stove"
120: "Coffee maker: Keurig coffee machine, pour-over coffee"
121: "Outdoor dining area"
122: "Outdoor furniture"
123: "Paid street parking off premises"
124: "Balay refrigerator"
125: "Washer u2013u00a0In unit"
126: "Board games"
127: "Instituto Espau00f1ol body soap"
128: "Ceiling fan"
129: "Clothing storage: walk-in closet and closet"
130: "Paid parking lot off premises"
131: "Alexa Bluetooth sound system"
132: "Babysitter recommendations"
133: "Standalone high chair - available upon request"
134: "Whirlpool stainless steel induction stove"
135: "Smart lock"
136: "Crib - available upon request"
137: "Paid crib - available upon request"
138: "50\" HDTV with Netflix, standard cable"
139: "AEG electric stove"
140: "Backyard"
141: "Clothing storage: wardrobe"
142: "30\" HDTV with standard cable"
143: "Fast wifi u2013 298 Mbps"
144: "Pool"
145: "Gym"
146: "Paid pack u2019n play/travel crib - available upon request"
147: "Coffee maker: drip coffee maker"
148: "Paid parking garage on premises u2013 1 space"
149: "Teka refrigerator"
150: "Teka oven"
151: "Private backyard"
152: "Safe"
153: "Shared pool"
154: "Paid parking garage off premises"
155: "32\" HDTV with standard cable"
156: "Coffee maker: french press"
157: "Stainless steel gas stove"
158: "Exercise equipment"
159: "25\" HDTV"
160: "Fast wifi u2013 304 Mbps"
161: "Garden view"
162: "Central heating"
163: "36\" HDTV"
164: "Clothing storage: closet, wardrobe, and dresser"
165: "Shared backyard u2013 Not fully fenced"
166: "JVC sound system with aux"
167: "42\" HDTV with standard cable"
168: "Private gym in building"
169: "Private BBQ grill: charcoal"
170: "Mountain view"
171: "Pool table"
172: "Game console: Nintendo Wii"
173: "Exercise equipment: elliptical, free weights"
174: "Bosch induction stove"
175: "Portable heater"
176: "Paid high chair - available upon request"
177: "32\" HDTV with Chromecast"
178: "BBQ grill"
179: "Lockbox"
180: "Single oven"
181: "Coffee maker: espresso machine, Nespresso"
182: "Hammock"
183: "Legren body soap"
184: "Legren conditioner"
185: "Sun loungers"
186: "Fast wifi u2013 521 Mbps"
187: "Induction stove"
188: "TV with standard cable, DVD player"
189: "Pool view"
190: "Other electric stove"
191: "Private outdoor pool - available all year, open 24 hours"
192: "Paid parking garage on premises u2013 20 spaces"
193: "Paid crib - always at the listing"
194: "Private backyard u2013 Fully fenced"
195: "48\" HDTV with standard cable"
196: "Indesit refrigerator"
197: "Free washer"
198: "HDTV"
199: "Coffee maker: pour-over coffee"
200: "Paid parking garage on premises u2013 90 spaces"
201: "Record player"
202: "46\" HDTV"
203: "Babaria conditioner"
204: "Clarel body soap"
205: "Fagor gas stove"
206: "Denon sound system with Bluetooth and aux"
207: "Soft cu00edtricos y romero shampoo"
208: "Bodyplus body soap"
209: "Electrolux electric stove"
210: "24\" HDTV with DVD player"
211: "Philips sound system with aux"
212: "Fagor refrigerator"
213: "Ikea stainless steel oven"
214: "LG  Bluetooth sound system"
215: "Bikes"
216: "32\" HDTV with Disney+, HBO Max, Amazon Prime Video, Apple TV, standard cable, Netflix"
217: "Exercise equipment: yoga mat"
218: "Shared gym nearby"
219: "Dove body soap"
220: "Envase de Champu00fa rellenable por razones mediambientales shampoo"
221: "Coffee maker: Nespresso, pour-over coffee"
222: "Paid clamp on table seat high chair - always at the listing"
223: "Envase de Gel de ducha rellenable por razones medioambientales body soap"
224: "Indoor fireplace"
225: "Gas stove"
226: "Yves Rocher body soap"
227: "Fast wifi u2013 627 Mbps"
228: "Teka  oven"
229: "Haier refrigerator"
230: "Teka gas stove"
231: "Shared patio or balcony"
232: "Bonte  conditioner"
233: "40\" HDTV with Fire TV, standard cable, Netflix"*/ 

  return (
    <form>
        <span>Add a property</span>
        <>
            <label>
                <input name="name" type="text" placeholder="type the name of the property" value={name}>Name: </input> 
            </label>
            <label>
                <input name="image" type="text" placeholder="type the description of the property" value={description}>Description: </input>
            </label>
            <label>
                <input name="neighbourhood-overview" type="text" placeholder="type the overview of the property neighbourhood" value={neighbordOverview}>Neighborhood Overview: </input>
            </label>
            <label>
                <input name="image" type="image" value={image}>Picture: </input>
            </label>
            <label>
                <input name="country" type="text" placeholder="type the country of the property" value={country}>Country: </input>
            </label>
            <label>
            <input name="city" type="text" placeholder="type the city of the property" value={city}>City: </input>
            </label>

            <label>
                <input name="property-neighbourhood"type="text" placeholder="type the neighbourhood of the property" value={neighborhood}>Neighborhood: </input>
            </label>

            <label>
                <input name="property-neighbourhood" type="text" placeholder="type the neighbourhood of the property" value={neighborhood}>Neighborhood: </input>
            </label>

            <label>
                <input name="property-type" type="text" placeholder="type of property" value={propertyType}>Property type: </input>
            </label>

            <label>
                <input name="room-type" type="text" placeholder="type of room" value={roomType}>Room type: </input>
            </label>

            <label>
                <input name="num-of-bathroom" type="number" value={numBathroom}>Number of bathrooms: </input>
            </label>

            <label>
                <input name="num-of-bedroom" type="number" value={numBedroom}>Number of bathrooms: </input>
            </label>

            <label>
                <input name="num-of-bedroom-per-room" type="number" value={numBedPerRoom}>Number of bed per room: </input> 
            </label>

            <label>
                <input value={amenities}>Amenities</input>
            </label>

            <label>
                <input name="price" type="number" value={price}>Price: </input>
            </label>

            <label>
                <select name="min-nights" value={minNight}>Minimum of nights: 
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
            </label>

            <label>
                <select value={maxNight}>Maximum of nights: </select>
                <option value="">---None---</option>
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
            </label>

                <input name="availability" type="checkbox" value={availability}>Availability </input>
    
        <button type="submit">Add property</button>
    </form>
    )
}

export default AddProperty