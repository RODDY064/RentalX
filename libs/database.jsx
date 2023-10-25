 
 export function isoDateToNormal(isoDate) {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}



const footerList = [
    {
      id: 0,
      topic: 'Our Products',
      path: [
        { name: 'Career', link: '/' },
        { name: 'Features', link: '/' },
        { name: 'Cars', link: '/rent' },
        { name: 'Packages', link: '/' },
      ],
    },
    {
      id:1,
      topic: 'About Us',
      path: [
        { name: 'Company', link: '/about' },
        { name: 'Team', link: '/about' },
        { name: 'Services', link: '/about' },
        { name: 'Reviews', link: '/about' },
      ],
    },
    {
      id:2,
      topic: 'Contact',
      path: [
        { name: 'Contact Info', link: '/contact' },
        { name: 'Support', link: '/contact' },
      ],
    },
    {
      id: 3,
      topic: 'Terms and Conditions',
      path: [
        { name: 'Terms of Use', link: '/termsandconditions' },
        { name: 'Privacy', link: '/termsandconditions' },
        { name: 'Cookies Settings', link: '/' },
      ],
    },
    {
      id:4,
      topic: 'Help Center',
      path: [
        { name: 'FAQs', link: '/contact' },
        { name: 'Contact Support', link: '/contact' },
      ],
    },
    {
      id:5,
      topic: 'Extra',
      path: [
        { name: 'My Reservations', link: '/user' },
        { name: 'Promotions', link: '/user' },
        { name: 'Booking History', link: '/user' },
      ],
    },
  ];
  
  const stars = [
    {
      id:0,
      image:'/assets/images/star_2.svg'
     
    },
    {
      id:1,
      image:'/assets/images/star_1.svg'

    },
    {
      id:2,
      image:'/assets/images/star_0.svg'

    },
    {
      id:3,
      image:'/assets/images/star_3.svg'

    } 
  ]
  
  const accountPageItems = [
    { id: 0, item: "Profile" },
    { id: 1, item: "Booking History" },
    { id: 2, item: "Payment History" },
    { id: 3, item: "Change Password" },
    { id: 4, item: "Customer Support and Help Center" },
    { id: 5, item: "Feedback" },
    
   
  ];
  
  const faqs = [
    {
      id: 1,
      question: "How can I make a reservation for a rental car?",
      answer: "Certainly, reserving a car is as easy as a breeze! Just hop onto our user-friendly website, select your preferred rental dates, choose a pick-up location that suits your fancy, and then, the pièce de résistance, pick the car that's a perfect match for your journey. The next step is a joyride through our simple booking process, and voilà, your reservation is confirmed, just like that!"
    },
    {
      id: 2,
      question: "What types of rental cars do you offer?",
      answer: "We've got an automotive symphony waiting for you! From the sleek and savvy economy cars that hug the road with grace to compact cruisers designed for urban escapades, our lineup includes midsize maestros, SUV behemoths, and more. You're the conductor of this car concerto, so choose the instrument that strikes a chord with your travel plans."
    },
    {
      id: 3,
      question: "What is the minimum age requirement for renting a car?",
      answer: "Here's the age-old question! In most cases, the magic number is 21, but, like any great story, there are exceptions. Some car categories may ask for a bit more life experience. Check the specifics for your location, and remember, it's just a number."
    },
    {
      id: 4,
      question: "Do I need insurance when renting a car?",
      answer: "Insurance, the unsung hero of the open road! While it's not the star of the show, it's a wise co-pilot. Think of it as your safety net, guarding you from unexpected twists in the plot. You can add this guardian angel when booking to keep your journey as smooth as a freshly paved highway."
    },
    {
      id: 5,
      question: "Can I pick up and drop off the car at different locations?",
      answer: "Absolutely! We offer the 'Choose Your Own Adventure' experience with one-way rentals. Imagine starting your journey in one place and wrapping it up in another – it's like writing your own travel story. Just remember, there might be a few extra plot twists in the form of additional fees."
    },
    {
      id: 6,
      question: "What documents do I need to rent a car?",
      answer: "For your rental adventure, you'll need three trusty companions: your trusty driver's license, a reliable credit card, and a form of identification. International explorers may need a few more travel buddies, so check the specifics to make sure you're well-prepared for your journey."
    },
    {
      id: 7,
      question: "Can I cancel or modify my reservation?",
      answer: "Of course, life happens, and we get that! You can usually tweak or cancel your plans, but there might be a little twist in the plot in the form of cancellation fees, depending on when you make the changes. So, consult our cancellation policy for the full story."
    },
    {
      id: 8,
      question: "What is the fuel policy for rental cars?",
      answer: "Here's the scoop – our standard policy is to hand you a car with a full tank of liquid gold (a.k.a. gas). All we ask is that you return it in the same fuel-powered glory. Alternatively, you can prepay for your liquid sunshine at the time of booking – it's like having a gas genie at your service."
    },
    {
      id: 9,
      question: "Are there any additional charges or fees to be aware of?",
      answer: "Yes, indeed, there are a few co-stars in this travel drama. Additional charges might sneak into the story, including taxes, airport fees, mileage costs, and more. To keep you in the loop, we've got a 'Terms and Conditions' chapter in the booking script that spells out all the financial characters you might encounter on your journey."
    },
    {
      id: 10,
      question: "What should I do in case of an accident or breakdown?",
      answer: "In the unfortunate event of an accident, consider it a plot twist. Call the local authorities to set the scene, and don't forget to summon your car rental provider. If your car decides to take an unexpected intermission (breakdown), reach out to the provided emergency number, and our support team will be your 24/7 road-side savior."
    }
  ];
  
  const termsAndConditions = [
    {
      topic: "Rental Agreement",
      explanation: "This is like the contract of friendship between you and our car. It lays out the rules for a smooth ride."
    },
    {
      topic: "Eligibility",
      explanation: "To hop behind the wheel, you've gotta be old enough (legally speaking) and have a valid driver's license."
    },
    {
      topic: "Booking and Payment",
      explanation: "We need to chat about the nitty-gritty – booking steps, how to pay, and any deposits you might need to drop."
    },
    {
      topic: "Cancellation and Refunds",
      explanation: "Life happens, plans change. We've got your back, but let's talk about the when and how of canceling and refunds."
    },
    {
      topic: "Vehicle Condition",
      explanation: "Our cars come as-is. Before you zoom off, we'll note any pre-existing bumps and bruises."
    },
    {
      topic: "Insurance",
      explanation: "Safety first! We'll discuss your insurance options to protect you on the road."
    },
    {
      topic: "Fuel Policy",
      explanation: "Don't forget to feed the beast! We'll explain if it's 'return full' or 'we'll fill it for a fee' policy."
    },
    {
      topic: "Additional Drivers",
      explanation: "Thinking about sharing the driving fun? We'll discuss adding extra drivers and the cost involved."
    },
    {
      topic: "Mileage Limits",
      explanation: "Roads have limits, and so do our cars. We'll explain the miles you can travel and the charges if you go overboard."
    },
    {
      topic: "Maintenance and Breakdowns",
      explanation: "Cars need care. If something goes south, we'll guide you on what to do for a smooth recovery."
    },
    {
      topic: "Usage Restrictions",
      explanation: "No off-roading adventures or crossing borders without our consent. We like our cars to stay close to home."
    },
    {
      topic: "Penalties and Fines",
      explanation: "Be on your best behavior. We'll outline fines for things like smoking in the car or becoming a speedster."
    },
    {
      topic: "Privacy Policy",
      explanation: "We promise not to be nosy, but we do need some info. Take a peek at our privacy policy for the full story."
    },
    {
      topic: "Dispute Resolution",
      explanation: "If we ever have a spat, don't worry, we'll make up. Let's discuss how we'll kiss and make up."
    },
    {
      topic: "Termination",
      explanation: "Sometimes, it's time to part ways. We'll chat about when we might need to break up with our car relationship."
    },
    {
      topic: "Governing Law",
      explanation: "If things get serious, we'll meet in our jurisdiction. It's not as fancy as it sounds, we promise."
    }
  ];
  
  // These terms and explanations are designed to be both informative and engaging for your website!
  

  export {
    footerList,
    stars,
    accountPageItems,
    faqs,
    termsAndConditions
  }

  
  
  